---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724096062/my-annoying-visual-studio-options-tag-visual
title: "[My] Annoying Visual Studio options"
# subtitle: "What's in the box"
date: 2010-08-26 19:07:00
tags: development,visual-studio
comments: true
cover_image: cityscape.jpg

excerpt: "Not ranting about tabs ... this time ..."

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

Again this one is more for my memory than anything else. That said I hope you find it useful too !

There’s just the one for the time being, but I’m intending to rebuild my laptop in the near future, so no doubt we’ll find the article growing.

**Highlighting references.**

A new feature in Visual Studio 2010 is you put your cursor on a word and after a second or so it highlights everything that matches it. I actually quite like this feature in notepad++ but for some reason not in VS (think it’s because it does it wherever the cursor is, whereas notepad++ only does it when you highlight something, i.e. it responds to your intent).

Anyway, enough of my ranting, the important bit is how to turn it off.

Evidently this feature is dependent on the editor being used in Visual Studio at the time, so it’s hidden away [for C#] under:

&nbsp;&nbsp;&nbsp;**Tools** > **Options** > **C#** > **Advanced** > **Highlight references to symbol under cursor**

<img src="/images/posts/2010-08-26-my-annoying-vs-options.jpg" alt="" />

Hope this helps someone else as well as me! 
