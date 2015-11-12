---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724058153/jqueryuicom-has-had-a-facelift
title: "Fluqi website fixed"
# subtitle: ""
date: 2012-10-11 13:44:00
tags: [techie-stuff, fluqi, fixes, jquery-ui]
comments: true
cover_image: bluebells.jpg

excerpt: "Fix for <a href='http://fluqi.apphb.com/'>Fluqi</a> website"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

For those of you who've been using Fluqi, you may have noticed that the Theme Switch tool has been broken for a few days.  This is because the [underlying script](http://old.jqueryui.com/themeroller/themeswitchertool/) is no longer where it was.

Indeed on some pages the demos aren't working and this is because the absence of the Theme Switcher script breaks the rest of the page.

The guys over at [jQuery UI](http://jqueryui.com) had a redesign of the website (which is a massive improvement, excellent work guys), but sadly the **Theme Switcher Tool** is no longer present.

Fortunately the [jQuery UI](http://jqueryui.com) guys are way ahead of us on this one, and they've moved the existing site to [old.jqueryui.com](http://old.jqueryui.com).  So all is well with the world?

Sadly not quite.  The Theme Switcher has always been a bit of a bad cousin of the [jQuery UI](http://jqueryui.com) project and kind of hangs off.  I think it was always intended just as an aid for development. 

Anyway so whilst the [old.jqueryui.com](http://old.jqueryui.com) website works fine, sadly there are some hard-coded references to jquery.com inside the Theme Switcher Tool JavaScript source file.  To cut a long story short I've added my own version of the tool into the [Fluqi source code](https://github.com/toepoke/Fluqi/raw/master/Fluqi.Web.Demo/Scripts/jquery-theme-switcher.js) which uses the new (or old!) [old.jqueryui.com](http://old.jqueryui.com) website.  Please take your own copy rather than link directly to GitHub.

Finally, for those of you who are using Fluqi - and bless you for doing so :) - you may have noticed that v1.9 of [jQuery UI](http://jqueryui.com) has been released.  This release brings the new [tooltip](http://jqueryui.com/tooltip/) and [menu](http://jqueryui.com/menu/) widget controls.  Just so you know I'll be looking at the [release notes](http://jqueryui.com/changelog/1.9.0/) and pushing out a new build of [Fluqi](http://fluqi.apphb.com/) in the near future (no confirmed date as yet).

Addendum
--------

[@scott_gonzalez](https://twitter.com/scott_gonzalez) kindly pointed out that [@jqueryui](https://www.twitter.com/jqueryui) [no longer supports](https://twitter.com/jqueryui/status/256378200949678080) the **Theme Switcher Tool** and suggests using the [Super Theme Switcher](https://github.com/harborhoffer/Super-Theme-Switcher) by [@davehoff](https://twitter.com/davehoff) instead.

Until next time.



