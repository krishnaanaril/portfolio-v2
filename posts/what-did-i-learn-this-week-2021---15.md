---
title: What did I learn this week (2021) - 15
description: Weekly summarization and review of things I've learned in the second week of April 2021 
published: true
publishedAt: 2021-04-11T00:00:00.000Z
updatedAt: 2021-04-11T00:00:00.000Z
category: learnings
image: 'banners/25'
keywords:  
    - Chrome  
authors:
  - Krishna Mohan A M
---

1. Unit Conversion is really a pain point in application development. So learned a little bit of [floating point math](https://0.30000000000000004.com/).
2. My friend Noble introduced me to the new job portal named [Cutshort](https://cutshort.io/). It is an AI-based recruitment platform and SaaS software used by 8000+ companies, from startups to product giants like Google.
3. Learned the different applications of [E-tags](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag#examples) and its implementation in [dotnet](https://docs.microsoft.com/en-us/aspnet/core/performance/caching/middleware?view=aspnetcore-5.0#configuration).
4. Engineering manager [reading list](https://jacobian.org/2018/may/2/engmanager-reading-list/) compiled by Jacob Kaplan-Moss(lead developer and co-founder of django).
5. Learned the use of different background services in Chrome. It is sad that firefox is not supporting all these useful PWA features.
    - [Background Sync](https://developers.google.com/web/updates/2015/12/background-sync) - Background sync is a new web API that lets you defer actions until the user has stable connectivity. This is useful for ensuring that whatever the user wants to send, is actually sent.
    - [Background fetch](https://developers.google.com/web/updates/2018/12/background-fetch) - Background Sync requires the service worker to be alive for the duration of the fetch. That isn't a problem for short bits of work like sending a message, but if the task takes too long the browser will kill the service worker, otherwise it's a risk to the user's privacy and battery. So, what if you need to download something that might take a long time, like a movie, podcasts, or levels of a game. That's what Background Fetch is for. Background Fetch is a web standard available by default since Chrome 74.
    - [Periodic Background Sync](https://web.dev/periodic-background-sync/) - Periodic Background Sync enables web applications to periodically synchronize data in the background, bringing web apps closer to the behavior of a platform-specific app.
6. Relearned javascript tasks and microtasks from Jake Archibald's very famous [blog post](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/).
