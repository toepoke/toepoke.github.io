---
layout: post

title: "Outlook.  Where is my folder?"
# subtitle: "What's in the box"
date: 2014-08-18 19:00:00
tags: [techie-stuff, tips, office, rants]
comments: true
cover_image: city-conference-1984.jpg

excerpt: "How to find where an e-mail is stored in Outlook"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---

This image has annoyed me for a while.  It appears after you click the **Try searching again in All Mail Items** link when searching your e-mails.
<img src="/images/posts/2014/2014-08-18-outlook-where-is-my-folder.jpg" width="635" height="323" alt="MS Outlook showing results of a 'Find in Files'" title="MS Outlook showing results of a 'Find in Files'" />

To be fair, **Outlook** is jolly good at finding your e-mails for you (well after the 2003 version).  But I'm quite finicky about storing my e-mails and have quite a deep hierarchy.  

Which is why the image above is so frustrating.  Thanks for telling me what folder the e-mail is in, *but what about where that "_Car(VW Golf)" folder lives*!  

I know there's something else in *that* folder that I want to look at ... **take me to the folder too!**

Perhaps it's just me. Perhaps there's a magic way to find out where the folder *actually* lives?

If there is, I don't know it.  Being <a href="https://en.wikipedia.org/wiki/Law_of_the_instrument">a developer</a> I thought I'd try and find a solution in the <a href="https://msdn.microsoft.com/en-us/library/office/ee814736(v=office.14).aspx">Outlook API</a>.  Turns out it's quite straightforward to do with macros.  I've done the hard work, you just need to import the module:

1.	Show the <a href="https://msdn.microsoft.com/en-us/library/bb608625.aspx">Developer Tab</a> in Outlook.
2.	<a href="http://www.extendoffice.com/documents/outlook/1368-outlook-enable-disable-macros.html">Enable macros</a>.
3.	<a href="https://github.com/toepoke/toepoke.github.io.code/blob/master/VBA/Outlook/FolderHelper/FolderHelper.bas">Download my **FolderHelper** module</a> and save it on your **Desktop** (or wherever).
4.	In **Outlook** select **Developer Tab**, then click the **Visual Basic** button.
5.	Right-click on **Modules** in the left hand pane, and select **Import**
6.	Select the **FolderHelper.bas** module downloaded earlier.

Once installed, usage is much simpler:

1.	Performance a search (**Ctrl+E**), then click the **Try searching again in All Mail Items** link.
2.	Double click on a relevant e-mail (so it's out of the **Preview Pane**)
3.	Click the **Developer Tab** and select either:<br/>
	a)	**WhereAmI** - brings up a dialog box with the path showing, or<br/>
	b)	**SyncOutlookToMailItemLocation** - which will select the folder in the folder pane:<br/>
	<img src="/images/posts/2014/2014-08-18-outlook-where-is-my-folder-macro-result.jpg" width="340" height="199" />

And that's basically it.

Hope this helps, until next time!
