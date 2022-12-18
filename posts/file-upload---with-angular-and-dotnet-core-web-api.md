---
title: File Upload - With Angular and Dotnet Core Web API
description: Minimal implementation of file upload using Angular and dotnet core web API.
published: true
publishedAt: 2020-09-02T00:00:00.000Z
updatedAt: 2020-09-02T00:00:00.000Z
category: tech
image: 'banners/03'
keywords: 
    - angular
    - dotnet
    - API
authors:
  - Krishna Mohan A M
---

# File Upload - With Angular and Dotnet Core Web API

In this blog post we'll have a minimal implementation of file upload using [Angular](https://angular.io) and dotnet core web API. No other fancy stuffs. To completely understand the gist,some familiarity with Angular and dotnet core is required.

## Contents

1. [Prerequisite]()
2. [Creating Web API]()
3. [Creating Angular Frontend]()
4. [What's next]()

## Prerequisites

* Install [Angular CLI](https://angular.io/cli#installing-angular-cli)
* Install [Dotnet Core](https://dotnet.microsoft.com/download/dotnet-core/3.1). For this post I'll be using dotnet core version 3.1.

## Creating Web API

First we need to create a [dotnet core web api project](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&tabs=visual-studio-code#create-a-web-project) and then add `FileUploadController` [Controller class](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&tabs=visual-studio-code#create-a-web-project)

### Add Serilog for logging (Optional)

For logging I'll be using [Serilog](https://serilog.net/) and a flat file sink. To configure this we need to install the following dependencies via Nuget. 
* Serilog
* Serilog.AspNetCore
* Serilog.Sinks.file

Then update the `Program.cs` file.
```csharp
    public class Program
    {
        public static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                .Enrich.FromLogContext()
                .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
                .CreateLogger();
            try
            {
                Log.Information("app starting");
                CreateHostBuilder(args).Build().Run();
                Log.Information("app terminated");
            }
            catch (Exception e)
            {
                Log.Fatal("app crashed", e);
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
                .UseSerilog();
    }
```
In `FileUploadController.cs` file add the parameter `ILogger<FileUploadController> logger` to the constructor.

```csharp
    private readonly ILogger<FileUploadController> _logger;

    public FileUploadController(ILogger<FileUploadController> logger)
    {
        _logger = logger;
    }
```

### Get upload path from configuration (Optional)

If you need to have file upload path configurable, you can add the path as key-value pair in `appsettings.json` file. e.g:
``` json
    "FileUploadPath": "C:\\KrishnaMohan\\Builds\\uploads"
```
And update `FileUploadController.cs` constructor to add the configuration parameter.

```csharp
    private readonly IConfiguration _configuration;
    private readonly ILogger<FileUploadController> _logger;

    public FileUploadController(IConfiguration configuration, ILogger<FileUploadController> logger)
    {
        _configuration = configuration;
        _logger = logger;
    }
```

### Add methods

Let's add two methods to handle single file upload and multiple file upload. Argument for methods will be of type [IFormFile](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.iformfile?view=aspnetcore-3.1) which represent the file send with HttpRequest.

* POST Method for Single File Upload
```csharp
    [Route("single-file")]
    [HttpPost]
    public async Task<IActionResult> PostSingleFile(IFormFile formFile)
    {            
        long size = formFile.Length;        
        _logger.LogInformation($"Got {1} files");            
        if (formFile.Length > 0)
        {
            var filePath = Path.Join(_configuration["FileUploadPath"], formFile.FileName);
            _logger.LogInformation($"File Name: {formFile.FileName}. File Path: {filePath}");

            using (var stream = System.IO.File.Create(filePath))
            {
                await formFile.CopyToAsync(stream);
            }
        }
        _logger.LogInformation("All files saved successfully");

        return Ok(new { count = 1, size });
    }
```

* POST Method for Multiple File Upload
```csharp
    [Route("multiple-files")]
    [HttpPost]
    public async Task<IActionResult> PostMultipleFiles(List<IFormFile> files)
    {
        long size = files.Sum(f => f.Length);
        _logger.LogInformation($"Got {files.Count} files");
        foreach (var formFile in files)
        {
            if (formFile.Length > 0)
            {
                var filePath = Path.Join(_configuration["FileUploadPath"], formFile.FileName);
                _logger.LogInformation($"File Name: {formFile.FileName}. File Path: {filePath}");

                using (var stream = System.IO.File.Create(filePath))
                {
                    await formFile.CopyToAsync(stream);
                }
            }
        }
        _logger.LogInformation("All files saved successfully");
        return Ok(new { count = files.Count, size });
    }
```

And that's it. We are done with the API part.

## Creating Angular Frontend

Using Angular CLI create a [new project](https://angular.io/cli/new) and add `file-upload` [component](https://angular.io/cli/generate#component) and [service](https://angular.io/cli/generate#service). The logic for getting the user selected files resides in the component and the logic for sending post request resides in the service.

* Update `file-upload.service.ts` to add our methods to make the http request. Make sure that you import [HttpClientModule](https://angular.io/api/common/http/HttpClientModule) in your module file. Here we'll be using [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) to send the file along with the request.
``` typescript
    constructor(private httpClient: HttpClient) { }

    postFile(filesToUpload: File): Observable<boolean> {
        const endpoint = 'https://localhost:44352/api/fileupload/single-file';
        const formData: FormData = new FormData();    
        formData.append('formFile', filesToUpload, filesToUpload.name);      
        return this.httpClient
        .post(endpoint, formData)
        .pipe(map(() => { return true; }));
    }

    postMultipleFiles(filesToUpload: FileList): Observable<boolean> {
        const endpoint = 'https://localhost:44352/api/fileupload/multiple-files';
        const formData: FormData = new FormData();
        Array.from(filesToUpload).forEach(file => {
        formData.append('files', file, file.name);  
        });    
        return this.httpClient
        .post(endpoint, formData)
        .pipe(map(() => { return true; }));
    }
```
* Add the following methods in `file-upload.component.ts` and update the constructor to add the service.
``` typescript
    export class FileUploadComponent {
        filesToUpload: FileList;
        constructor(private fileUploadService: FileUploadService){}

        filesChange($event) {    
            this.filesToUpload = $event.target.files;
        }

        uploadFiles() {    
            if(this.filesToUpload.length > 1) {
            this.fileUploadService.postMultipleFiles(this.filesToUpload)
            .subscribe((res)=> console.log(res));
            } else {
            this.fileUploadService.postFile(this.filesToUpload[0])
            .subscribe((res)=> console.log(res));
            }
        }
    }
```
* Update `file-upload.component.html` to add the html inputs. Ideally we should use a form, but for simplicity I'm using button click event to trigger the upload. Also I've mentioned `image/*` in the accept attribute to only allow image file types but this is optional.
``` html
    <label for="file">Choose File</label>
    <input type="file" accept="image/*" multiple (change)="filesChange($event)">
    <button type="button" (click)="uploadFiles()">{{'Upload' | uppercase}}</button>
```

## Testing

* [Start the Web API](https://docs.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core-ef-step-02?view=vs-2019#run-the-application) and Angular project (use `npm start`). 
* Navigate to `http:/localhost:4200`
* Select the files and click on `Update`.
* Verify the files are uploaded to the configured folder.

## What's next

This a bare minimum code snippet which is not ideal for production envrionment. We can extend this with reactive forms and update the file to AWS S3 buckets. Well that is up for you. 