---
layout: post

title: "Not so secret questions"
# subtitle: "Couple of tips when using Fiddler"
date: 2014-06-10 08:00:00
tags: [security, techie, tips]
comments: true
cover_image: locks.jpg

excerpt: "Security questions aren't so secret anymore"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---

A short post on my continuing series about [improving your online security]({% post_url /2014/2014-06-07-living-with-a-password-manager-in-the-real-world %}).

Bank online?  Does this ring any bells?


<form role="form" style="margin: 10px; padding: 10px; font-size: small;border: solid 1px silver;">
  <fieldset>
  <legend>Your Bank (inc.)</legend>
  <div class="form-group">
    <label for="exampleInputEmail1">Username (or e-mail)</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter username (or e-mail)">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><strong>5th</strong> letter of password</label>
    <select class="form-control">
			<option>*</option>
			<option>a</option>
			<option>b</option>
			<option>...</option>
			<option>z</option>
			<option>0</option>
			<option>1</option>
			<option>...</option>
			<option>9</option>
		</select>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><strong>9th</strong> letter of password</label>
    <select class="form-control">
			<option>*</option>
			<option>a</option>
			<option>b</option>
			<option>...</option>
			<option>z</option>
			<option>0</option>
			<option>1</option>
			<option>...</option>
			<option>9</option>
		</select>

  </div>
  <div class="form-group">
    <label for="sec1">Where were you born?</label>
    <input class="form-control" type="password" id="sec1" value="In a barn, so my mum says!">
  </div>
  <div class="form-group">
    <label for="sec2">What was the name of your first pet?</label>
    <input class="form-control" type="password" id="sec2" value="Goldie the goldfish">
  </div>
  <div class="form-group">
    <label for="sec3">What did you have for breakfast a week last Wednesday?</label>
    <input class="form-control" type="password" id="sec3" value="Bacon sarnie and brown sauce ... magic!">
  </div>
	</fieldset>
</form>

Before the internet become mainstream [security questions](https://en.wikipedia.org/wiki/Security_question) like **Where were you born** and **What was the name of your first pet** were a perfectly fine way of gaining confidence you are who you say you are.

However, with the [rise](https://facebook.com/toepoke) and [rise](https://twitter.com/toepoke_co_uk) of social media I believe they're becoming a frail means of [authentication](https://en.wikipedia.org/wiki/Authentication).

_You_ might be very careful with [what you share](http://mashable.com/2013/07/09/facebook-privacy-how-to/), on social media, but you have little control over what your friends share, and [their friends share](http://gizmodo.com/5882027/sharing-with-friends-of-friends-on-facebook-exposes-you-to-150000-people).

There is a saving grace however.  Those little questions are basically just more passwords.  There's no reason why you can't just put something completely unrelated there.

If you've been following [my experiment with KeePass]({% post_url /2014/2014-06-07-living-with-a-password-manager-in-the-real-world %}) you might be interested to know that you can store additional data alongside your bank login details.  

I would suggest using the KeePass random password generator to create a difficult to guess (actually nigh on impossible!) word to use for your _secret answer_.  Simple use the **Tools &gt; Generate Password** and save it alongside your **KeePass** login credentials for the website.

Of course if you need to telephone your bank, you may find it difficult to explain your first pet was called **ZAVFzD8ebAYjqbSnae7n** :wink:

## Related articles
- [Password Managers in the real-world]({% post_url /2014/2014-06-07-living-with-a-password-manager-in-the-real-world %})
- [KeePass Windows installation]({% post_url /2014/2014-06-10-keepass-installation-part-1-desktop %})
- [KeyPass Android Mobile installation]({% post_url /2014/2014-06-10-keepass-installation-part-2-android-mobile %})
