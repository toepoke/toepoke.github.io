---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724096581/debugging-aspnet-mvc-source-code
title: "Debugging ASP.NET MVC Source Code"
# subtitle: "What's in the box"
date: 2010-08-18 23:40:00
tags: code,debugging,development
comments: true
cover_image: bluebells.jpg

excerpt: "How to debug the source code for ASP.NET MVC"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

This is more for my memory than anything else, but hopefully will be useful for others too.

To debug the ASP.NET MVC source code you need the following steps:

1. Go to **Tools** > **Options** and tick Enable **.NET Framework source stepping**.
1. Did it work? If not (like me) continue with the rest of these steps.
1. First off download the source code. I’m going to be debugging [version 2](http://aspnet.codeplex.com/releases/view/41742) .
1. Once downloaded, extract the zip out (you may want to unblock it first [Right click on the ZIP, **Properties** > **Unblock**)
	<br/>Otherwise you may hit issues when trying to debug later.
1. Add the **System.Web.Mvc.csproj** as an existing project in Visual Studio.
1. Replace the normal MVC reference in your web project with the new project with the source code.
1. Open the **web.config** (the one in the root, not the one in Views):
1. Comment out **{add assembly=“System.Web.Mvc, Version=2.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35, processorArchitecture=MSIL” /}**
1. Add in **{add assembly=“System.Web.Mvc” /}**
1. Do a Clean, then Rebuild.
1. Bit of luck, jobs a good 'un.

**28th Sep 2010 Addendum**

I’ve subsequently come across [an article](http://weblogs.asp.net/gunnarpeipman/stepping-into-asp-net-mvc-source-code-with-visual-studio-debugger) that outlines an alternative method by using the source code server in Visual Studio.

I’ve had a go, but I couldn’t get anything coming out of the watch windows (due to the assemblies being optimised) which kind of limits what you can do (unless I’m doing something wrong – please add a comment if I am!).


