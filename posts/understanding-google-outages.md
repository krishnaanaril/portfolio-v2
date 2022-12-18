---
title: Understanding Google Outages on December 14, 2020
description: An overview of two major outages happened on 14th December, 2020. This is not an authoritative analysis but can be considered as notes regarding the aforesaid incidents.
published: true
publishedAt: 2021-01-06T00:00:00.000Z
updatedAt: 2020-09-02T00:00:00.000Z
category: tech
image: 'banners/06'
keywords: 
    - google
    - outage
authors:
  - Krishna Mohan A M
---

On that fateful day I was playing around with Youtube API to find a custom algorithm to avoid the default recommendations. All of sudden server errors started popping up for my API requests and for a moment I thought that I broke it. To verify this I logged in to Twitter and it was already trending there.

There were multiple incidents on that day, but the most important were the Google cloud and Gmail outages.

## Gmail Outage

For a period of 6 hours on that day, the service responsible for handling incoming SMTP connections incorrectly responded with an error ([hard bounce](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/non-delivery-reports-in-exchange-online/fix-error-code-550-5-1-1-through-5-1-20-in-exchange-online)) to emails being sent to “@gmail.com” users. The error message indicated that the email address did not exist and as a result, the impacted emails were never delivered.

Email delivery to other email addresses on Google-hosted domains were not affected by this issue and continued to function correctly. SMTP clients conforming to email standards treat error code 550 as a permanent delivery error and do not attempt to resend the email. In response to a permanent delivery error, intermediate SMTP relays send a bounce email back to the original sender, informing them of the delivery error.

### Root Cause

Google's SMPT inbound service has a configuration system to update flags and service options while deployed in production and ‘@gmail.com’ domain name is specified as one of the configuration options. During an ongoing migration, a configuration change shifted formatting behavior and provided and invalid domain name instead of “@gmail.com”. Due to this service incorrectly transformed lookups of certain email addresses ending in “@gmail.com” into non-existent email addresses resulting in 550 error code.

### Remediation & Prevention

Upon identifying the root cause, engineering team reverted the code change which resolved the immediate issue. But when they again deployed the same configuration system the next day a similar issue occurred. Formatting error related to “@gmail.com” was identified in the internal logs and they have to again revert it.

As per the official statement they’ll be taking necessary actions to guard against the issue recurring and to reduce the impact of similar events.
Impact on Other business

Most impacted business are the email marketing platforms. Some of them even reported a peak of [90% bounce](https://news.ycombinator.com/item?id=25437340) for almost 24 hours. Since the error code was 550, the email delivery services might’ve started automatically removing, or at least stopping delivery to, a set of email addresses. But on the brighter side, since it’s a known time frame, domain and error response, they can cleanly remove the suppression lists. An error code of 4xx (temporary error) might’ve reduced the impact and I’m not aware of any known side effects for this.

## Google Cloud Outage

For a period of 47 minutes on the same day, Google services that required Google OAuth access were unavailable. Cloud service accounts used by GCP workloads were not impacted and continued to function

### Root cause
Google uses an evolving suite of automation tools to manage the quota of various resources allocated for services. As part of an ongoing migration of the User ID Service to a new quota system, a change was made in October to register the User ID Service with the new quota system, but parts of the previous quota system were left in place which incorrectly reported the usage for the User ID Service as 0. An existing grace period on enforcing quota restrictions delayed the impact, which eventually expired, triggering automated quota systems to decrease the quota allowed for the User ID service and triggering this incident. Existing safety checks exist to prevent many unintended quota changes, but at the time they did not cover the scenario of zero reported load for a single service:

- Quota changes to large number of users, since only a single group was the target of the change,
- Lowering quota below usage, since the reported usage was inaccurately being reported as zero,
- Excessive quota reduction to storage systems, since no alert fired during the grace period,
- Low quota, since the difference between usage and quota exceeded the protection limit.

As a result, the quota for the account database was reduced, which prevented the [Paxos leader]((https://en.wikipedia.org/wiki/Paxos_(computer_science)) ) from writing. Shortly after, the majority of read operations became outdated which resulted in errors on authentication lookups.

### Remediation & Prevention

Once the root cause and potential fix were identified, engineers disabled the quota enforcement in one data canter. This quickly improved the situation and later the same mitigation was applied to all data-centres. As per the official statement they’ll be taking necessary actions to guard against the issue recurring and to reduce the impact of similar events.

### Impact on business

Almost all google services were impacted by this outage. Most services recovered automatically within a short period of time after the main issue ended, but some services like Cloud Console, Google BigQuery and  K8s Engine had unique and lingering impact.

## References:
1.	https://static.googleusercontent.com/media/www.google.com/en//appsstatus/ir/4et50yp2ckm8otv.pdf
2.	https://status.cloud.google.com/incident/zall/20013 


