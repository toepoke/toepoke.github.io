---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724059803/pretty-checkbox-and-rads-with-jqueryui
title: "Checked UI"
# subtitle: "What's in the box"
date: 2012-07-26 08:39:00
tags: [checkedUI, development, javascript, jquery, jquery-ui, techie-stuff]
comments: true
cover_image: cityscape.jpg

excerpt: "Pretty checkboxes and radio buttons with jQueryUI"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

One aspect of toepoke (there’s a few!) I’ve been unhappy with is the appearance of checkboxes by default:

&nbsp;&nbsp;&nbsp;<label for="remMe">Remember me?</label>  <input id="remMe" type="checkbox" />

Bit basic aren’t they?  Had a look around on google and whilst there’s some  [nice](http://aaronweyenberg.com/90/pretty-checkboxes-with-jquery) [examples](http://iwritecrappycode.wordpress.com/2012/03/01/jquery-ui-checkbox-better-feedback) and  [plug-ins](https://github.com/markwatkinson/pretty-checkboxes), they either  	don’t quite do what I’m after or involve additional image files.

As I’m already using [jQuery UI](http://jqueryui.com/) I really wanted something that took advantage of the built in [framework icons](http://jqueryui.com/docs/Theming/API#Icon_types) as they are already part of the page.

So inspired by [Checkbox-d](https://github.com/alextea/Checkbox-d) I’ve implemented my own variation (in retrospect should really have forked [Checkbox-d](https://github.com/alextea/Checkbox-d)) ... <strong>checkedUI</strong>.

Here's a quick Demo:

<iframe width="100%" height="550px" src="http://embed.plnkr.co/9YIayf/preview"></iframe>

Source is up on [Github](https://github.com/toepoke/checkedUI/)

Hope you find this useful too.


  
  


 
