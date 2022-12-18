---
title: Generating Code Coverage Reports in Dotnet Core
description: Unlike other application frameworks .NET Core do not provide code coverage reports out of the box. Here I’ll be using a different approach which actually suited my web application. Without further ado, let’s get started.
published: true
publishedAt: 2019-07-05T00:00:00.000Z
updatedAt: 2019-07-05T00:00:00.000Z
category: tech
image: 'banners/04'
keywords: 
    - dotnet
authors:
  - Krishna Mohan A M
---

Unlike other application frameworks **.NET Core** do not provide code coverage reports out of the box, even the code coverage [support ](https://github.com/microsoft/vstest/issues/981)was provided only in dotnet core version 2.1. But the ‘**Code Coverage Analysis**’ is provided with Visual Studio Enterprise edition. You can find more information [here](https://docs.microsoft.com/en-us/visualstudio/test/using-code-coverage-to-determine-how-much-code-is-being-tested?view=vs-2017).

That’s okay, we’ve other tools available to get the code coverage reports and here I’ll be briefly explaining about it. There is already a blog post about this [topic](https://gunnarpeipman.com/aspnet/code-coverage/) by [Gunnar Peipman](https://twitter.com/gpeipman). You can refer that as well. Here I’ll be using a different approach which actually suited my web application. Without further ado, let’s get started.

## Contents

* Prerequisites
* Creating dotnet application and adding test project
* Running tests with CLI
* Convert *.coverage file to *.coveragexml file
* Generate Reports using ReportGenerator
* Powershell script with all the steps
* Conclusion

## Prerequisites

You need to install/Configure:

* Dotnet core version 2.1 or above.
* Visual Studio 2017 or above / Visual studio code.
* [Daniel Palme](https://github.com/danielpalme)’s [ReportGenerator](https://danielpalme.github.io/ReportGenerator/usage.html)
* [Microsoft.CodeCoverage](https://www.nuget.org/packages/Microsoft.CodeCoverage/)

## Creating dotnet application and adding test project

You can make use of *dotnet new* command or Visual Studio templates for creating a new project and test project. Here I’ll be covering MSTest, you can try with another unit testing framework as well.

If you’ve a dotnet core application with version 1.x, you can do the following steps to get the code coverage.

• Upgraded test related nuget refernces to latest version

```xml
<PackageReference Include=”Microsoft.NET.Test.Sdk” Version=”15.9.0" />
<PackageReference Include=”MSTest.TestAdapter” Version=”1.3.2" />
 <PackageReference Include=”MSTest.TestFramework” Version=”1.3.2" />
 ```

• Add the following config in *.csproj files. More information is available [here.](https://github.com/Microsoft/vstest/issues/800)

```xml
<DebugType>Full</DebugType>
```

## Running tests with CLI

Once we’ve created our application and added sufficient unit tests. We need to run these tests and get the code coverage info. You do so by running the following command.

```bash
dotnet test <Path to *.csproj file> --results-directory:<Test Result directory> --collect:"Code Coverage"
```

But I had a problem, dotnet was analyzing my dependent libraries as well. I was using [Moq ](https://github.com/moq/moq)for mocking and [GenFu](https://github.com/MisterJames/GenFu) to generate random test data. So I had to exclude these dlls during the code coverage analysis by creating a [runsettings](https://docs.microsoft.com/en-us/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file?view=vs-2019) file and add the following configuration:

```xml
<ModulePaths>              
  <Exclude>                
    <ModulePath>.*Moq.dll</ModulePath>
    <ModulePath>.*GenFu.dll</ModulePath>                
  </Exclude>
</ModulePaths>
```

Include and exclude nodes use regular expressions. More information is available [here](https://docs.microsoft.com/en-us/visualstudio/test/customizing-code-coverage-analysis?view=vs-2019#regular-expressions).

Now we need to run *test *command using this .runsettings file.

```bash
dotnet test <Path to .csproj file> --settings:<Path to .runsettings file>
```

This will generate *.coverage file inside a folder whose name corresponds to a GUID. Right now dotnet core CLI [do not support](https://github.com/microsoft/vstest/issues/1957#issue-420578504) custom name for *.coverage file.

## Convert *.coverage file to *.coveragexml file

*CodeCoverage.exe *is a tool that comes with the installation of Visual Studio. To generate a coverage report with ReportGenerator the file has to be converted to xml format.

To get the xml file you can use the following command:

 ```xml
 <UserProfile>\.nuget\packages\microsoft.codecoverage\<version>\build\netstandard1.0\CodeCoverage\CodeCoverage.exe analyze  /output:<xml file name with Path>.coveragexml  <path to coverage file>

# Eg: C:\Users\krishnamohan\.nuget\packages\microsoft.codecoverage\15.9.0\build\netstandard1.0\CodeCoverage\CodeCoverage.exe analyze  /output:d:\MyTestOutput.coveragexml  d:\SomeName.coverage
 ```

## Generate Reports using ReportGenerator

We need to run another command using the installed ReportGenerator.dll.

```shell
dotnet <UserProfile>\.nuget\packages\reportgenerator\<version>\tools\netcoreapp2.1\ReportGenerator.dll "-reports:<Coveragexml file path>" "-targetdir:<path to coverage report>"
<#
Eg: dotnet C:\Users\krishnamohan\.nuget\packages\reportgenerator\4.1.10\tools\netcoreapp2.1\ReportGenerator.dll "-reports:d:\MyTestOutput.coveragexml" "-targetdir:d:\coveragereport"
#>
```

This will generate reports in *.htm format in the given output folder. If you open the index.htm file you can view the report.

![Sample Report Image](assets/images/03_01.png)*Sample Report Image. Source: https://github.com/danielpalme/ReportGenerator*

## Powershell script with all the steps

 ```powershell
 param(
    [Parameter(Mandatory=$true)]
    [string]$testProjectPath,
    [Parameter(Mandatory=$true)]
    [string]$testSettingsPath,
    [Parameter(Mandatory=$true)]
    [string]$testResultsFolder
)

<#
echo "Test Project Path" $testProjectPath
echo "Test Settings Path" $testSettingsPath
echo "Test Results Folder" $testResultsFolder
#>

try {

    if (-not (Test-Path $testProjectPath)) 
    {
        throw [System.IO.FileNotFoundException] "$testProjectPath not found."
    }
    if (-not (Test-Path $testSettingsPath)) 
    {
        throw [System.IO.FileNotFoundException] "$testSettingsPath not found."
    }
    if (-not (Test-Path $testResultsFolder)) 
    {
        throw [System.IO.FileNotFoundException] "$testResultsFolder not found."
    }

    dotnet test $testProjectPath --settings:$testSettingsPath 
    $recentCoverageFile = Get-ChildItem -File -Filter *.coverage -Path $testResultsFolder -Name -Recurse | Select-Object -First 1;
    write-host 'Test Completed'  -ForegroundColor Green

    C:\Users\krishnamohan\.nuget\packages\microsoft.codecoverage\15.9.0\build\netstandard1.0\CodeCoverage\CodeCoverage.exe analyze  /output:$testResultsFolder\MyTestOutput.coveragexml  $testResultsFolder'\'$recentCoverageFile
    write-host 'CoverageXML Generated'  -ForegroundColor Green

    dotnet C:\Users\krishnamohan\.nuget\packages\reportgenerator\4.1.10\tools\netcoreapp2.1\ReportGenerator.dll "-reports:$testResultsFolder\MyTestOutput.coveragexml" "-targetdir:$testResultsFolder\coveragereport"
    write-host 'CoverageReport Published'  -ForegroundColor Green

}
catch {

    write-host "Caught an exception:" -ForegroundColor Red
    write-host "Exception Type: $($_.Exception.GetType().FullName)" -ForegroundColor Red
    write-host "Exception Message: $($_.Exception.Message)" -ForegroundColor Red

}
 ```

## Conclusion

It took some time for me to figure it out as lot of information regarding this was scattered all over the internet. Finally it was worth the effort and coverage reports really improve quality of unit tests and helps developer to write better unit tests. Hope this blog post will be helpful for dotnet developers treading the same path.
