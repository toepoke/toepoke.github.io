---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724065017/tags-c-code-techie-stuff-development
title: "Enumerations and extension methods"
# subtitle: "What's in the box"
date: 2012-04-19 17:53:00
tags: [c-sharp, code, development, techie-stuff]
comments: true
cover_image: cityscape.jpg

excerpt: "Adding extension methods to <strong>Enum</strongs> in C#"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---

Whilst making some modifications to [toepoke](https://toepoke.co.uk) last night I needed to do some work around the membership.  Things like _Is this user a member of this squad_, _Have they been verified_, etc. 

I started off with a statement with too many logical ORs kicking around and thought there must be a better way of expressing what I wanted to do. 

My first thought was to use [Extension methods](http://msdn.microsoft.com/en-us/library/bb383977.aspx) which I've used extensively for making my [queries](http://msdn.microsoft.com/en-us/library/bb425822.aspx) a little more understandable.  Could we use extension methods for the enumerations too?

My hunch was it wouldn't work as traditionally you couldn't add additional behaviour to an **Enum**.  However it turns out it's quite straightforward:

<img src="/images/posts/2012/2012-04-19-enumerations-and-extension-methods.png">
