---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724086506/capitalise-text-inputs-with-css
title: "Capitalise text inputs with css"
# subtitle: "What's in the box"
date: 2010-12-12 12:31:00
tags: css, code, development, techie-stuff
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

When I was build the sign-up screen for [toepoke](http://toepoke.co.uk/) I wanted to tidy up the data entry for the player's name so you get capitalised names.

My first thought was to tie into the jQuery focus event and do a little JavaScript once the user left the input field.

Thankfully I thought a little bit more and remembered the [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) property in <abbr title="Cascading Style Sheet">CSS</abbr>, and wondered if this would work against text input fields as well as heading and paragraph tags, etc.

{% highlight css %}
.tcase {
    text-transform: capitalize;
}
{% endhighlight %}

Turns out it works quite well, and the above works under most of the modern browsers.  Tested and works in Chrome 7,IE 8, FF 3.6, Safari 5, but sadly not Opera 10.  Of course the text-transform property is an aesthetic effect, so I can live with it not working in Opera. 

<img src="/images/posts/2010-12-12-capitalise-text-inputs-with-css.png" alt="" />

Also bear in mind if the user enters their name in lowercase, their name will be in lowercase when the form is posted to the server, so you'll still need to capitalise on the server-side.  Something like the following C# string extension should do the trick. (or see [totitle](http://msdn.microsoft.com/en-us/library/system.globalization.textinfo.totitle) ... as kindly pointed at by Maarten van der Lee below):

{% highlight c# %}
     /// <summary>
    /// Converts the input string into an initial version, so “fred” or “FRED” becomes “Fred”
    /// </summary>
    /// <param name=”input”></param>
    /// <returns></returns>
    public static string ToInitial(this string input)
    {
        if (string.IsNullOrEmpty(input))
            return “”;
        return 
            input.FirstOrDefault().ToString().ToUpper() +
            input.Substring(1).ToLower();
    }
{% endhighlight %}

You can see the above in action on our [sign-up page](http://toepoke.co.uk/user.aspx/create). Naturally this can be extended to use the uppercase and lowercase text-transform rules (uppercase is quite useful for postcodes too).

Hope this proves useful for someone.

