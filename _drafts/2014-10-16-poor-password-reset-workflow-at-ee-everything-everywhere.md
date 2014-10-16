---
published: false
title: "Password resets @ee"
date: {}
tags: 
  - security
  - rants
comments: true
cover_image: "toepoke-on-tablet.jpg"
excerpt: "Poor reset password workflow @ee"
author: 
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: "Founder, Developer, tea maker"
  image: fj.png
---

# Poor Password Reset Workflow @ee
Like [pretty much everyone](http://www.rferl.org/content/report-says-75-percent-of-worlds-population-have-mobile-phones/24648234.html) these days I have a mobile phone. My network provider is  ~~[Orange](http://www.orange.co.uk/)~~ [Everything Everywhere (EE)](http://ee.co.uk/) in the UK.

As part of my drive to have [just one password]({% post_url 2014-06-07-living-with-a-password-manager-in-the-real-world %}) I wanted to change the password on my account. EE have a really nice website and the process was quite straightforward ... the outcome however was quite, quite shocking.
The workflow EE adopt appears on the surface to make sense, and it's broken into a series of steps.  

## Step 1: Who are you?
First EE captures your account name and adds a [CAPTCHA](http://www.captcha.net/) to verify a human is requesting the password reset.  For a mobile phone account (they also do broadband, etc) this is _your mobile telephone number_.

=INSERT IMAGE 2014-10-16-screen-#1.jpg

OK, this seems fine.  They need to be able to find our account to reset our password.  The CAPTCHA provides a little more security.

## Step 2: Secure question
Next we're asked for the answer to the _secret question_ we answered when we first created the account.

=INSERT IMAGE 2014-10-16-screen-#2.jpg

Again, this seems fine. It's make sense you have to provide some additional data you and your provider know, to further ensure you are who you say you are.

## Step 4: Reset password
Reset password? Eh? I was expecting to put my registered e-mail address in so they could send a secure reset link. Preferably one I can only use once.  Instead I'm greeted with this:

=INSERT IMAGE 2014-10-16-screen-#3.jpg

__What the ???__ 

And sure enough I can enter a new password and it's saved against my account:

=INSERT IMAGE 2014-10-16-screen-#4.jpg

## So what's the problem?
I'm sure you see where I'm going with this one, but just in case:
- I login with my mobile telephone number - it's not like everyone in my contacts list knows what this is ... oh ...
- I'm also asked for a CAPTCHA [which makes things more secure](http://captcha.com/articles/can-captcha-be-broken.html) ... oh ...
- Fortunately they also ask for a secret question - nobody is going to know the answer to that ... [except anyone on facebook]({% post_url 2014-06-10-security-questions-and-social-media %}) ... oh ...

## So what's the solution
The solution is quite simple:
1. Take me through the existing steps, but _send me a secure password reset link_.  
2. Only allow the reset link to be used once.
3. Expire it after 2 hours if it hasn't been used.

Alternatively there's this new thing called [2-factor authentication](http://lifehacker.com/5938565/heres-everywhere-you-should-enable-two-factor-authentication-right-now) where your provider can SMS a unique code to your mobile phone.  I wonder if [EE](http://ee.co.uk/) has the facility to send SMS messages ... oh.

