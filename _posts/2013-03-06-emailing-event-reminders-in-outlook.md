---
layout: post

title: "Emailing event reminders in Outlook"
# subtitle: "What's in the box"
date: 2013-03-06 13:20:00
tags: techie-stuff, tips
comments: true
cover_image: bluebells.jpg

excerpt: "Email meeting reminders to your Inbox"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

I tend to use [event] reminders in Outlook a lot, as I’m sure lots of us do. However the downside is I end up with a mix of important (meetings) and not-so-important (defrag hard drive) reminders.

There’s a few tools for sending an email reminder as well as having the reminders window pop-up, but they’re mostly paid ones. It can’t be that difficult? And indeed it isn’t :)

## Installation
All that’s required is a simple macro:

1. Firstly enable the [Developer Tab](http://msdn.microsoft.com/en-us/library/vstudio/bb608625.aspx) in **Outlook**
2. Select **Macros**, then **Macros** again
3. Click the **Edit** button
4. Double click on **ThisOutlookSession**
5. Copy and paste the code below into the code window
6. Make any required changes to the constants at the top (i.e. your e-mail address)
7. Restart **Outlook** for the changes to take effect

## The Code
{% highlight vb.net %}
Public WithEvents objReminders As Outlook.Reminders
Const EMAIL_TO = "xyz@example.com"
Const SEND_WHEN_IMPORTANT = True
Const SEND_WHEN_INVITES = True

Private Sub Application_StartUp()
    Set objReminders = Application.Reminders
End Sub

Private Sub objReminders_ReminderFire(ByVal ReminderObject As Reminder)
    Dim sendMsg As Boolean
    Dim app As AppointmentItem
    
    sendMsg = False
    If SEND_WHEN_IMPORTANT And ReminderObject.Item.Importance >= olImportanceHigh Then
        sendMsg = True
    End If
    If SEND_WHEN_INVITES And ReminderObject.Item.Recipients.Count > 1 Then
        '' Note there''s always at least one person, i.e. YOU!
        sendMsg = True
    End If
    
    If sendMsg Then
        Dim body As String, subject As String
        
        subject = ReminderObject.Caption & " at " & ReminderObject.Item.Start
        body = "You have a meeting at " & ReminderObject.Item.Start
        
        EmailReminder EMAIL_TO, subject, body
    End If
End Sub

Private Sub EmailReminder(toEmail As String, subject As String, body As String)
    Dim oMail As Outlook.mailItem
    Set oMail = Application.CreateItem(olMailItem)
    oMail.subject = subject
    oMail.body = body
    oMail.Recipients.Add (toEmail)
    oMail.Send
End Sub
{% endhighlight %}

## Usage
When Outlook fires the **reminder** for an event in your calendar you will now get an e-mail sent too (which I for one tend to notice more).

It won’t send you an e-mail everytime though, only when:

+ The event in your calendar has at least 2 people (there’s always 1 in them … you!). I’ve used this to flag this event as a meeting.
+ The event in your calendar it’s flagged as **Important**. This is so you can add a normal reminder to do something, but you get an e-mail reminder as well.

One last thing to note is that you will get an e-mail _everytime_ the event reminder is fired. So each time you Snooze you’ll get another email (when the event wakes up again).
