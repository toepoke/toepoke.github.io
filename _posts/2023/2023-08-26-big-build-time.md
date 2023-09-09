---
layout: post

title: "Big build time ..."
date: 2023-09-09 07:00:00
tags: [feature,toepoke,release]
comments: false
cover_image: young-man-working-on-his-macbook-pro-laptop-and-iphone-6-mockup-resized.png

excerpt: It's been a while ...

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  facebook: toepoke
  bio: Founder, Developer, tea maker
  image: fj.png
---

It's been [quite a while](https://toepoke.co.uk/about.aspx/release-notes/1/2/0031) since the last set of changes were released, February 2020 in fact.  I wanted to give some background as to why it's been _so long_.

You may notice [some significance with that date](https://www.theguardian.com/world/2020/jun/01/spate-of-possible-uk-coronavirus-cases-from-2019-come-to-light).  The world locked down and [remote working increased](https://www.theguardian.com/technology/2020/mar/13/covid-19-could-cause-permanent-shift-towards-home-working).

[I](http://franzjunge.com/) too started working remotely and with a two hour commute out of the way came the opportunity to reflect on where [toepoke](https//toepoke.co.uk) was, and where it should go.

## History

[toepoke](https://toepoke.co.uk) started life as a [spreadsheet](https://toepoke.co.uk/about.aspx/history) to try an organise 10 people meeting at the same place, same time, every week for a game of football.  A task that's always struck me as much harder than it should be!

A few years into [changing roles](https://en.wikipedia.org/wiki/Web_development) it became apparent that spreadsheet should be a website.

## The Perils of Prototyping

My approach was to build a [Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product) to quickly see if it was feasible to organise a group of people, just using e-mail.  After all there's little point investigating huge amounts of time to find it doesn't work.

Even with this minimal approach it was still 3 years of [spare time] working to create that [first beta version](https://toepoke.co.uk/about.aspx/release-notes/1/0/0).

The _theory_ of creating a [prototype](https://en.wikipedia.org/wiki/Prototype) is you establish the _thing_ works by focusing on completion rather than quality.  Once you've proved the concept you throw the [prototype](https://en.wikipedia.org/wiki/Prototype) away and start again.  This time focussing on the quality (you can see where this is going 😉)!

Cut to **13 years** later and it's still running on that original code base, albeit with _lots_
of [stuff](https://toepoke.co.uk/about.aspx/release-notes) added over those years!


## Moving to the Cloud

It's been a long term goal to move the website to the [cloud](https://azure.microsoft.com/) and it quickly became apparent the current architecture wasn't going to cut it.  

30 seconds to load the [dashboard](https://toepoke.co.uk/permalink.aspx) anyone? 😲

Clearly not feasible.  In addition the codebase was becoming increasingly challenging to work with.  It was time to pay off the last decade of [technical debt](https://en.wikipedia.org/wiki/Technical_debt).


## Starting again ...

A [rewrite](https://www.method.com/insights/when-to-do-a-software-rewrite/) is [rarely the answer](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/) but the reasons to do so were stacking up:

1. Increasingly difficult to change.  Even simple changes took a disproportionate amount of time.
2. Lack of automated testing.
3. [High coupling](https://en.wikipedia.org/wiki/Coupling_\(computer_programming\)) bringing high risks of one change impacting the site elsewhere.
4. [Key](https://medium.com/codex/is-net-framework-dead-and-what-is-its-future-958cc04311a5) [components](https://learn.microsoft.com/en-us/visualstudio/data-tools/linq-to-sql-tools-in-visual-studio2?view=vs-2022) coming towards end of life.
5. [Newer tools](https://github.com/dotnet/core) and [technologies](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios) we couldn't take advantage of.

## New architecture

Not entirely sure _architecture_ is the right word, but for the geeks amongst you, here's how it's now organised:

- [CQRS](https://martinfowler.com/bliki/CQRS.html) approach throughout.
	- Every request has its own handler.
	- Every response has its own handler.
	- In total, there's _97_ of them, which gives you an idea how much is going on under the hood!
- [Views](https://www.sqlshack.com/sql-view-a-complete-introduction-and-walk-through/) for reads.
- [Stored procedures](https://www.sqlshack.com/sql-server-stored-procedures-for-beginners/) for writes.

CQRS enables simpler [unit testing](https://learn.microsoft.com/en-us/visualstudio/test/unit-test-basics?view=vs-2022), and whilst a little _old school_, views and stored procs allow much better isolation of functionality allowing us to do appropriate work _nearer_ the database (i.e. less _chattiness_).

If there was one improvement I wanted to bring, it was improving the test coverage:

- 3,641 [unit tests](https://learn.microsoft.com/en-us/visualstudio/test/unit-test-basics?view=vs-2022)
- 1,001 [integration tests](https://www.techtarget.com/searchsoftwarequality/definition/integration-testing)
- 1,032 [database tests](https://tsqlt.org/)
- 55 [PowerShell tests](https://pester.dev/docs/quick-start)

Does this mean the end of bugs?  Not at all, but it does decrease the risk of introducing [regressions](https://en.wikipedia.org/wiki/Software_regression) and encourages more a rounded implementation of features.

As well as test coverage I also wanted to improve the data access.  The [existing approach](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql/linq/) was very _chatty_ and, prevented any chance of [a move](#moving-to-the-cloud).

<figure>
	<img class="img-center" src="/images/posts/2023/2023-08-26-refactor-performance.png" alt="Performance comparison between version 1.2.0031 and 2.0.0000" width="70%" />
	<figcaption>Web request timings - lower is better</figcaption>
</figure>

Very happy with how that has turned out 🙂.

# Closing

So what does all this mean for us organising our games of football?  In short, not much, the same [marmite](https://www.marmite.co.uk/) design
remains, all of the above changes are behind the scenes.

<figure>
	<img class="img-center" src="/images/posts/2023/2023-09-02-deleting-legacy-code.png" alt="Goodbye version 1!" width="50%" />
	<figcaption>Yes, that's literally the whole prototype ... gone ...</figcaption>
</figure>

One thing you may notice (ironically given what I've said above!) are bugs!  It's very difficult to change _everything_ without issues slipping through.  If you 
see something you don't think looks right, please [let us know](https://toepoke.co.uk/about.aspx/contact).


