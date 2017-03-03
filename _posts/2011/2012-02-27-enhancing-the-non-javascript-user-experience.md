---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724068554/enhancing-the-non-javascript-user-experience
title: "Fluqi, jQuery UI &amp; disabled JavaScript"
# subtitle: "What's in the box"
date: 2012-02-27 18:17:00
tags: [css, development, fluqi, jquery-ui, techie-stuff]
comments: true
cover_image: bluebells.jpg

excerpt: "Enhancing the non-javascript user experience with jQuery UI and Fluqi"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---

As some of you might be aware we recently released the [Fluqi](http://fluqi.apphb.com/) library as open source.  I won't repeat the ins-and-outs, but suffice to say [Fluqi](http://fluqi.apphb.com/) is a set of helper classes for building websites using the excellent [jQuery UI](http://jqueryui.com/) widgets in a fluent manner.

I built [Fluqi](http://fluqi.apphb.com/) because I grew tired of typing out the same HTML mark-up on lots of pages to achieve a similar objective.  I've been making changes to [toepoke](https://toepoke.co.uk) throughout the development of [Fluqi](http://fluqi.apphb.com/) as a [dogfooding exercise](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) and thought I'd share some of that experience.

For instance we have a screen showing matches that are coming in the future, and whether the user has said they're playing or not.  With JavaScript active the user sees this:

<a href="/images/posts/2012/2012-02-27-fluqi-with-javascript.png">
	<img class="img-center" src="/images/posts/2012/2012-02-27-fluqi-with-javascript.png" alt="" width="70%" />
</a>	

As you can see, the screenshot shows a [tab widget](http://jqueryui.com/demos/tabs/) with an [accordion widget](http://jqueryui.com/demos/accordion/) inside each tab.  [toepoke](https://toepoke.co.uk) was built from the ground up to be [progressive](https://en.wikipedia.org/wiki/Progressive_enhancement) so the site is still usable to people with JavaScript disabled.  So without JavaScript, the same screen looks like this:

<a href="/images/posts/2012/2012-02-27-fluqi-without-javascript.png">
	<img class="img-center" src="/images/posts/2012/2012-02-27-fluqi-without-javascript.png" alt="" width="70%" />
</a>	

It's not very pretty, but it is still useable.

When developing [Fluqi](http://fluqi.apphb.com/) one thing I wanted to do was to be able to still have the _look and feel_ of the [jQuery UI](http://jqueryui.com) widgets, even if JavaScript was disabled.  After implementing [Fluqi](http://fluqi.apphb.com/) on our own website we now use the following code to create the [tab widget](http://jqueryui.com/demos/tabs/) above (the accordion part is omitted for brevity):

{% highlight vb.net %}
    var tabs = Html.CreateTabs(“tabs”)
        .Rendering
            .SetRenderCSS(true)
         .Finish()
    ;
{% endhighlight %}

The important part here is **SetRenderCSS(true)**.  This tells [Fluqi](http://fluqi.apphb.com/) to draw the CSS classes jQuery UI uses under the hood, which normally are added through JavaScript (but obviously don't when JavaScript is disabled). 

The result now looks like this:

<a href="/images/posts/2012/2012-02-27-fluqi-without-javascript-2.png">
	<img class="img-center" src="/images/posts/2012/2012-02-27-fluqi-without-javascript-2.png" alt="" width="70%" />
</a>	

As we can see, there's quite an improvement.  The tab widget still _looks_ like a tab, as do the accordion.  Naturally the tabs and accordion widgets won't behave as such as JavaScript is off, but it's a lot clearer to the user visually what's going on.

Please note however that there are some areas of the [jQuery UI](http://jqueryui.com) website which advise against adding the CSS classes to your mark-up (which is what the **SetRenderCSS(true)** method does), however I haven't found any problems in doing this so far.  So as always, test it before going into production :).
