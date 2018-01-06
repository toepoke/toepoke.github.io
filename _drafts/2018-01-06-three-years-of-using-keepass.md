---
layout: post

title: "A follow-up to using password managers"
# subtitle: "What's in the box"
date: 2018-01-06 08:00:00
tags: [security, tips]
comments: true
cover_image: locks.jpg
excerpt: "What's it like 3 years on ..."

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png 
---

## 3 years ago ...

Back in 2014 (2014!) I wrote a blog post about [starting to use a password manager](http://toepoke.github.io/2014/06/07/living-with-a-password-manager-in-the-real-world.html).  I thought it was high time for a follow-up post about how things have gone.

## TL;DR

<dl class="dl.horizontal">
  <dt>Are you still using a password manager?</dt><dd>Yes, and it's still <a href="https://keepass.info">KeePass</a>.</dd>
  <dt>Would you ever go back?</dt><dd>No, I can't see it.</dd>
  <dt>What have you learnt since?</dt><dd>Read on ...</dd>
</dl>

## What I've Learnt

This isn't intended to be an intensive post, just a few observations and conclusions I've come to whilst using [KeePass](https://keepass.info) for the last few years.

### <div name="cloud-sync">Cloud sync</div>
I use [Dropbox*](https://db.tt/oygIDRDY3M) for [syncing my KeePass database](https://keepass.info/help/v2/sync.html) between my main laptop and my mobile phone.  

This makes it **even** more important to lock down your [Dropbox*](https://db.tt/oygIDRDY3M).

+ Ensure you have [a PIN setup](https://www.dropbox.com/help/mobile/passcode-phone-tablet) on your [Dropbox*](https://db.tt/oygIDRDY3M) account.
+ Enable [two-factor authentication](https://www.dropbox.com/account/security)[+](#two-factor).
+ Use a [nonce](#nonce) in your [Dropbox*](https://db.tt/oygIDRDY3M) password.

### <div name="two-factor">+ Two-Factor Authenticaion</div>

Whilst SMS is better than not having two-factor authentication, [it's not without issues](https://twitter.com/toepoke_co_uk/status/873871178309488640?s=09)).

I'd advise using a third-party app like [Google Authenticator](https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en) which doesn't require a phone reception or even an internet connection to verify you are the account holder.  This is an option on [Dropbox](https://db.tt/oygIDRDY3M), and many other websites too.

Of course you'll want to use two-factor authentication on other important accounts.  Any accounts with financial data, and of course your **[Google account](https://myaccount.google.com)**!


### Use multiple databases
Since the beginning I've used a single database for all my passwords.  The single database is then synched to my mobile via [Dropbox*](https://db.tt/oygIDRDY3M).

This all works great, however using a cloud provider does increase your [risk of a breach](https://www.theguardian.com/technology/2016/aug/31/dropbox-hack-passwords-68m-data-breach) to a certain extent.

To mitigate this I'm moving towards using multiple password databases.  Well 2 in fact.  Online and offline:

## Online and Offline Accounts

Of course [syncing your database to Dropbox](#cloud-sync) introduces the risk of your password database being compromised.  And remember if your KeePass database is compromised [it's pretty game over](https://www.rubydevices.com.au/blog/how-to-hack-keepass).

If we're really paranoid (and yes, I am :D), we can mitigate this risk by using multiple KeePass databases.

KeePass fully supports using multiple databases, and you can have different [master] passwords for each database.  Each database just appears as another window in the application.

<img src="http://keepass.info/screenshots/keepass_2x/main_big.png" />

#### Offline

I have one database for accounts I don't access anywhere but at home, on my laptop, using a WiFi point I mostly trust. 

Yes, I could grab and network cable and connect using a wire - it's always a compromise between security and convenience - in this instance, convenience wins :-).

1. Financials - I don't tend to check my bank account on my phone, nor on a WiFi point I don't trust (though there are [ways around that risk to](https://ipvanish.com)).  

2. [Toepoke](https://toepoke.co.uk) accounts - I only do releases or fixes at home, so there's little point increasing the risk by having these accounts synced in the cloud?

It's pretty straightforward to tell [Dropbox*](https://db.tt/oygIDRDY3M) to [not sync your offline password database](https://www.dropbox.com/help/syncing-uploads/selective-sync-overview).

<p class="text-danger">
A quick note about backups.  You need them!  

If your hard drive fails at home you'll lose your password database and all the passwords in it.  This is pain we don't want.

Store a backup off your main machine, somewhere safe.  Perhaps in a [VeraCrypt](https://www.veracrypt.fr) volume - and yes, I do, as is my entire laptop :-)
</p>

#### Online (Synced via [Dropbox*](https://db.tt/oygIDRDY3M))

Pretty much everything else!  Everything from 




### <div name="nonce">Using a nonce for important accounts</div>


### Saving Passwords

Yes, that little *Remember me* tickbox is very useful.  Personally I don't like knowing my passwords
https://www.engadget.com/2013/08/07/chrome-saved-passwords/

https://nakedsecurity.sophos.com/2018/01/03/ad-scripts-track-users-via-browser-password-managers/


<small>* Yes, that's a referral link to Dropbox, I get some extra space if you sign-up using that link</small>
