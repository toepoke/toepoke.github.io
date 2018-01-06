---
layout: post

title: "Password Managers - A Follow-Up ..."
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

Back in 2014 (2014!) I wrote a blog post about [starting to use a password manager](http://toepoke.github.io/2014/06/07/living-with-a-password-manager-in-the-real-world.html).  

It's long been one of my more popular posts, so I thought it was high time for a follow-up about how things have gone.

## <abbr title="Too Long; Didn't Read">TL;DR</abbr>

<dl class="dl.horizontal">
  <dt>Are you still using a password manager?</dt><dd>Yes, and it's still <a href="https://keepass.info">KeePass</a>.</dd>
  <dt>Would you ever go back?</dt><dd>No, I can't see it.</dd>
  <dt>What have you learnt since?</dt><dd>Read on ...</dd>
</dl>

## What I've Learnt

This isn't intended to be an intensive post, just a few observations and conclusions I've come to whilst using [KeePass](https://keepass.info) for the last few years.


### Cloud Sync <a id="cloud-sync"></a>
I use [Dropbox*](https://db.tt/oygIDRDY3M) for [syncing my KeePass database](https://keepass.info/help/v2/sync.html) between my main laptop and my   [mobile phone]({% post_url /2014/2014-06-10-keepass-installation-part-2-android-mobile %}).  

This makes it **even** more important to lock down your [Dropbox*](https://db.tt/oygIDRDY3M).

+ Ensure you have [a PIN setup](https://www.dropbox.com/help/mobile/passcode-phone-tablet) on your [Dropbox*](https://db.tt/oygIDRDY3M) account.
+ Enable [two-factor authentication](https://www.dropbox.com/account/security)[+](#two-factor).
+ Use a [nonce](#nonce) in your [Dropbox*](https://db.tt/oygIDRDY3M) password.

And whilst we're talking about mobile devices, some additional precautions I'd recommend:

+ If you haven't already, add an Unlock PIN or Pattern.
+ [Encrypt your device](https://www.howtogeek.com/141953/how-to-encrypt-your-android-phone-and-why-you-might-want-to/).
+ Add a [SIM Lock PIN](https://www.techrepublic.com/article/pro-tip-protect-your-android-sim-card-with-sim-pin-lock/) too, because ... [bad guys](https://www.theguardian.com/money/2015/feb/11/robbed-mobile-thiefs-phone-bill).


### Two-Factor Authentication <a id="two-factor">+</a>

Whilst SMS is better than not having two-factor authentication, [it's not without issues](https://twitter.com/toepoke_co_uk/status/873871178309488640?s=09).

I'd advise using a third-party app like [Google Authenticator](https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en) which doesn't require a phone reception or even an internet connection to verify you are the account holder.  This is an option on [Dropbox](https://db.tt/oygIDRDY3M), and many other websites too.

Of course you'll want to use two-factor authentication on other important accounts.  Any accounts with financial data, and of course your **[Google account](https://myaccount.google.com)**!


### Use Multiple Databases
Since the beginning I've used a single database for all my passwords.  The single database is then synched to my mobile via [Dropbox*](https://db.tt/oygIDRDY3M).

This all works great, however using a cloud provider does increase your [risk of a breach](https://www.theguardian.com/technology/2016/aug/31/dropbox-hack-passwords-68m-data-breach) to a certain extent.

To mitigate this I'm moving towards using multiple password databases.  Well two in fact;  Online and offline.


### Online and Offline Accounts

As outlined, [syncing your database to Dropbox](#cloud-sync) introduces the risk of your password database being compromised.  And remember if your KeePass database is compromised [its pretty much game over](https://www.rubydevices.com.au/blog/how-to-hack-keepass).

KeePass fully supports using multiple databases, and you can have different [master] passwords for each database.  Each database just appears as another window in the application.

<img src="http://keepass.info/screenshots/keepass_2x/main_big.png" />


#### Offline

I have one database for accounts I don't access anywhere but at home, on my laptop, using a Wi-Fi point I mostly trust. 

Yes, I could grab and network cable and connect using a wire - it's always a compromise between security and convenience - in this instance, convenience wins <img src="/images/smile.png" alt="smile" title="smile" />.

1. Financials - I don't tend to check my bank account on my phone, nor on a Wi-Fi point that I don't trust (though there are [ways around that risk to](https://ipvanish.com)).  

2. [Toepoke](https://toepoke.co.uk) accounts - I only do releases or fixes at home, so there's little point increasing the risk by having these accounts synced in the cloud.

It's pretty straightforward to tell [Dropbox*](https://db.tt/oygIDRDY3M) to [not sync your offline password database](https://www.dropbox.com/help/syncing-uploads/selective-sync-overview).

<p class="text-danger">
A quick note about backups.  You need them!  

If your hard drive fails at home you'll lose your password database and all the passwords in it.  This is pain we don't want.

Store a backup off your main machine, somewhere safe; perhaps in a <a href="https://www.veracrypt.fr">VeraCrypt</a> volume.
</p>


#### Online (Synced via [Dropbox*](https://db.tt/oygIDRDY3M))

Pretty much everything else!  Everything from [Facebook](https://facebook.com/toepoke) and [Twitter](https://twitter.com/toepoke_co_uk) to [the microchip account for our dog](https://anibase.com)!

A *massive* benefit of using [KeePass](https://keepass.info) over a long period of time is it becomes a really useful bookmark manager.


### Using a Nonce for Important Accounts <a id="nonce"></a>

Remember back in the bad old days when you'd use the same password for everything?  Maybe you'd even use some combination with the domain name of the website too?

Well, this can actually be quite useful when used with a password manager.  

For critical accounts (banking websites, [Dropbox*](https://db.tt/oygIDRDY3M), etc.) I use a combination of a long random password generated by KeePass and a nonce that only I know.  I like to think of it as [two-factor authentication](#two-factor), but using my head rather than an app <img src="/images/smile.png" alt="smile" title="smile" />.

Frankly I'm amazed that in this day and age the banks still haven't woken up to the advantage [two-factor authentication](#two-factor) brings <img src="/images/sad.png" alt="sad" title="sad" />.

<small>
<i>And yes, I'm completely aware I'm using the word nonce <a href="https://en.wikipedia.org/wiki/Cryptographic_nonce">out of context</a> but it's the best word I could come up with</i> <img src="/images/smile.png" alt="smile" title="smile" />.
</small>


### Saving Passwords

Yes, that little *Remember me* tick-box is very useful.  Personally I don't like knowing my passwords [are stored in my browser](https://www.engadget.com/2013/08/07/chrome-saved-passwords/).  

I like to know it's only being entered by me, <u>when I want it to be entered</u>.  And of course, [there's this](https://nakedsecurity.sophos.com/2018/01/03/ad-scripts-track-users-via-browser-password-managers/).


## Signing Off

Remember a password manager isn't a silver bullet [it's just better than the alternative](https://www.troyhunt.com/password-managers-dont-have-to-be-perfect-they-just-have-to-be-better-than-not-having-one/).  Hopefully some of the above can mitigate some of the risks.

I hope this article has been useful to you, and if so please share using the buttons below.

<small>* Yes, that's a referral link to Dropbox, I get some extra space if you sign-up using that link.</small>
