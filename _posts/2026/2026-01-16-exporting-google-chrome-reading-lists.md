---
layout: post

title: "Exporting Google Chrome reading lists..."
date: 2026-01-16 04:00:00
tags: [techie-stuff]
comments: false
cover_image: young-man-working-on-his-macbook-pro-laptop-and-iphone-6-mockup-resized.png


excerpt: I have "lots" of things in my reading list ...

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  facebook: toepoke
  bio: Founder, Developer, tea maker
  image: fj.png
---

# Introduction

As I'm sure many of us do, I spend far too of my evenings catching up on news, sports & tech on my mobile.

And whilst there's a awful lots of dross out there, on occasion I'll find the odd gem worth [bookmarking](https://tagpacker.com/) later.

Bookmarking on mobile is painful so I'll add to my [reading list](https://www.howtogeek.com/719357/what-is-the-chrome-reading-list-and-how-to-use-it/) and sort it out later on my laptop.

_Later_ invariably ends up being a year later, and results in 200+ items in my reading list 😲!

# [Trying] to export my Reading List

Okay, so we've got 200 items in our reading list.  No problem, we'll just export them out like we do with [mobile] bookmarks and import them into our [remote bookmarking service](https://tagpacker.com/) 👍🏻.

How often seemingly simple things turn out not to be so simple 😔.

It turns out there's no _direct_ export facilty in Google Chrome.  Okay, no worries, let's just use [Google Takeout](https://takeout.google.com/), yeah!

It's really easy to use and after a time I've got my _reading list.html_ exported, yeah!

And then I opened it 🥹.

> [Your data is encrypted and cannot be exported](https://support.google.com/chrome/thread/112458968/takeout-bookmarks-your-data-is-encrypted-and-cannot-be-exported?hl=en)

It turns out that several years ago I turned on [passphrase encryption](https://support.google.com/chrome/answer/165139?hl=en-GB&co=GENIE.Platform%3DDesktop#passphrase) for synced data.

Now I could turn off the encryption, export the reading list using takeout, and then turn encryption back on.  Bit of a faff, and as regulars to [toepoke](https://toepoke.co.uk) know, we're all about losing the faff! 😁

# Finally!

Sadly Chrome doesn't store the reading list in a nice folder structure on your local machine.  However it _does_ expose them internally.

1. Open a new tab
1. Navigate to **chrome://sync-internals/**
1. Click the **Search** tab
1. Search for **Reading**

This will show the results of all the items in your 

<figure>
	<img class="img-center" src="/images/posts/2026/2026-01-16-reading-list-search-results.jpg" alt="Reading list search results" width="50%" />
	<figcaption>200+ wasn't too far off! 😁</figcaption>
</figure>

This is where it gets a bit funky!

1. Open **DevTools** (CTRL+SHIFT+J in Windows)
1. Paste the code below into the **Console** window
    > Chrome may disallow this (which is a _"good thing"_) and ask you to enter _"ALLOW PASTING"_ or something to that effect.
1. The snippet will extract all the links and write them to the console, and copy the output to the clipboard.

You've now go your reading list exported, yeah!

## Snippet to extract reading list

Either paste the following into the console window, or save for future reference as a _snippet_.

```` JS
var output = "";
var list = document.querySelectorAll("#sync-results-list li");

output = "<!DOCTYPE NETSCAPE-Bookmark-file-1>";
output += '<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">';
output += '<TITLE>Reading list export</TITLE><H1>Reading list export</H1>';


list.forEach (li => {
    output += "<a href='" + li.innerText + "'>" + li.innerText + "</a><br/>\n";
});

output += "";

console.clear();
console.log(output);
copy(output);
````

# Importing into TagPacker

I've used [tagpacker](https://tagpacker.com/) since Google killed off [Google Bookmarks](https://en.wikipedia.org/wiki/Google_Bookmarks) 😡.

Whilst TagPacker has an [API](https://tagpacker.com/api) we could use to add our reading list items, it's a bit of an overkill.  Besides we don't have any metadata in our export to use to tag our links sensibly.

Instead we can simply import the links directly and tag them manually:

1. Open your [tagpacker account](https://tagpacker.com/account/account)
1. Click **Import Links**
1. Click **Upload File**
1. Click **Start Import**
    > You can add a tag to the import so you can find them later and better tag each article.  Alternatively they'll end up in your **Uncategorised** pot.

# Conclusion

Congratulations you've now [finally!] imported your reading list into tagpacker!

Just got tag up 234 new bookmarks now ... 😭


