---
title: How to implement CQRS with MediatR - Part 1
description: This post is about implementing mediator pattern in a dotnet console application using MediatR library.
published: true
publishedAt: 2021-02-26T00:00:00.000Z
updatedAt: 2021-02-26T00:00:00.000Z
category: tech
image: 'banners/16'
keywords: 
 - dotnet
 - mediatr
 - cqrs
authors:
  - Krishna Mohan A M
---

I came to know about [MediatR](https://github.com/jbogard/MediatR) library while reading the book [.NET Microservices: Architecture for Containerized .NET Applications](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/). Frankly speaking, even though I was aware of [mediator pattern](https://github.com/krishnaanaril/try-outs/blob/master/design-patterns/behavioral/mediator.ts), I haven't used it any of the projects I've worked. May be this is due to the fact that, I've mostly worked in enterprise applications with hardly 100+ users. Any way I consider this as an opportunity to learn a new thing.

In this post we'll be using MediatR with a dotnet console application. If you want to read about its implementation in a WebAPI, check out my other blog [post](https://krishnamohan.dev/blog/how-to-implement-cqrs-with-mediat-r---part-2).

## Prerequisites

- Install [dotnet core](https://dotnet.microsoft.com/download)
- Install Visual Studio Code/Visual Studio IDE 

## Creating a dotnet console application

Okay, As the first step we need a console application. We can do so by running our dotnet [cli command](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new).

```bash
dotnet new console MediatRSample
```

## Configure Serilog for logging (Optional)

I'll be using [Serilog](https://serilog.net/) and a flat file sink for logging. To configure this we need to install the following dependencies via Nuget. 
- Microsoft.Extensions.Logging
- Serilog
- Serilog.Sinks.File

Then update the `Program.cs` file.
``` csharp
static void Main(string[] args)
{
    var services = ConfigureServices();
    var serviceProvider = services.BuildServiceProvider();        
}

private static IServiceCollection ConfigureServices()
{
    IServiceCollection services = new ServiceCollection();

    var serilogLogger = new LoggerConfiguration()
                            .Enrich.FromLogContext()
                            .WriteTo.File("logs/MediatRSample.txt", rollingInterval: RollingInterval.Day)
                            .CreateLogger();

    services.AddLogging(builder =>
    {
        builder.AddSerilog(logger: serilogLogger, dispose: true);
    });                        
    return services;
}
```

## Install and Configure MediatR

Next we need to install MediatR (version 9.0.0 at the time of writing) via Nuget. To configure MediatR, add the following snippet to the `ConfigureServices()` method.

```csharp
services.AddMediatR(Assembly.GetExecutingAssembly());
```

## Create a Notification message and its handler

Among the two message types provided by MediatR, here we are configuring notification messages.

### Create a bare minimum DTO (Data Transfer Object)

This class implements `INotification`, a marker interface to represent a notification.

```csharp
public class NotificationMessage: INotification
{
    public string Message { get; set; }
}
```

### Create multiple handlers

As notification messages can be handled by multiple handlers, we'll be creating two handlers.

```csharp
public class Notifier01 : INotificationHandler<NotificationMessage>
{
    public Task Handle(NotificationMessage notification, CancellationToken cancellationToken)
    {
        Console.WriteLine($"Notifier 01 -> Message: {notification.Message}");
        return Task.CompletedTask;
    }
}

public class Notifier02 : INotificationHandler<NotificationMessage>
{
    public Task Handle(NotificationMessage notification, CancellationToken cancellationToken)
    {
        Console.WriteLine($"Notifier 02 -> Message: {notification.Message}");
        return Task.CompletedTask;
    }
}
```

## Create a Request/Response message and its handler

This message type supports both one way and two way communication, but can only be received by a single handler. If you have defined multiple handlers only the first one will receive the message.

### Create a request message DTO

Response message class implement `IRequest`, a marker interface to represent a request.

```csharp
// We need to mention response type in two way
public class Ping : IRequest<string> { } 

public class OneWaySync : IRequest { }
```
### Create handlers

For a two way handler we define a class that implements `IRequestHandler`, otherwise for async request use `AsyncRequestHandler` and for sync request `RequestHandler` base classes.

```csharp
public class PingHandler : IRequestHandler<Ping, string>
{
    public Task<string> Handle(Ping request, CancellationToken cancellationToken)
    {
        return Task.FromResult("Pong");
    }
}

public class OneWayAsyncHandler : AsyncRequestHandler<OneWayAsync>
{
    protected override Task Handle(OneWayAsync request, CancellationToken cancellationToken)
    {
        Console.WriteLine("In Async One Way Handler");
        return Task.CompletedTask;
    }
}

public class OneWaySyncHandler : RequestHandler<OneWaySync>
{
    protected override void Handle(OneWaySync request)
    {
        Console.WriteLine("In Sync One Way Handler");            
    }
}
```

## Create a mediator service

Mediator service publishes messages to the handlers. This class contains the `IMediator` object that is inject via DI and contains the knowledge of all the message types and its corresponding handlers.

### Create `IMediatorService` interface

```csharp
public interface IMediatorService
{
    void Notify(string notifyText);
    string RequestResponse();
    void OneWay();
}
```

### Create MediatorService Class

```csharp
public class MediatorService : IMediatorService
{
    private readonly IMediator _mediator;
    public MediatorService(IMediator mediator)
    {
        _mediator = mediator;
    }
    public void Notify(string notifyText)
    {
        _mediator.Publish(new NotificationMessage { Message = notifyText });
    }

    public string RequestResponse()
    {
        string response = Task.Run(
            async () => await _mediator.Send(new Ping())
            ).Result;
        return response;
    }

    public void OneWay()
    {
        Task.Run(async () => await _mediator.Send(new OneWayAsync()));
        _mediator.Send(new OneWaySync());
    }        
}
```

### Add MediatorService to DI configuration

Add the following statement in `ConfigureServices()` method of `Program.cs`

```csharp
services.AddTransient<IMediatorService, MediatorService>();
```

## Run the application

Finally we need to issue commands/requests to these created handlers. For that we can create the following methods in the source class.

```csharp
private readonly IMediatorService _notifierMediatorService;

// ...

private void Notify()
{
    _notifierMediatorService.Notify("Test Message");
}

private void RequestResonse()
{
    string response = _notifierMediatorService.RequestResponse();
    Console.WriteLine($"In App: {response}");
}

private void OneWay()
{
    _notifierMediatorService.OneWay();
}
```

To run the project via dotnet cli, run the following command.

```bash
dotnet run --project <Path to *.csproj file>
```

You'll get a similar output as below:

```bash
Notifier 01 -> Message: Test Message
Notifier 02 -> Message: Test Message
In App: Pong
In Sync One Way Handler
In Async One Way Handler
```

## Final Thoughts

Among other things, one of the problem MediatR is trying to solve is [DI Constructor Explosion](https://stackoverflow.com/questions/2420193/how-to-avoid-dependency-injection-constructor-madness) which is a highly debated topic. Also by using MediatR everything is done in-process, request initiator and handler runs in the same process which may be cumbersome in some scenarios. If you want event/notification to be completely independent, try [MassTransit](https://www.goparamore.io/) or [Brighter](https://www.goparamore.io/).

If you're interested to view the full solution, it is available in [GitHub](https://github.com/krishnaanaril/try-outs/tree/master/MediatRSample/MediatRSample).