---
layout: post
title: "Poor password reset workflow @ee"
date: 2014-10-15 18:00:00
tags: 
  - security
  - rants
comments: true
cover_image: toepoke-on-tablet.jpg
excerpt: "Poor reset password workflow @ee"
author: 
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: "Founder, Developer, tea maker"
  image: fj.png
---

Like [pretty much everyone](http://www.rferl.org/content/report-says-75-percent-of-worlds-population-have-mobile-phones/24648234.html) these days I have a mobile phone. My network provider is _currently_  <span class="strike">[Orange](http://www.orange.co.uk/)</span> [Everything Everywhere (EE)](http://ee.co.uk/) in the UK.

As part of my drive to have [just one password]({% post_url 2014-06-07-living-with-a-password-manager-in-the-real-world %}) I wanted to change the password on my account. EE have a nice website and the process was quite straightforward. The outcome however was quite shocking.  Let's take a look at why.

The workflow EE adopt appears on the surface to make sense, and it's broken into a series of steps.  

## Step 1: Who are you?

First EE captures your account name and adds a [CAPTCHA](http://www.captcha.net/) to verify a human is requesting the password reset.  For a mobile phone account (they also do broadband, etc) this is _your mobile telephone number_.

<img src="/images/posts/2014-10-16-step-1.jpg" alt="username capture" title="username capture" />

OK, this seems fine.  They need to be able to find our account to reset our password.  The CAPTCHA provides a little more security.

## Step 2: Secure question
Next we're asked for the answer to the _secret question_ we answered when we first created the account.

<img src="/images/posts/2014-10-16-step-2.jpg" alt="security question capture" title="security question capture" />

Again, this seems fine. It makes sense to provide some additional data both you and your provider know.  To further ensure you are who you say you are.

## Step 3: Reset password
Reset password? Eh? I was expecting to put my registered e-mail address in so they could send a secure reset link. Instead I'm greeted with this:

<img src="/images/posts/2014-10-16-step-3.jpg" alt="new password capture" title="new password capture" />

## Step 4: __What the ???__ 

And sure enough I can enter a new password and it's saved against my account:

<img src="/images/posts/2014-10-16-step-4.jpg" alt="password change confirmation" title="password change confirmation" />

## So what's the problem?
I'm sure you see where I'm going with this one, but just in case:
- I login with my mobile telephone number - it's not like everyone in my contacts list knows what this is ... oh ...
- I'm also asked for a CAPTCHA [which makes things more secure](http://captcha.com/articles/can-captcha-be-broken.html) ... oh ...
- Fortunately they also ask for a secret question - nobody is going to know the answer to that ... [except anyone on facebook]({% post_url 2014-06-10-security-questions-and-social-media %}) ... oh ...

## So what's the solution?
The solution is quite simple:
1. Take me through the existing steps, but _send me a secure password reset link_.  
2. Only allow the reset link to be used once.
3. Expire it after 2 hours if it hasn't been used.

Alternatively there's this new thing called [2-factor authentication](http://lifehacker.com/5938565/heres-everywhere-you-should-enable-two-factor-authentication-right-now) where your provider can SMS a unique code to your mobile phone.  I wonder if [EE](http://ee.co.uk/) has the facility to send SMS messages ... oh.



