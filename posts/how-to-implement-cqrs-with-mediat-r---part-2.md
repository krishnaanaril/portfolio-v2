---
title: How to implement CQRS with MediatR - Part 2
description: This post is about implementing mediator pattern in a dotnet WebAPI using MediatR library.
published: true
publishedAt: 2021-02-27T00:00:00.000Z
updatedAt: 2021-02-27T00:00:00.000Z
category: tech
image: 'assets/banners/17'
keywords: 
    - dotnet
    - mediatr
    - CancellationToken
authors:
  - Krishna Mohan A M
---


In this post we'll be using MediatR with a dotnet WebAPI. If you want to read about its implementation in a console application, check out my other blog [post](https://krishnamohan.dev/blog/how-to-implement-cqrs-with-mediat-r---part-1).

For basic cases you can implement the message types and handlers mentioned in the Part 1. Here we are trying a different use case. The use of `CancellationToken` in `MediatR` to drop the ongoing request processing. This is very helpful if the request processing is blocked and we want to implement a timeout or if the request is dropped by the initiator.

For the sample case we will create a web api that try to do a task within 5 seconds. The API method will accept time in milliseconds and if the given time is greater than 5 seconds the task will run for 5 seconds and then get cancelled, otherwise task will be executed for the given time.

## Prerequisites

- Install [dotnet core](https://dotnet.microsoft.com/download)
- Install Visual Studio Code/Visual Studio IDE 

## Creating a dotnet WebAPI application

Run the following CLI command to create a WebAPI project.

```bash
dotnet new webapi MediatRSampleAPI
```
## Configure Serilog for logging (Optional)

I'll be using [Serilog](https://serilog.net/) and a flat file sink for logging. To configure this we need to install the following dependencies via Nuget. 
- Microsoft.Extensions.Logging
- Serilog
- Serilog.AspNetCore
- Serilog.Sinks.File

Then update the `Program.cs` file.

```csharp
public static void Main(string[] args)
{
    Log.Logger = new LoggerConfiguration()
                    .Enrich.FromLogContext()
                    .WriteTo.File("logs/MediatRSample.txt", rollingInterval: RollingInterval.Day)
                    .CreateLogger();
    try
    {
        Log.Information("Starting up");
        CreateHostBuilder(args).Build().Run();
    }
    catch (Exception ex)
    {
        Log.Fatal(ex, "Application start-up failed");
    }
    finally
    {
        Log.CloseAndFlush();
    }
}

public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .UseSerilog()
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });
```

## Install and Configure MediatR

Next we need to install MediatR (version 9.0.0 at the time of writing) via Nuget. To configure MediatR, add the following snippet to the `ConfigureServices()` method in `Startup.cs` file.

```csharp
services.AddMediatR(typeof(Startup));
```
## Create a Notification message and its handler

Our notification message carries time in milliseconds. Handler just accepts the time given by the user and waits for that much time. In the meantime if the request is cancelled, waiting will be stopped and exit.

I've added `Stopwatch` code to make sure that handler will wait for maximum 5 seconds. When cancellation is triggered and `OperationCanceledException` is thrown we need to catch it explicitly.

```csharp
public class DelayNotificationMessage: INotification
{
    public int TimeInMilliSeconds { get; set; }
}

public class Notifier03 : INotificationHandler<DelayNotificationMessage>
{
    private readonly ILogger<Notifier03> _logger;
    public Notifier03(ILogger<Notifier03> logger)
    {
        _logger = logger;
    }
    public async Task Handle(DelayNotificationMessage notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation($"Notifier 03 -> Time In MIlli Seconds: {notification.TimeInMilliSeconds}");
        Stopwatch stopwatch = Stopwatch.StartNew();
        try
        {
            await Task.Delay(notification.TimeInMilliSeconds, cancellationToken);
        }
        catch(OperationCanceledException ex)
        {
            _logger.LogError("5 seconds passed and the task is cancelled");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message);                
        }
        stopwatch.Stop();
        _logger.LogInformation($"Elapsed Time: {stopwatch.ElapsedMilliseconds}");            
    }
}
```

## Create a mediator service

Mediator Service is a class that is used by the initiator to publish messages to the handlers. Here we'll the add the following code in the service class where `CancellationToken` is an optional parameter.

```csharp
public void DelayedNotify(int timeInMilliSeconds, CancellationToken cancellationToken = default)
{
    _mediator.Publish(new DelayNotificationMessage { TimeInMilliSeconds = timeInMilliSeconds }, cancellationToken);
        
```

## Add new method in API Controller

Now let's add a controller method that creates a cancellation token. CancellationToken is set to cancel after 5 seconds using the `CancelAfter` [method](https://docs.microsoft.com/en-us/dotnet/api/system.threading.cancellationtokensource?view=net-5.0#methods) of `CancellationTokenSource`

```csharp
[HttpGet("/dowithin5seconds")]
public async Task<string> DoWithin5Seconds(int timeInMilliSeconds)
{
    CancellationTokenSource source = new CancellationTokenSource();
    CancellationToken token = source.Token;
    source.CancelAfter(5000);
    _mediatorService.DelayedNotify(timeInMilliSeconds, token);
    var message = "Finished within 5 seconds.";

    _logger.LogInformation(message);

    return message;
}
```

## Run the application

To run the project via dotnet cli, run the following command.

```bash
dotnet run --project <Path to *.csproj file>
```

Once the port is open, invoke the `DoWithin5Seconds` method by entering 'http://localhost:62705/dowithin5seconds?timeInMilliSeconds=15000' in the browser (Your port number may vary. Also for the demo purpose it is better to disable https redirection).

You'll get the response immediately, but the process will run for a maximum of 5 seconds. If you check the log file, you can see that the execution stopped at 5 seconds.

```bash
2021-02-27 12:46:57.384 +05:30 [INF] Executing endpoint 'MediatRSampleAPI.Controllers.SlowTestController.DoWithin5Seconds (MediatRSampleAPI)'
2021-02-27 12:46:57.425 +05:30 [INF] Route matched with {action = "DoWithin5Seconds", controller = "SlowTest"}. Executing controller action with signature System.Threading.Tasks.Task`1[System.String] DoWithin5Seconds(Int32) on controller MediatRSampleAPI.Controllers.SlowTestController (MediatRSampleAPI).
2021-02-27 12:46:57.517 +05:30 [INF] Executing action method MediatRSampleAPI.Controllers.SlowTestController.DoWithin5Seconds (MediatRSampleAPI) - Validation state: "Valid"
2021-02-27 12:46:57.524 +05:30 [INF] Notifier 03 -> Time In MIlli Seconds: 15000
2021-02-27 12:46:57.526 +05:30 [INF] Finished within 5 seconds.
2021-02-27 12:47:02.576 +05:30 [ERR] 5 seconds passed and the task is cancelled
2021-02-27 12:47:02.577 +05:30 [INF] Elapsed Time: 5052
```

Full source code is available in [GitHub](https://github.com/krishnaanaril/try-outs/tree/master/MediatRSample/MediatRSampleAPI).

## Final Thoughts

If you are more interested in the use of `CancellationToken`, please checkout the [post](https://andrewlock.net/using-cancellationtokens-in-asp-net-core-mvc-controllers/) by Andrew Lock.

One thing I haven't explored so far is exception handling with MediatR. It requires a blog post of its own and I'll be posting it soon.