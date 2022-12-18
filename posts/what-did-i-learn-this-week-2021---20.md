---
title: What did I learn this week (2021) - 20
description: Weekly summarization and review of things I've learned in the third week of May 2021 
published: true
publishedAt: 2021-05-16T00:00:00.000Z
updatedAt: 2021-05-16T00:00:00.000Z
category: learnings
image: 'banners/30'
keywords:
  - PWA
  - Couchbase
authors:
  - Krishna Mohan A M
---

1. Learned how to [redirect to PWA](https://stackoverflow.com/questions/54138763/open-pwa-when-clicking-on-push-notification-handled-by-service-worker-ng7-andr) when the user clicks the notification. Recently I've been struggling with some of the PWA features of my ['Cowin Helper'](https://cowin-helper.krishnamohan.dev/) app and learned a ton of about it. If possible I'll write everything in a separate blog.
2. Learned about the [Back/Forward Cache](https://web.dev/bfcache/) concept to improve the browsing experience. Some tips for optimizing your webpage for bfcache:
    - Never use the `unload` event
    - Only add `beforeunload` listeners conditionally.
    - Avoid window.opener references
    - Always close open connections before the user navigates away
    - Test to ensure that the pages are cacheable
3. Learned how to customize PWA app [installation](https://web.dev/customize-install/).
4. Learned about Couchbase database and did a poc using its dotnet sdk. Understood how it stores [data under the hood](https://docs.couchbase.com/server/current/learn/buckets-memory-and-storage/memory-and-storage.html#saving-new-items) and process of replication.
5. Started using [idb-keyval](https://github.com/jakearchibald/idb-keyval) as a wrapper over browser indexedb. It was easy to get started and small in sized. One catch is that it can create only one default store, if you want to create more than one stores used [idb](https://github.com/jakearchibald/idb)