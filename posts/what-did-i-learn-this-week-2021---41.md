---
title: What did I learn this week (2021) - 41
description: Weekly summarization and review of things I've learned in the second week of October 2021 
published: true
publishedAt: 2021-10-10T00:00:00.000Z
updatedAt: 2021-10-10T00:00:00.000Z
category: learnings
image: 'assets/banners/52'
keywords: 
  - facebook
  - encryption
authors:
  - Krishna Mohan A M
---

- Facebook and its sister sites faced [a mass outage](https://engineering.fb.com/2021/10/04/networking-traffic/outage/) on October 4th. The primary reason being the misconfiguration of facebook's [BGP (Border Gateway protocol)](https://en.wikipedia.org/wiki/Border_Gateway_Protocol) records. BGP is a mechanism by which Internet service providers of the world share information about which providers are responsible for routing Internet traffic to which specific groups of Internet addresses. There is a detailed [blog post](https://www.cloudflare.com/en-gb/learning/security/glossary/what-is-bgp/) by Cloudfare regarding this protocol and [another one](https://blog.cloudflare.com/october-2021-facebook-outage/) on outage.
- PII stands for Personally Identifiable Information.
- Learned about some logging best practises from [a blog](https://tuhrig.de/my-logging-best-practices/) and its [HN discussion](https://news.ycombinator.com/item?id=28761282).
- [GPU.js](https://github.com/gpujs/gpu.js) is a JavaScript Acceleration library for GPGPU (General purpose computing on GPUs) in JavaScript for Web and Node. GPU.js automatically transpiles simple JavaScript functions into shader language and compiles them so they run on your GPU. In case a GPU is not available, the functions will still run in regular JavaScript.
- Found an informative [blog](https://goteleport.com/blog/ssh-tunneling-explained/) that explains *SSH Tunnelling*.
- [Envelope Encryption](https://cloud.google.com/kms/docs/envelope-encryption): The process of encrypting a key with another key is known as envelope encryption.
- [Tink](https://github.com/google/tink) is a multi-language, cross-platform, open source library that provides cryptographic APIs that are secure, easy to use correctly, and hard(er) to misuse. 