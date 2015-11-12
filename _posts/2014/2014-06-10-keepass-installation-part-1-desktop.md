---
layout: post

title: "KeePass Desktop Installation"
# subtitle: "Couple of tips when using Fiddler"
date: 2014-06-10 08:00:00
tags: [security, techie, tips]
comments: true
cover_image: locks.jpg

excerpt: "Installing KeePass Password Manager on a Windows desktop"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---

# Introduction

I've been meaning to [start using a password manager](http://keypass.info) for ages.  As I'm [documenting how I'm getting on]({% post_url /2014/2014-06-07-living-with-a-password-manager-in-the-real-world %}) it makes sense to also outline the installation of **KeyPass**.

# Download

As I'm starting afresh with no existing database, I went for [version 2.X](http://keepass.info/download.html) as it offers a [better feature set](http://keepass.info/compare.html).

I also opted for the [portable version](http://keepass.info/download.html) version.  This is purely a personal choice - I prefer to limit what's installed on my machine if I can.  I'm sure the full installation will work in much the same way.

# Setup

Once downloaded, copy the portable version to your tools folder, or desktop - basically where you want it to be.  Setup is a cinch:

- Open the **KeePass.exe** (version 2.X) executable in Windows Explorer
- Select **File &gt; New** to create a new password database
- Save the database somewhere sensible<br/><br/>
  <i>I chose to save mine in my <u><a href="https://db.tt/s4rtqKa">Dropbox</a></u> folder, as I'll be looking to sync the password database to a <a href="http://www.google.co.uk/nexus/5/">smartphone</a> later.</i>
- Once saved, you'll be prompted to set-up your **Master password**<br/><br/>
  <i>Before entering your <strong>Master password</strong>, stop for a moment and think of a <a href="http://windows.microsoft.com/en-gb/windows7/tips-for-creating-strong-passwords-and-passphrases">strong passphrase</a>.  You've become used to using a short 8 character password with websites.  Your <strong>Master password</strong> opens all the doors to all your data. Not just one, all of them; Your e-mail, your <a href="http://www.troyhunt.com/2014/05/the-ebay-breach-answers-to-questions.html">ebay</a> account, your bank … everything.</i>

Alongside the **Master password**, additional security elements can be used ... but should you?

- **Key file**<br/>
  Useful, but how would you securely store it?  On an encrypted USB thumb drive?  Possibly, but then you need a password to open it … see where I'm going <img src="/images/wink.png" alt="wink" title="wink" />
- **Windows User Account**<br/>
  You can also tie your installation to your username on your Windows machine if you prefer the extra security.  However I would advise against it:
  * Should your Windows machine ever die, or a hard disk dies you can no longer access your password database.  This can be mitigated with a [good backup strategy](http://www.hanselman.com/blog/TheComputerBackupRuleOfThree.aspx) - which you have, don't you? <img src="/images/smile.png" alt="smile" title="smile" />
  * This limits you to just the one computer, so forget about using the password manager on your phone.

If it helps, I went with the **Master password** option only.  I think the default Database settings are fine, just click **OK**.  

## Recommended Options
With our database setup and ready for [syncing](https://db.tt/s4rtqKa) there are a couple of settings I would recommend changing. Open the **Settings** from **Tools &gt; Options**:

- **Security**
  * Tick **Lock workspace after KeePass inactivity** which I set to **300 seconds** (5 minutes)
- **Integration**
  * Click **Create Association** - then when you double-click on your database file in Windows Explorer, KeePass will open.
  * Tick **Run KeePass at Windows startup**
- **Policy**
  * Untick the **Export - No Key Repeat** option - this prompts for the **Master password** before exporting your passwords.  So if you leave your PC unattended someone can’t just quickly export **<u>all</u>** your passwords.
  * Untick the **Print - No Key Repeat** option - again for the same reasons
  * Untick **Change Master Key - No Key Repeat** - ensures you have to enter the current **Master password** before the current password can be changed

# Usage

Once you've setup your **Master password** you're prompted with the main **KeePass** screen:
<img src="/images/posts/2014/2014/2014-06-10-desktop-install-keypass-screen.png" />
The left hand pane shows categories for various online services, internet sites, eMail services, etc.  You can add further groups as you gain more familiarity with the tool.  

The right hand side shows website in the current category; all straight-forward stuff.

<p style="margin-left: 20px; font-size: 0.75em">In the remainder of this article I'll only show keyboard shortcuts to access relevant features.  <strong>KeePass</strong> does allow everything to be selected with the mouse, however I solemnly believe using the keyboard is the most productive means of using the manager, and therein the best way to encourage its adoption in the long term – which is in your best interests dear reader <img src="/images/wink.png" alt="wink" title="wink" />.</p>

## Adding entries
I'm going to add an entry to [our favourite website for organising football](https://toepoke.co.uk) <img src="/images/wink.png" alt="wink" title="wink" />

1. Select **Internet** on the left hand side pane
2. Hit **CTRL+Y** to **Add Entry**
3. Fill in the appropriate details
  * By default KeePass will **generate** a random password for you (click the 3 dots to see what’s been generated)
  * Some websites are choosy about what passwords can be used – click the **Generate a random password** button to apply the _rules_ the website expects.
4. Click **OK**
5. Hit **CTRL+S** to save to the **KeePass** secure database
<img src="/images/posts/2014/2014-06-10-desktop-install-add-new-entry.png" />

## Logging into websites

A vital part to the success of a password manager is how easy is it to use in the real-world, i.e. logging into websites.  And as with many things in life, the answer is ... it depends.  It depends on the website and if it's built in such a way that **KeePass** can inject itself easily.

### Simple

The simplest method is via the **Auto-Type** feature. This is the preferred method, but sadly doesn't work with all websites.  I've added an entry for the [bbc](http://bbc.co.uk/) website in this instance.
<img src="/images/posts/2014/2014-06-10-desktop-install-edit-entry.png" />

1. Hit **CTRL+ALT+K** to bring the **KeePass** application window into focus.
2. Select the **bbc.co.uk** entry and hit **CTRL+U** to open [bbc.co.uk](http://bbc.co.uk) in your browser.
3. Hit **CTRL+ALT+K** again to bring **KeePass** back into focus.
4. Hit **CTRL+V** to **Perform Auto-Type**.

OK, there are 4 steps to this, but ...<br/>
  a) As you get advanced this becomes second nature, and<br/>
  b) Is it any more effort than opening a URL, putting the mouse into the username screen, typing it out, then typing your easy-to-remember-password?

<p style="margin-left: 20px; font-size: 0.75em">I'm just getting started with <strong>KeePass</strong> too, so there may be far better ways of accomplishing this.</p>


### Semi-Simple
Some websites don't immediately play well with **KeePass**, so for these we need to invest a little more to get them working.  Somewhat ironically my [little website](https://toepoke.co.uk) is one of them!

**KeePass** allows the **Perform Auto-Type** function for a website to be more specifically determined, so we're going to do that.

1. Hit **CTRL+ALT+K** to bring the **KeePass** application window into focus.
2. Select the website ([toepoke](https://toepoke.co.uk) in this instance).
3. Hit **ENTER**
4. Select the **Auto-Type** tab
5. In the **Override default sequence** field add the following:
  {TAB}{TAB}{TAB}{USERNAME}{TAB}{PASSWORD}{ENTER}
6. Click **OK** to save.

This tweaks the behaviour of the **Perform Auto-Type** function.  Evidently **KeePass** assumes (quite fairly) that the username field on the website is the first data entry field on screen.  However on the toepoke login screen it's field #3 (hence the **3 {TAB}** references above)

With that small modification in place we can log into [toepoke](https://toepoke.co.uk) just as we did in the [Simple](#simple) steps above.

### Hard

Some websites don't play well with **KeePass** at all!  For these we're reduced to copying and pasting the credentials manually.  **KeePass** has an approach for this too:

1. Hit **CTRL+ALT+K** to bring the **KeePass** application window into focus.
2. Select the website, and hit **CTRL+U** to open the website in your browser as normal
3. Hit **CTRL+ALT+K** again to bring **KeePass** back into focus.
4. Hit **CTRL+B** to copy the username to the clipboard
5. Swap back to the website and hit **CTRL+V** to paste the username
6. Swap back to **KeePass** (or hit **CTRL+ALT+K**)
7. Hit **CTRL+C** to copy the password to the clipboard [*](#auto-clear)
8. Swap back to the website and hit **CTRL+V** to paste the password
9. Hit the website login button

<p id="auto-clear" style="margin-left: 20px; font-size: 0.75em">
<strong>*</strong> KeePass has a nifty feature where the password is only kept in the clipboard for a set period of time.  In the status bar, you'll see a countdown of how long you have left to paste it.
<br/>
<img src="/images/posts/2014/2014-06-10-desktop-install-clipboard-countdown.png" />
<br/>
This timeout can be configured through <strong>Tools &gt; Options &gt; Security &gt; Clipboard auto-clear time</strong>
</p>

### Give Up (kind of)
And finally; Some websites don't ask for a password to be entered at, merely a subset of the password.  This approach is particularly popular with banking websites which present a series of dropdowns requesting say the 3rd, 5th and 8th letters of your password (to protect against [key loggers](~$ving-with-a-password-manager-in-the-real-world-part-1-installation.docx)).

For this scenario we can (and should) still use **KeePass** to store a strong generated password, but we can request **KeePass** to show us the password so we can discover the appropriate characters (naturally ensure nobody is looking over your shoulder at this point!)

1. Hit **CTRL+ALT+K** to bring the **KeePass** application window into focus.
2. Then either:
  - Select the website of interest, then
  - Hit **ENTER** to bring up the **Edit** dialog.
  - Click the **Hide password** button (the 3 dots) to quickly show the password.
OR
3. Hit **CTRL+H** to toggle viewing passwords for all websites (in a section).

## Conclusion

Whilst it's great the Internet has become so ubiquitous, but as a consequence it's got the attention of the baddies.  I hope this article has made **KeePass** seem less scarey and encourages you to protect your online life.

If you find this useful, you might want to checkout my [KeyPass on Android]({% post_url /2014/2014-06-10-keepass-installation-part-2-android-mobile %}) article too.

## Related articles
- [KeyPass Android Mobile installation]({% post_url /2014/2014-06-10-keepass-installation-part-2-android-mobile %})
- [Password Managers in the real-world]({% post_url /2014/2014-06-07-living-with-a-password-manager-in-the-real-world %})
- [Website security questions &amp; social media]({% post_url /2014/2014-06-10-security-questions-and-social-media %})
