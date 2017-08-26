# NOTES
Do this and add to article

Split banks and stuff you only do at home into a separate file. Don't sync that over Dropbox (pause synching so you can turn off on the new file)

Nonce concept for stuff that is high impact

Tagging priorities

VPN referral for the VPN link below?

Have toepoke deployment in separate file. Again not synced

use random number generator for your username as well as a password (unless it's an e-mail username).

Cross reference Troy Hunt's article that basically says password managers aren't a silver bullet, they're just better than the alternative:

https://www.troyhunt.com/password-managers-dont-have-to-be-perfect-they-just-have-to-be-better-than-not-having-one/

include link to top 10K passwords that we're adding into toepoke
https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/10_million_password_list_top_10000.txt



---
layout: post

title: "A follow-up to using password managers"
# subtitle: "What's in the box"
date: 2017-07-08 08:00:00
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

Back in 2014 (2014!) I wrote a blog post about my experiences [starting with a password manager](http://toepoke.github.io/2014/06/07/living-with-a-password-manager-in-the-real-world.html).  I thought it was high time for a follow-up post about how things have gone.

### Are you still using it?
Yes.

### Would you ever go back?
No, can't see it.

## What have you learnt since?

### Cloud sync
[Dropbox*](https://db.tt/oygIDRDY3M) syncing of your KeePass database between your main PC or laptop and your mobile phone.  Just make sure you have a PIN on the Dropbox mobile phone app, and two-factor authentication setup (though this [isn't without issue](https://twitter.com/toepoke_co_uk/status/873871178309488640?s=09)).

### Use multiple databases
Since the beginning I've used a single database for all my passwords.  The single database is then synched to my mobile via [Dropbox*](https://db.tt/oygIDRDY3M).

This all works great, however using a cloud provider does increase your [risk of a breach](https://www.theguardian.com/technology/2016/aug/31/dropbox-hack-passwords-68m-data-breach) to a certain extent.

To mitigate this I'm moving towards using multiple password databases.  Well 2 in fact.  Online and offline:

#### Offline

1. Financials - I don't tend to check my bank account on my phone, nor on a WiFi point I don't trust (though there are [ways around that risk to](https://ipvanish.com)).  

2. Toepoke accounts - Again I tend to do any releases or fixes unless I'm at home, so there's little point increasing the risk by having these accounts synced in the cloud.

#### Online (Synced via [Dropbox*](https://db.tt/oygIDRDY3M))

Pretty much everything else!

KeePass fully supports using multiple databases, and you can have different [master] passwords for each database.  Each database just appears as another window in the application.

<img src="http://keepass.info/screenshots/keepass_2x/main_big.png" />






<small>* Yes, that's a referral link to Dropbox, I get some extra space if you sign-up using that link</small>
