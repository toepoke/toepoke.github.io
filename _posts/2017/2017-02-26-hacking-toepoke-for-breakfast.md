---
layout: post

title: "Hacking toepoke for breakfast"
date: 2017-02-27 08:00:00
tags: [fun, office, tips, toepoke]
comments: false
cover_image: 2017-02-28-breakfast.jpg

excerpt: "breakfast, mmmm ..."

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  facebook: toepoke
  bio: Founder, Developer, tea maker
  image: fj.png
---

It's the last day of the week! The weekend is in sight. It's time for a Friday treat.  Butty day!

1. e-mail everyone on your butty list (_where's the list again?_)
2. Have them [fill out their order](https://docs.google.com/spreadsheets)
3. Check if the list is complete
4. Copy & paste the sheet to your phone so you can remember the order ...

All of this is sounding quite familiar <img src="/images/grin.png" alt="grin" title="grin" />

And yes [there more specialised websites](https://www.just-eat.co.uk/), but with a little tweaking we can reprovision [toepoke](https://toepoke.co.uk) to do our ordering, and take advantage of already having accounts setup.

# One time setup

## Create a regular butty run

First off let's [create our butty run](https://toepoke.co.uk/game.aspx/create). Here's some inspiration.

<a href="/images/posts/2017/2017-02-regular-breakfast-run-setup-recurring-order.png">
	<img class="img-center" src="/images/posts/2017/2017-02-regular-breakfast-run-setup-recurring-order.png" width="70%" alt="Creating your regular breakfast order with toepoke.co.uk" title="Creating your regular breakfast order with toepoke.co.uk" width="70%" />
</a>	

Note I've used the _15-a-side_ option to give us a big mailing list.  It doesn't really matter if only 5 people have butties ... we've just got some room for expansion later on.

Then we invite people to our sandwich round.  Remember you can use the _Squad Picker_ button if your regular football players are also consumers of sandwiches.

<a href="/images/posts/2017/2017-02-regular-breakfast-run-setup-invite-members.png">
	<img class="img-center" src="/images/posts/2017/2017-02-regular-breakfast-run-setup-invite-members.png" width="70%" alt="Invite your sandwich round" title="Invite your sandwich round" />
</a>	

## But, I _always_ have bacon on toasted granary with cherry tomatoes ...

90% of the time people tend to have the same butty #madeupstat.  So to handle the _I always have xyz ..._ scenario we can use the squad notes, but everyone needs to be a manager to do this.

Navigate to the squad screen (**my squads** &#8594; **your squad**) and tick on the _Manager_ option for everyone.  Whilst you're there paste the following into the notes column:

&nbsp;&nbsp;&nbsp;&nbsp;**&#9733;&#9733; Remember to put your regular order in the notes &#9733;&#9733;**

Then when you hit _Save_ your new butty member  (hereafter I'm going to call them _butters_) will be prompted to add their regular order.

<a href="/images/posts/2017/2017-02-regular-breakfast-run-prompt-for-a-regular-order.png">
	<img class="img-center" src="/images/posts/2017/2017-02-regular-breakfast-run-prompt-for-a-regular-order.png" width="70%" alt="e-mail prompt for a regular butty order" title="e-mail prompt for a regular butty order" />
</a>	

Once your _butters_ have set-up their regular order you should get something like this:

<a href="/images/posts/2017/2017-02-regular-breakfast-run-regular-orders.png">
	<img class="img-center" src="/images/posts/2017/2017-02-regular-breakfast-run-regular-orders.png" width="70%" alt="Preferred sandwich order" title="Preferred sandwich order" width="70%" />
</a>	

Your _butters_ can still change their regular order whenever they wish.  However they don't _have to_ have one.

# Weekly butty ordering

## Ordering your butty

[toepoke](https://toepoke.co.uk) will do it's normal thing of inviting your _butters_ each week to enter their order.

<a href="/images/posts/2017/2017-02-regular-breakfast-run-adding-my-order.png">
	<img class="img-center" src="/images/posts/2017/2017-02-regular-breakfast-run-adding-my-order.png" width="70%" alt="Adding my order" title="Adding my order" width="70%" />
</a>	

Don't want a sandwich this week?  Just put your status as **Not Playing**.

## Who's ordered what?

Once everyone has put their order in ([toepoke](https://toepoke.co.uk) will e-mail you once the [team-sheet](https://toepoke.co.uk/about.aspx/glossary#team-sheet) [reminder](https://toepoke.co.uk/about.aspx/glossary#reminder) goes out) you can simply export the orders:

<a id="team-sheet" href="/images/posts/2017/2017-02-regular-breakfast-run-extract-orders.png">
	<img class="img-center" src="/images/posts/2017/2017-02-regular-breakfast-run-extract-orders.png" width="70%" alt="Getting the orders" title="Getting the orders" width="70%" />
</a>

And get a nice little spreadsheet ready for e-mailing to your breakfast provider:

<a href="/images/posts/2017/2017-02-regular-breakfast-run-exported-orders.png">
	<img class="img-center" src="/images/posts/2017/2017-02-regular-breakfast-run-exported-orders.png" width="70%" alt="Excel showing butty orders" title="Excel showing butty orders" width="70%" />
</a>
 
Notice how the **Manager Note** field shows the _butters_ regular order and the **Match Note** shows their order for _this week_.

# Optional <strike>butter</strike> better steps

## Less reminders

[toepoke](https://toepoke.co.uk) uses reminders to increase the chance of a football match going ahead.  The level of e-mails for ordering butties on one day of the week is a little overkill.  Let's make things a little more reasonable.

If you navigate to your _squad template_ (**my squads** &#8594; **change template**), then select **My Timeline** you can tweak the reminders:

<a href="/images/posts/2017/2017-02-regular-breakfast-run-setup-relevant-reminders.png">
	<img class="img-center" src="/images/posts/2017/2017-02-regular-breakfast-run-setup-relevant-reminders.png" width="70%" alt="Tweaking reminders" title="Tweaking reminders" width="70%" />
</a>

Here I've:

* Disabled the _Send reminder_, _Deadline_, _Go ahead_ and _Next match booking_ reminders
* Changed all the reminders to the same day (Fryday ... gettit)
* Changed the time the reminders go out so:
  * We ask for butty orders at **7am**
  * We get the orders through at **8am** to phone them in

## Butty collector

There's usually some contention about who should collect the sandwiches. A simple rule of _who put their order in last_ can help with this.

Fortunately the <a href="#team-sheet">Team sheet</a> shows the order people put their butties in.

## Epilogue

Whilst [toepoke](https://toepoke.co.uk) wasn't designed for butty ordering, as we can see with a few tweaks   

