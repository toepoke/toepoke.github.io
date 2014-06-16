---
layout: post

title: "KeePass Android Installation"
# subtitle: "Couple of tips when using Fiddler"
date: 2014-06-10 08:00:00
tags: 
- security
- techie
- tips
comments: true
cover_image: locks.jpg

excerpt: "Installing the KeePass Password Manager on an Android mobile device"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

# Introduction

Continuing in [my series of posts]({% post_url 2014-06-07-living-with-a-password-manager-in-the-real-world %}) about [KeyPass](http://keypass.info) - this time, it's installing on [Android](http://www.android.com/]).

# Syncing
You can use **KeePass2Android** just on your mobile device if you wish.  However mobile devices aren't the best way for dealing with high volumes of data entry, like e-mail addresses, usernames and passwords.

I see the mobile version as a way to log into your websites, rather than a means to set-up better passwords.

In this regard I'll be syncing the database between my [desktop]({% post_url 2014-06-10-keepass-installation-part-1-desktop %}) and my mobile, using [Dropbox](https://db.tt/s4rtqKa).

If you haven't used [Dropbox](https://db.tt/s4rtqKa) before, it's a great little tool for syncronising data between devices via the cloud.

<p style="margin-left: 20px; font-size: 0.75em">
If you don't have a <a href="(https://db.tt/s4rtqKa)">Dropbox</a> account, I suggest you <a href="(https://db.tt/s4rtqKa)">head over there</a> and install it on your desktop (it's really easy).
<br/><br/>
Don't worry, I'll be right here when you get back <img src="/images/smile.png" alt="smile" title="smile" />
</p>

# Dropbox on Android
- [Download and install](https://play.google.com/store/apps/details?id=com.dropbox.android) the [Dropbox app](https://play.google.com/store/apps/details?id=com.dropbox.android) for Android
  - I recommend adding a passcode to [Dropbox](https://db.tt/s4rtqKa) via **Settings &gt; Require app passcode**<br/>Should you ever lose your phone, nobody can easily download your data.
  - I would also recommend ticking the **Erase data - Erase all Dropbox data from this device after 10 failed passcode attempts** - again this just provides extra security (you can always save your passcode in **KeePass2Android** if you think you'll forget it <img src="/images/wink.png" alt="wink" title="wink" />).
- Once installed, simply download the **KeePass** database file to your phone by _thumbing_ the file in the [Dropbox](https://db.tt/s4rtqKa) UI.

With [Dropbox](https://db.tt/s4rtqKa) installed we can move onto using the [KeyPass Android app](https://play.google.com/store/apps/details?id=keepass2android.keepass2android).

# KeyPass on Android

- Again [download and install](https://play.google.com/store/apps/details?id=keepass2android.keepass2android) the **KeePass2Android** Android client application ([Clients for other devices are available](http://keepass.info/download.html)).
- I recommend you change the following settings:
  - **Settings &gt; Application &gt; QuickUnlock &gt; Enable QuickLock by default**<br/>**KeePass2Android** will then prompt you for the last 3 characters from your **Master password** when you open the application.
  - **Settings &gt; Application &gt; Security &gt; Lock when screen off**<br/>Which will lock **KeePass2Android** when you put your device to sleep.

# Usage

There are two methods you can use to log into websites with **KeePass2Android**, the setup for each is the same.  We'll use our [bbc.co.uk](https://ssl.bbc.co.uk/id/signin) example [from before]({% post_url 2014-06-10-keepass-installation-part-1-desktop %}#simple):

- Open the **KeePass2Android** application
- Enter your passcode if required
- Prod the **Internet** category
- Then select the **bbc.co.uk** entry
- Thumb the **URL** to open in your default mobile browser

As the website is loading you will see 3 notifications appear at the top of your device:

<img src="/images/posts/2014-06-10-mobile-install-notification.jpg" />

1. **Entry is available through KP2A Keyboard**
2. **Select to copy username to clipboard**
3. **Select to copy password to clipboard**

## KP2A Keyboard method
Option **1** replaces your current keyboard with the **Keypass2Android** keyboard.  This makes life a lot easier when entering usernames and passwords as **Keypass2Android** is integrated into the keyboard.

<img src="/images/posts/2014-06-10-mobile-install-android2keepass-keyboard.jpg" />

However you lose the default [Google Swype-esk](http://gizmodo.com/google-has-its-own-swype-like-keyboard-app-511535898) keyboard (or constantly have to flip between the two).

## Copy/Paste method

If you prefer to keep the default keyboard the copy/paste method may be more suitable for you.

- Drag down the **notification** area and pick **Select to copy username to clipboard** 
- Dismiss the **notification** area out of the way
- Place focus on the **username** field of you website, and **paste** the username
- Drag down the **notification** area and pick **Select to copy password to clipboard**
- This time, place focus on the **password** field of you website, and **paste** the username

# Conclusion

The **KeePass2Android** application is unavoidably more _clunky_ than the desktop version, but a small amount of inconvenience for the greater good.

## Related articles
- [KeePass Windows installation]({% post_url 2014-06-10-keepass-installation-part-1-desktop %})
- [Password Managers in the real-world]({% post_url 2014-06-07-living-with-a-password-manager-in-the-real-world %})
- [Website security questions &amp; social media]({% post_url 2014-06-10-security-questions-and-social-media %})

