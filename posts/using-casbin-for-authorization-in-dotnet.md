---
title: Using Casbin for authorization in dotnet
description: Casbin is a powerful and efficient open-source access control library. It provides support for enforcing authorization based on various access control models. Here I'll be sharing my thoughts on Casbin.NET, an authorization library for dotnet.
published: true
publishedAt: 2021-02-14T00:00:00.000Z
updatedAt:  2021-05-14T00:00:00.000Z
category: tech
image: 'banners/07'
keywords: 
    - casbin
    - abac
    - auth
    - dotnet
authors:
  - Krishna Mohan A M
---

Our organization, as part of common platform initiative, was trying to create an authorization mechanism for multiple applications in our ecosystem. Last week as a part of this initiative I was browsing internet to find a client library that makes use of Attribute based access control (ABAC). [Casbin](https://github.com/topics/abac) is one of the most starred libraries in the topic ABAC.
So I thought of giving it a try.

The primary language for Casbin was Go, since it was developed in Go itself. But that wasn't a problem as they've already created similar libraries in java, dotnet and nodejs. I picked [Casbin.Net](https://github.com/casbin/Casbin.NET) due to my proficiency in C#. For the sake of simplicity I'm only evaluating Casbin's ABAC feature here. For full feature list please see the [official documentation](https://casbin.org/docs/en/supported-models).

## PERM Modeling Language

Casbin introduces a new policy language named PERM (Policy, Effect, Request and Matcher) modeling language. If interested you can learn more about it in the author's [research paper](https://arxiv.org/abs/1903.09756).

![PERM Meta Model](assets/images/PERM_MetaModel.svg)
*PERM Meta Model*

### Request

Request is defined as key-value pair. The key is always r, while the value is a list of attributes. An access request is usually represented by the classic triple: accessing entity (sub), accessed resource (obj) and the access method (act). In this condition, we have: `attributes = sub; obj; act`, or in PML's grammar: `r = sub, obj, act`.

### Policy

Policy is defined as key-value pair. The key is always p, which represents an abstract policy rule entity. The value attributes denotes the attribute names that p has. E.g.: `p = sub, obj, act`.

### Policy Rule

Policy rule is an instance of the above policy. The number of elements in the tuple will be identical with the attribute names in policy. For example, the above policy rule: `alice, data1, read` generates a binding to the attributes like: `p.sub = alice, p.obj = data1, p.act = read`.

### Matcher

Matcher determines how the policy rules are evaluated against the request. The simplest matcher is: `m = r.sub == p.sub && r.obj == p.obj && r.act == p.act` (m represents the matcher). It means the matcher returns true only if subject, object and action in the access request exactly match the respective fields in a policy rule.

### Effect

The effect primitive determines whether the request should be approved if
multiple policy rules match the request. In a effect term, the **quantifier** aggregates the multiple decisions from the valid set for condition into a single boolean value. It can be 'some', 'max' or 'min'. condition functions in a similar way as matcher, but it is used for filtering valid decisions instead of matching the policy rules with the request. E.g: `e = some(where (p.eft == allow))`

## Examples

First we need to create a Casbin enforcer object which accepts two parameters in its constructor. First parameter is [Model](https://casbin.org/docs/en/supported-models) and the second one is [Adapter](https://casbin.org/docs/en/adapters).

* Model

    Model is defined in a file with .conf extension. A model `CONF` should have at least four sections: `[request_definition], [policy_definition], [policy_effect], [matchers]`. If a model uses RBAC, it should also add the `[role_definition]` section. A model `CONF` can contain comments. The comments start with `#`, and `#` will comment the rest of the line.
    The matcher evaluation in Casbin is implemented by expression evaluators in each language.

* Adapter

    In Casbin, the policy storage is implemented as an adapter (aka middleware for Casbin). For full set of supported adapters refer the [documentation](https://casbin.org/docs/en/adapters#supported-adapters). For the examples below I'm using the default file adapter, such that policy rules are defined in csv format.

You can find the full source code in my [github repository](https://github.com/krishnaanaril/try-outs/tree/master/casbin-poc).

### Basic

For the basic example we are just checking whether the subject, object and action attributes of both policy and request match.

* basic_model.conf

```
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = r.sub == p.sub && r.obj == p.obj && r.act == p.act
```

* basic_policy.csv

```
p, alice@example.com, BasicTest, Get
```

* Verification Code

```csharp
var e = new Enforcer("./casbin-config/basic_model.conf", "./casbin-config/basic_policy.csv");
if (e.Enforce(sub, obj, act)) 
{
    // permit alice to read data1
    Console.WriteLine("Access Granted");
}
else
{
    // deny the request, show an error
    Console.WriteLine("Access Denied");
}    
```

### Basic with environment attribute

Here we are passing an extra attribute to add policies on environment. User have access to only dev environment and all other requests will fail.

* env_model.conf

```
[request_definition]
r = sub, obj, act, env

[policy_definition]
p = sub, obj, act, env

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = r.sub == p.sub && r.obj == p.obj && r.act == p.act && r.env == p.env
```

* env_policy.csv

```
p, alice@example.com, BasicTest, Get, dev
```

* Verification Code

```csharp
var e = new Enforcer("./casbin-config/env_model.conf", "./casbin-config/env_policy.csv");
if (e.Enforce(sub, obj, act, env)) 
{
    // permit alice to read data1
    Console.WriteLine("Access Granted");
}
else
{
    // deny the request, show an error
    Console.WriteLine("Access Denied");
}   
```

### Advanced usage

Here please note the matcher statement of the model. A function is invoked from the environment object. Unlike previous examples here the request attribute `env` is an object with method `IsAPAC()` which returns true only if the given location is in the list of APAC countries.

* advanced_model.csv

```
[request_definition]
r = sub, obj, act, env

[policy_definition]
p = sub, obj, act

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = r.sub == p.sub && r.obj == p.obj && r.act == p.act && r.env.IsAPAC()
```
* advanced_policy.csv

```
p, alice@example.com, BasicTest, Get
```

* Verification Code

```csharp
public class Environment {
    private string _location;
    private string[] APAC_COUNTRIES = {"India", "UAE", "Srilanka"};
    public Environment(string location)
    {
        _location = location;
    }
    public bool IsAPAC() {
        return Array.Exists(APAC_COUNTRIES, element => element == _location);
    }
}

/*
* Some lines of code
*/

var e = new Enforcer("./casbin-config/advanced_model.conf", "./casbin-config/advanced_policy.csv");
Environment env = new Environment(location);
if (e.Enforce(sub, obj, act, env)) 
{
    // permit alice to read data1
    Console.WriteLine("Access Granted");
}
else
{
    // deny the request, show an error
    Console.WriteLine("Access Denied");
}  
```

## Final Thoughts

I'm impressed with the documentation and ease of use of Casbin library. But I'm bit skeptical about its performance in real production environments. To gather some opinions I asked this question in [Hacker News](https://news.ycombinator.com/item?id=26112460), but unfortunately I got reply only from the library's author himself. I had a discussion with our senior architect, who recommended to use the standard `XACML` for which only some java libraries are available. As a next step, I need to check some libraries based on XACML.