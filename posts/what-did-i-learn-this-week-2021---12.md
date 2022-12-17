---
title: What did I learn this week (2021) - 12
description: Weekly summarization and review of things I've learned in the third week of March 2021 
published: true
publishedAt: 2021-03-21T00:00:00.000Z
updatedAt: 2021-03-21T00:00:00.000Z
category: learnings
image: 'assets/banners/21'
keywords:
    - dotnet
    - finance
    - git
authors:
  - Krishna Mohan A M
---


1. Learned how to create a dotnet [notebook](https://devblogs.microsoft.com/dotnet/net-interactive-preview-3-vs-code-insiders-and-polyglot-notebooks/) in Visual Studio Code.
2. Learned that VS Code insider is [same](https://stackoverflow.com/questions/53944549/what-are-the-differences-between-visual-studio-code-and-visual-studio-code-insid) as VS Code Beta version.
3. [Draft Red herring prospectus](https://zerodha.com/varsity/chapter/the-ipo-markets-part-2/) (DRHP) – If the company gets the initial SEBI nod, then the company needs to prepare the DRHP. A DRHP is a document that gets circulated to the public. Along with a lot of information, DRHP should contain the following details:

    - The estimated size of the IPO
    - The estimated number of shares being offered to the public
    - Why the company wants to go public and how does the company plan to utilize the funds along with the timeline projection of fund utilization
    - Business description including the revenue model, expenditure details
    - Complete financial statements
    - Management Discussion and Analysis – how the company perceives future business operations to emerge
    - Risks involved in the business
    - Management details and their background
4. **How to re-do a reverted merge**
    - Checkout a new branch from the master.
    - Revert the reverted merge. To revert a merge you need to pass the [parent number](https://stackoverflow.com/a/7100005/1520750) along with the revert command.
    ```bash
    git revert -m 2 8989ee0 
    ```
    - Add your fixes
    - Create a new pull request to the master.
5. Windows 8+ uses a [hybrid boot system](https://superuser.com/a/954149/930941) and it do not shutdown the system completely when user shutdowns the computer. Due to this system uptime is calculated from the last time we restarted the machine which may not be equal to the current session time. One trick is to check the [event logs](https://superuser.com/a/909172/930941). I also [found a powershell script](https://community.idera.com/database-tools/powershell/powertips/b/tips/posts/get-sleep-and-hibernation-times) to display the hibernate time from the event logs.
    ```powershell
    function Get-HibernationTime
    {    
        # get hibernation events
        Get-EventLog -LogName system -InstanceId 1 -Source Microsoft-Windows-Power-TroubleShooter |
        ForEach-Object {    
            # create new object for results
            $result = 'dummy' | Select-Object -Property ComputerName, SleepTime, WakeTime, Duration
            
            # store details in new object, convert datatype where appropriate
            [DateTime]$result.Sleeptime = $_.ReplacementStrings[0]
            [DateTime]$result.WakeTime = $_.ReplacementStrings[1]
            $time = $result.WakeTime - $result.SleepTime
            $result.Duration = ([int]($time.TotalHours * 100))/100
            $result.ComputerName = $_.MachineName
            
            # return result
            $result
        }
    } 
    ```
