---
layout: post

title: "Deferring e-mails with Outlook"
# subtitle: "What's in the box"
date: 2015-03-12 19:00:00
tags: [techie-stuff, tips, office]
comments: true
cover_image: you-got-mail.jpg

excerpt: "Deferring e-mails easily in Outlook"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---
<strong>*** Updated 18-Mar-15 to include Today and Tomorrow as instructions ***</strong>

# Introduction
I use Outlook **at lot**, and in particular reminders.  However I have a bit of a blind spot with reminders (mainly because of the window constantly popping up).

To combat this I only use them for non-essential reminders that don't need doing on a particular day - like cleaning the car; It needs doing *at some point* but there's no pressing deadline for it (or in my case, it's just never <img src="/images/wink.png" alt="wink" title="wink" />).

For more deadline based reminders I use <a href="https://support.office.com/en-in/article/Delay-or-schedule-sending-e-mail-messages-026af69f-c287-490a-a72f-6c65793744ba">deferred e-mails</a> to send myself an e-mail at some point in the future, I tend to pay more attention to my **Inbox**:

<img class="img-center" src="/images/posts/2014/2014-03-13-deferred-emails-through-ui.png" width="412" height="312" alt="Deferred e-mail dialog in Outlook" title="Deferred e-mail dialog in Outlook'" />

The UI is fine for occasional use, but it's a bit long winded for what I need.  I typically just want a reminder in **2 days** or **2 weeks** time.

So I cranked up my <a href="https://msdn.microsoft.com/en-us/library/office/ee814736%28v=office.14%29.aspx">VBA</a> skills to do something about it!

# Usage

In essence I'd like to be able to create a normal blank e-mail, then [easily] instruct **Outlook** to defer the sending of the e-mail to *some point in time*.  Adding the instruction in the **Subject** field seems like a natural starting point:

<img class="img-center" src="/images/posts/2014/2014-03-13-example-defer.png" width="540" height="329" alt="Deferred e-mail dialog in Outlook" title="Deferred e-mail dialog in Outlook'" />

We create the e-mail as normal, with a normal subject line but add a **::** delimiter at the end.  This will tell our VBA code to look at what follows and convert it into *future time*.  Here's some example subject lines:

1. Make a brew **:: in 20 minutes**
2. Set off for the dentist appointment **:: on 23/3/15 at 3pm**
3. Lunch with Fred **:: at 13:00**
4. Lunch with Wilma **:: today at 1pm**
5. Lunch with Betty **:: tomorrow at 1pm**

Then fill in the body of the e-mail and **Send** as normal.  Behind the scenes the macro populates the **Delay Delivery** settings as you would expect and the e-mail will quietly sit in your **Outbox** until it's ready to go.

# Installation

Installation is pretty straightforward.

1. <a href="http://www.msoutlook.info/question/279">Enable the **Developer** tab in Outlook</a> (if you haven't already)
2. Download the <a href="https://raw.githubusercontent.com/toepoke/toepoke.github.io.code/master/VBA/Outlook/Deferrer/Deferrer.bas">Deferrer.bas</a> file and save it on your machine.
3. Download the <a href="https://raw.githubusercontent.com/toepoke/toepoke.github.io.code/master/VBA/Outlook/Deferrer/ThisOutlookSession.cls">ThisOutlookSession.cls</a> file and save it to your machine.
4. In **Outlook**, click the **Developer** tab **>** **Visual Basic** button.
5. In the IDE that opens, right click on **Modules** and select **Import File** and locate the **Deferrer.bas** file you downloaded earlier.
6. Still in the IDE, right click on **Microsoft Outlook Objects** and select **Import File** and locate the **ThisOutlookSession.cls** file you downloaded earlier.
7. Restart **Outlook**

# Test Installation

With a bit of luck everything is installed correctly, so create a new blank e-mail with "Test **::in 1 minute**" in the subject line.  Hopefully it will sit in your **Outbox** for a while before magically appearing in your **Inbox**.

# Finishing off ...

A few things to keep in mind:

1. The above was developed with **Outlook 2010**, but should work with later versions (though if it doesn't, you're on your own!).
2. Outlook needs to be running for the e-mail to send; don't rely on some **Exchange Server** magic to happen.
3. The installation process is more than a bit rubbish, if you've a better way please mention it in the comments.

Until next time!
