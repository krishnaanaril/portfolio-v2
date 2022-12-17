---
title: 'Messaging between Service Worker and Angular component'
description: 'Most of the time service worker logic and application logic work in isolation, but there will be cases where we need to do pass messages between them. In this post we’ll see how we can do this in an angular application.'
published: true
publishedAt: 2021-05-23T00:00:00.000Z
updatedAt: 2021-05-31T00:00:00.000Z
category: tech
image: 'assets/banners/32'
keywords:
    - 'Service Worker'
    - PWA
    - Angular
authors:
    - 'Krishna Mohan A M'
---

Most of the time service worker logic and application logic work in isolation, but there will be cases where we need to pass messages between them. For example we are using background sync and to let the application know that it is complete, we can send a message from service worker and receive it in the application. In this post we’ll see how we can do this in an angular application.

## Prerequisite

1.	Basic understanding of Angular [application architecture](https://angular.io/guide/what-is-angular).
2.	Basic understanding of [PWA](https://angular.io/guide/service-worker-intro) and service workers.
3.	[VS Code](https://code.visualstudio.com/download) and [@angular/cli](https://angular.io/cli#installing-angular-cli) installation.

## Basic Workflow

- On button click we'll create a message with property `type` and value `FROM_APP` and send it to the service worker.
- In service worker we'll create a event handler to listen to messages and filter messages with type `FROM_APP`.
- From service worker send acknowledgement message back to client with property `type` and value `FROM_SW`.
- In the angular component receive the acknowledgement and print it to the console.

## Send Message from Angular

To send message from angular we will be using `postMessage` method of [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event). `postMessage` signature is similar to that of [Client.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage). Unfortunately I couldn't find its documentation in the MDN site.

```typescript
navigator.serviceWorker.controller.postMessage({
    type: 'FROM_APP'
});
```

## Create event handler to accept message from service worker.

Here we'll be adding the handler to [ServicWorkerContainer](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/message_event) `message` event.

```typescript
navigator.serviceWorker.onmessage = (event)=>{
    if(event.data && event.data.type === 'FROM_SW') {
        console.log('Message received from SW');
    }
}
```

## Receive message in service worker

In service worker we can create an event handler to the message event that will filter messages with type `FROM_APP`.

```typescript
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'FROM_APP') {
        console.log('message received from app');                   
    }
});
```

## Send acknowledge to the parent page

To send acknowledge message we need to identify the last focused tab. We can use the [matchAll](https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll) method for that. This method (Chrome 46/Firefox 54 and later) returns clients in most recently focused order.

```typescript
self.clients.matchAll().then((clients) => {
    if (clients && clients.length) {
        //Respond to last focused tab
        clients[0].postMessage({ type: 'FROM_SW' });
    }
});
```

## Conclusion

Even though service worker communication and its implementation are easy, it is very difficult to get relevant documentation regarding events and available methods. Referring Mozilla documentation is a good start, but it is not complete.  You can also refer '[How to communicate with Service Workers](https://felixgerschau.com/how-to-communicate-with-service-workers/)' article written by [Felix Gerschau](https://twitter.com/4xfelix) for more information.