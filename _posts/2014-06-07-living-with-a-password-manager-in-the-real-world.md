---
layout: post

title: "Password Managers in the real world"
# subtitle: "Couple of tips when using Fiddler"
date: 2014-06-07 08:00:00
tags: 
- security
- techie
- tips
comments: true
cover_image: locks.jpg

excerpt: "Set yourself the two week password challenge!"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

## TL;DR

- [They're a good thing](#so-how-did-it-go).
- It's often quicker than logging into websites manually.
- [You should use one]({% post_url 2014-06-10-keepass-installation-part-1-desktop %}#introduction).

## Introduction
Passwords. Not a very interesting subject, until your [accounts get hacked](https://uk.news.yahoo.com/celebrity-twitters-hacked--five-other-hacked-accounts-justin-bieber-lady-gaga-britney-spears-160352069.html), then all of a sudden they're _very_ interesting ... for all the wrong reasons.

Passwords are the bane of the modern internet.  A necessity, but annoying:

- They need to be complex, but memorable, so you don’t write them down.  
- They need to be [different for every website](http://www.zdnet.com/passwords-rotten-core-not-complexity-but-reuse-7000013019/), but hey, still memorable.  
- Oh, and don’t forget they can’t be predictable either.

Like most people I don't have the time (and let’s be honest, the inclination) to [remember 100+ different passwords](http://www.independent.co.uk/student/student-life/how-to-sherlock-your-degree-the-art-of-building-a-memory-palace-9087779.html).  So we use <strike>bad</strike> alternative methods, for instance:

### Not too bad 
- 3 different passwords.
- **Level 1** - For websites with limited personal data capture, e.g. [bbc.co.uk](http://bbc.co.uk/) just request a username and password.
- **Level 2** - For websites with personal data capture, but not financial, e.g. most shopping websites.
- **Level 3** - Banks and those pesky shopping websites that insist on saving your credit card details.

### Too bad
- 1 password ... used for everything.

Now whilst the method of using 3 passwords is better, we're still *sharing* passwords.  If one of those websites gets hacked I have to change the password on _every single other website in level 3_.

With the victims of hacking becoming [more](http://www.bbc.co.uk/news/technology-24740873) and [more](http://www.bbc.co.uk/news/technology-27517907) [prominent](https://haveibeenpwned.com/PwnedWebsites) I felt I could no longer put off looking at a [password manager](http://en.wikipedia.org/wiki/Password_manager). 

For those unfamiliar, a password manager is akin to a safe into which you place all your valuables (i.e. passwords in this instance), close the door and protect all your passwords with one all encompasing **master password**.  To gain access to a website in the future [you only ever have to remember your **master password**](http://www.troyhunt.com/2011/03/only-secure-password-is-one-you-cant.html).


## The Two Week Challenge!

So despite the dread at the mind-numbing-banalty of sorting my passwords out, I set myself a little challenge:

- Start using a password manager.
- Use it religiously for [2 weeks](http://news.sky.com/story/1274201/cyber-attack-to-hit-in-next-two-weeks).
- After 2 weeks, decide whether to continue ([I did](#so-how-did-it-go)).

I had [a look around the market](http://www.pcpro.co.uk/features/380377/password-managers-are-they-safe-which-is-the-best) and decided I'd run my little challenge with [KeePass](http://keepass.info/), because:

1. It's open source and [OSI certified](http://keepass.info/help/base/) ... whatever that means <img src="/images/smile.png" alt="smile" title="smile" />
2. It's [free](http://www.runnersworld.co.uk/forum/clubhouse/ae-yorkshiremen-really-tight/104780.html).
3. If you read it wrong, it sounds a little rude <img src="/images/wink.png" alt="wink" title="wink" />

I've also written posts about installing **KeePass** on the [Windows]({% post_url 2014-06-10-keepass-installation-part-1-desktop %}) and [Android]({% post_url 2014-06-10-keepass-installation-part-2-android-mobile %}).


## Being pragmatic

I'm set.  I'm fully committed to trying **KeePass** for 2 weeks.  I've got it [installed on my PC]({% post_url 2014-06-10-keepass-installation-part-1-desktop %}) and [my mobile]({% post_url 2014-06-10-keepass-installation-part-2-android-mobile %}).

Am I going to go through over 10 years of e-mails tracking down all the websites I've used? **No chance!** I need to be realistic about what can be achieved, so the [two week challenge](#the-two-week-challenge) will be run with the following considerations:

1. **No actively looking to add historical websites.**
2. **No manual logging-in**<br/>Any new or existing website I need to log into in the next fortnight, I'll do it through **KeePass**.
3. **No new passwords**<br/>I'm keeping the existing passwords. If I decide after [2 weeks](#the-two-week-challenge) that **KeePass** isn't for me, I can back out easily.

## So how did it go?

All in all things went well and I didn't encounter anything I was particularly concerned about ... certaintly no deal breakers.  The elements that stand out are:

- The biggest challenge was forcing myself to use the tool rather than logging in manually.  Ultimately it's quicker to use the tool once you've trained yourself with the keyboard short-cuts.
- The mobile application doesn't have the best experience as you're limited to copying and pasting your credentials - I guess Android doesn't allow the [KeePass Auto-Type](http://keepass.info/help/base/autotype.html) feature.  This isn't really a concern for me as I don't really use my phone in that way.
- If you forget your **Master password** you're in a big heep of ... You lose access to every password on every website, there's no _send reminder_ option here. That's a lot of password resets to process.
- Ensure your **KeePass password database** is backed up.  Again, if the file becomes corrupted, or your hard disk fails, you lose all your credentials.

I'm actually quite impressed with [KeePass](http://keypass.info); It's one of those tools where you come across something that seems _a bit weird_ and a quick search reveals there's a perfectly good reason why some feature works the way it does, and often a way of changing the behaviour to what you'd prefer.

## So what's next ...

Well; I still have 10 years of websites in my Inbox, so I'd best get started moving them over to **KeePass** ... **NO CHANCE**.  That's never going to happen.

Again this calls for a more pragmatic approach, so I'm going to [improve my existing passwords](http://keepass.info/help/base/pwgenerator.html) based on how bad it would were a website I'm registered with become compromised.

1. My bank - most importmant for obvious reasons.
2. Any other websites with financial data, e.g. [PayPal](https://paypal.com/), [eBay](https://ebay.co.uk/) and [Quidco](http://www.quidco.com/user/861657/1857861/) – why a [cashback](http://www.quidco.com/user/861657/1857861/) website you may ask? Did you register your [Direct Debit](http://www.directdebit.co.uk/Pages/Home.aspx) details with them?
3. Web based email services like [gmail](https://mail.google.com/mail/), [hotmail](https://hotmail.co.uk/), etc
4. [Google](https://accounts.google.com/) account – how many services are tied across that one password?
5. Any shopping site where you’ve saved your credit card details (including those naughty ones that don’t let you opt out!)
6. Social services like [twitter](https://twitter.com/toepoke_co_uk), [facebook](https://www.facebook.com/toepoke) and [google+](https://plus.google.com/+ToepokeCoUk/) - often used for logging into other websites, and [expose personal data that can be used to attack other websites]({% post_url 2014-06-10-security-questions-and-social-media %}).
7. Anything else I'll change as and when required.  If I haven't used a website in a couple of years I'll need to reset the password anyway (I'll have forgotten what it was setup with).

## Are you still using KeePass?

How do you think I logged into [my blog](https://help.github.com/articles/using-jekyll-with-pages) to post this article? <img src="/images/wink.png" alt="wink" title="wink" />


## Related articles
- [KeePass Windows installation]({% post_url 2014-06-10-keepass-installation-part-1-desktop %})
- [KeyPass Android Mobile installation]({% post_url 2014-06-10-keepass-installation-part-2-android-mobile %})
- [Website security questions &amp; social media]({% post_url 2014-06-10-security-questions-and-social-media %})





