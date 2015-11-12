---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724097127/finding-redundant-code-in-visual-studio-solut
title: "Find redundant code ..."
# subtitle: "What's in the box"
date: 2010-08-14 12:05:00
tags: [c-sharp, vb.net, code, development, tips]
comments: true
cover_image: cityscape.jpg

excerpt: "Approach for finding redundant code in your .NET codebase"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---

In the early days of the development of [toepoke](https://toepoke.co.uk) I didn't have any proper source control management (yeah, yeah, I know, I know :D !)

Anyway the days of commenting out code whilst I try stuff out and using [my own source control management system](http://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/xcopy.mspx?mfr=true) are long gone (thankfully!).

However I still have a lot of commented out code hanging around from those days and I really need to get rid of it and to tidy things up. Thing is there's load of files and I didn't fancy going through every single file, so I figured there must be an easier way.

I figured typically I'm commenting out multiple lines of (C#) code, along the lines of this:

{% highlight c# %}
// public void SomeLazyCommentedOutMethod() {
//
// }
{% endhighlight %}

So all we need to do is search for **//{** or **// {** or basically **//** followed by anything with **{** at some point afterwards. Sounds like a regular expression search to me.

Ordinarily my ability to build a regular expression from scratch extends to [this](http://www.google.co.uk/search?q=%22regular+expression+for+validating+email+addresses%22). But thankfully even I can cope this one!

(:b)*(//)+([a-zA-Z0-9])*\{

Which breaks down to:<br/>
(:b)* = Zero or more tabs or spaces, followed by<br/>
(//)+ = One or more slashes (/), followed by<br/>
([a-zA-Z0-9])* = Zero or more letters or numbers, followed by<br/>
\{ = followed by an opening curly brace ({).<br/>

So if you bob (:b)*(//)+([a-zA-Z0-9])*\{ into the Visual Studio **Find In Files** dialog (**CTRL + SHIFT + F**) and hit **Find All** you should find most of the areas where you've commented out code.

C#
--
<img class="img-center" src="/images/posts/2010/2010-08-14-find-redundant-code-c-sharp.jpg" alt="" />


VB.NET
------
<img class="img-center" src="/images/posts/2010-08-14-find-redundant-code-vb.jpg" alt="" />

Well I've tried (the C# version) on the [toepoke](https://toepoke.co.uk) codebase and found **158** hits which on the up side means it's probably working, on the downside I've been a naughty boy!
