---
title: Deploying a nodejs app in fly.io and some struggles
description: This is a brief writeup about deploying a simple nodejs application in fly.io. While doing it I had to overcome few technical difficulties and if you can avoid it, it may help you to save some time.
published: true
publishedAt: 2023-03-19T00:00:00.000Z
updatedAt: 2023-03-19T00:00:00.000Z
category: tech
image: 'banners/71'
keywords: 
    - expresjs
    - flyio
    - powershell
authors:
  - Krishna Mohan A M
---

This week I've been working on a side project to build and api wrapper for [podcast index](https://podcastindex.org/). .NET is my forte, but I want to try my hands on a new stack and chose [expressjs](https://expressjs.com/). I've created some hello-world stuff in `expressjs` before, but this time I wanted to create a full-blown API.

## Creating the API

API creation was comparatively straight forward. I picked typescript for expressjs and everything went smooth. I added [morgan](https://www.npmjs.com/package/morgan) for minimal logging along with `concurrently` and `nodemon`. Also, I used `swagger-ui-express` and `tsoa` for swagger document generation. As always everything worked fine in local. 😂

## Why Fly.io?

I chose [fly.io](https://fly.io) because I heard good things about them and also it's recommended by [James Longster](https://github.com/jlongster) for [actual-budget](https://github.com/actualbudget/actual-server#deploying). Their documentation was really good. 

## `flyctl` installation

Since I work from a windows machine, I had to install their command line tool for windows.

```powershell
iwr https://fly.io/install.ps1 -useb | iex
```

I used powershell occasionally, still that looked like a strange command for me. Soon, I came to know that all these are just shorthand aliases. `iwr` is the shorthand for `Invoke-WebRequest` and `iex` is the shorthand for `Invoke-Expression`. So this command means that we send a web request to fetch the powershell file and then execute it. `-useb` denotes `-UseBasicParsing`, which was not found in the [MS documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-webrequest?view=powershell-7.3#-usebasicparsing), I got it from [reddit](https://www.reddit.com/r/PowerShell/comments/njbz47/what_does_useb_do_to_invokewebrequest/).

## Create an app on fly

You can create an app in fly for your local source code by running the command `flyctl launch`. This command will scan the source directory and create `dockerfile` and `fly.toml`. You should be logged in for its successful completion.

## Deployment

I'm using some confidential keys, I got form podcastindex.org. So I had to set that in the environment variables. Fly.io helps us to set the envirionment vairables by setting the secrets. You can run the command `flyctl secrets set KEY=VALUE` to set secrets. Once set, you can use `flyctl secrets list` to view the list of secrets created.

Run the command `flyctl deploy` for deploying your application. This command will package your application as a docker container and will deploy in one of the machines. So far so good.

## Trouble 1: Deployment succeeded but endpoints are not reachable. 🙄

I got over-excited and went to auto-pilot mode. I should've reviewed the `dockerfile` before deployment. In the `dockerfile` it was configured the `CMD` instruction as `CMD [ "npm", "run", "start" ]` and I haven't added any `start` script in my npm scripts. I added that and redeployed.

## Trouble 2: PodcastIndex is returning unauthorized

We've set the api keys and secrets in environment variables. What could possible go wrong? 🤔

I added some logs and redeployed the app to monitor the secrets set in production. I noticed that the secret value in production is different from the actual. This issue was due to the symbol `$` in the secret string. When i ran the command `flyctl secrets set KEY=xxxx$xxxx`, `$` was getting replaced with the word `flyctl`. So in production it was coming as `xxxxflyctlxxxx`. to fix this i had to escape the character `$` using backtick **(`)**. I reset the secret using backtick and it worked after redeployment. 

## Wrap up

All sunday I was sitting in front of the monitor. I'm feeling bit tired and sleepy now. It was so tiresome even though it looked so simple. Definitely not a good way to spend your weekend.