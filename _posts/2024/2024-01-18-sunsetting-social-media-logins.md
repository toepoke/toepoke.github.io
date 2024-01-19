---
layout: post

title: "Sunsetting social media logins..."
date: 2024-01-18 04:00:00
tags: [sunsetting,toepoke,release]
comments: false
cover_image: girls-talking.jpg

excerpt: Why, and what you need to do ...

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  facebook: toepoke
  bio: Founder, Developer, tea maker
  image: fj.png
---

# Introduction

The ability to log in with a social media account seems like it's been in the website [forever](https://toepoke.co.uk/about.aspx/release-notes/1), but all good things come to an end ...

When the next build goes in, the ability to create or log in via social media will no longer be available and I wanted to share why this is the case, and what to do if you log in via <a href="https://twitter.com"><s>x</s> twitter<a>, <a href="https://facebook.com">facebook</a> or <a href="https://google.com">google</a>.

# Why we're doing this

There's no single reason for sunsetting social log in, it's more an accumulation.

1. [Twitter API depreciation](https://devcommunity.x.com/t/reminder-to-migrate-to-the-new-free-basic-or-enterprise-plans-of-the-twitter-api/189737)
1. [Google+ shutdown](https://support.google.com/googlecurrents/answer/9217723?hl=en#:~:text=On%20April%202%2C%202019%20we,started%20before%20March%2031%2C%202019.)
1. Frequent Facebook API changes
1. Dependencies for the feature preventing [future upgrades](https://dotnet.microsoft.com/en-us/apps/aspnet)

As a result of **1.** I can no longer log in our [third-party](https://en.wikipedia.org/wiki/Janrain) we use for social media logins!  

Whilst I can workaround this as I have underlying API keys the truth is not many people use social media as a means to log into the website.

At the time of writing only **19** people have used a social media account for their <a href="https://toepoke.co.uk/about.aspx/glossary#avatar">avatar</a> and of those only **4** use it as their only means of logging into <a href="https://toepoke.co.uk">the website</a>.

In short the workload to maintain the feature doesn't balance with the value it offers and my time can be better spent elsewhere on the site.

# What you need to do

- If you only use the <a href="https://toepoke.co.uk/about.aspx/glossary#avatar">avatar</a> feature this will continue to work for the time being, but you won't be able to use another social network to change it.  Profile images from <a href="https://gravatar.com/">gravatar</a> are unaffected.
- If you use a social network to log into toepoke:
	- If you are still logged in, visit the <a href="https://toepoke.co.uk/account.aspx/change-password">change password</a> screen to setup a traditional means of logging in
	- If you are no longer able to log in, please <a href="https://toepoke.co.uk/about.aspx/contact">get in touch</a> and we'll help you get logged in

