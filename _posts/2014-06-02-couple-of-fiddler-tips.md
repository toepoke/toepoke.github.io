---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724104306/simple-example-on-using-foreach-generic-metho
title: "Fiddler tips!"
# subtitle: "Couple of tips when using Fiddler"
date: 2014-06-02 12:07:00
tags: techie,debugging,fiddler,http
comments: true
cover_image: bluebells.jpg

excerpt: "A few tips when using the Fiddler Http Debugging Tool"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

If you do any kind of [REST API](http://en.wikipedia.org/wiki/Representational_state_transfer) or web development there are some [really](https://developer.chrome.com/devtools/docs/network) [useful](chrome-extension://fdmmgilgnpjigdojojpjoooidkmcomcm/index.html) utilities to have in your toolbelt.

Today tips (currently just two, but may expand later) are about the excellent [Fiddler](http://www.telerik.com/fiddler) HTTP debugging tool.

# 1: Debugging localhost

Fiddler is great tool for seeing all the HTTP requests going through your system, however if you're only interested in debugging *something* in particular it can get quite *noisy*.

A simple way to remove the noise is to add a [filter](http://docs.telerik.com/fiddler/knowledgebase/filters) to the website of interest.  In this instance I'm only interested in [localhost](http://www.thinkgeek.com/product/5d6a/) <sup><a href="#ie-disclaimer">*</a></sup>: 

<a href="/images/posts/2014-06-04-add-localhost-filter-to-fiddler.png" title="How to configure localhost filter in Fiddler (click for enlarged version)">
<img class="img-center" src="/images/posts/2014-06-04-add-localhost-filter-to-fiddler.png" width="570" height="150" />
</a>

<p id="ie-disclaimer">
  Unless you're on <a href="http://fiddlerbook.com/fiddler/help/hookup.asp#Q-LocalTraffic">IE 8 or below</a> :blush:.
</p>

# 2: Mobile WebSite Testing

I also came across this little option under the **Rules > Performance > Simulate Modem speeds** menu in **Fiddler**:

<a href="/images/posts/2014-06-04-simulate-modem-speeds.png" title="Simulate Modem speeds option in Fiddler (click to enlarge)">
<img class="img-center" src="/images/posts/2014-06-04-simulate-modem-speeds.png" width="305" height="251" />
</a>

Now at first glance that doesn't seem useful in these days of <a href='http://www.plus.net/myreferrals/new.html?intReferrerID=00424573'>high-speed broadband</a>.  However, thinking further it could be useful for emulating slower/older mobile devices (kudos to <a href="https://twitter.com/grumpywizards">GrumpyWizards</a> for helping with this little leap).

Until next time!






