---
title: Embedding Power BI in Angular — Part 2
description: Power BI can be embedded for the users of your organization who have access to it. This requires the users to sign-in to their Power BI account to view their content, which are the reports they own or the ones that have been shared with them. This is the second part of the two-part article series.
published: true
publishedAt: 2018-10-16T00:00:00.000Z
updatedAt: 2018-10-16T00:00:00.000Z
category: tech
image: 'banners/02'
keywords: 
    - powerbi
    - angular
authors:
  - Krishna Mohan A M
---

Power BI can be embedded for the users of your organization who have access to it. This requires the users to sign-in to their Power BI account to view their content, which are the reports they own or the ones that have been shared with them.

This is the second part of the two-part article series. You can find the first one [here](https://krishnamohan.dev/blog/embedding-power-bi-in-angular-part-1).

## Embedding for your organization

Creating dashboards/reports using Power BI are out of scope of this article, you can learn more about it [here](https://docs.microsoft.com/en-us/power-bi/service-get-started). I’ve skipped a lot a details which have better documentation elsewhere.

### Contents

* Prerequisite
* Overview
* Set up your embedded analytics development environment
* Set up your Power BI environment
* Create Angular client
* Conclusion

### Prerequisites

* [Power BI pro account](https://powerbi.microsoft.com/en-us/pricing/)
* [Microsoft Azure Subscription](https://azure.microsoft.com/en-us/free/)
* [Azure Active Directory Tenant](https://docs.microsoft.com/en-us/power-bi/developer/create-an-azure-active-directory-tenant) Setup. If it is already done for your organization, you can find it [here](https://www.whatismytenantid.com/).
* Visual Studio Code
* npm, node, angular-cli

### Overview

A high level diagram showing how this works is shown below.

![](/images/02_01.png)

The workflow is as follows.

 1. When user browses UI, he/she is asked to login with his/her power bi credentials.
 2. User credentials are validated with Azure AD to generate access tokens.
 3. UI calls Power BI API to get the report specific data with the token.
 4. Power BI API returns report data, and UI displays it in the web page.

### Set up your embedded analytics development environment

Refer [this](http://When user browses UI, he/she is asked to login with his/her power bi credentials. User credentials are validated with Azure AD to generate access tokens UI calls Power BI API to get the report specific data with the token. Power BI API returns report data, and UI displays it in the web page.) for more details.

Here we need to do few more steps than what is mentioned in the documentation.

 1. Redirect URL should be the URL in the application that should be displayed post user authentication.
 2. Set the key ‘oauth2AllowImplicitFlow’ in Azure Active Directory app manifest to true as we are using browser based clients.

### Set up your Power BI environment

Read [this](https://docs.microsoft.com/en-us/power-bi/developer/embed-sample-for-your-organization#set-up-your-power-bi-environment) for more details.

### Create Angular client

Our application should authenticate user to Azure Active Directory (AD) and generate the access token. This access token is used as the [bearer ](https://oauth.net/2/bearer-tokens/)token for subsequent Power BI API requests.

For authenticating with Azure AD, we’ll be using [this](https://github.com/AzureAD/azure-activedirectory-library-for-js) library. You can add this to your angular project by running the following command.
```bash
npm install adal-angular
```

In the HTML page, create a ‘div’ with id ‘embedReport’. We’ll be showing report in this div. Embedding in div is done using Power BI JavaScript [library](https://github.com/Microsoft/PowerBI-JavaScript). You can add it to your angular application by running the following command.
```bash
npm install --save powerbi-client
```

Now we’ve added the additional libraries for your requirement and can we start coding the the authentication service as follows.

![](/images/02_02.png)
*Gist: https://gist.github.com/krishnaanaril/9a07c99efe7db86b8ede17d4177be303*

We can store ‘adal’ related configuration in the environment.ts file. I’ve attached the sample format below.

![](/images/02_03.png)
*Gist: https://gist.github.com/krishnaanaril/b1b8798373a6bbe42e7f288ceb9ca1a9*

Once the user is authenticated, to handle callback you need to add the following code in the redirect component’s ngOnInit method.

![](/images/02_04.png)

Here I’ve written the code to embed the first of the available reports to a user. You can update it to suit your needs. First we need to get the access token and get the first of the available reports. The code is as follows.


![](/images/02_05.png)
*Gist: https://gist.github.com/krishnaanaril/398f8e51136e649bf35e41baf8367efe*

The method ‘getReportsInGroup’ will be invoking the corresponding Power BI REST API.

![](/images/02_06.png)
*Gist: https://gist.github.com/krishnaanaril/427e4ef6b171fa109787617b3c0e6953*

Next, we need to embed the report in the HTML page. This is similar to ‘Embed for your customers’, except the token type which is ‘Aad’ and access token instead of embed token. Embedding report code is as follows.

![Embedding report for your organization](/images/02_06.png)
*Embedding report for your organization*

### Conclusion

Now you’re done with your Angular app, run it and verify the reports. Dashboards and Tiles can be embedded in a similar way. You can find those snippets here.

* [Dashboard](https://gist.github.com/krishnaanaril/1392403aa328684738e4ed6f0b8a664f)
* [Tile](https://gist.github.com/krishnaanaril/211f5b390a5e7e038b7a67dfe387fb29)


