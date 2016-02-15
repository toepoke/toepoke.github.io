---
layout: post

title: "BETA: If this then that integration with toepoke.co.uk"
# subtitle: "What's in the box"
date: 2016-02-06 13:00:00
tags: [toepoke, feature, ifttt, beta]
comments: true
cover_image: you-got-mail.jpg

excerpt: "if this then that integration with toepoke.co.uk"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---

<style>
	table.ifttt-triggers th:nth-child(1), table.ifttt-triggers td:nth-child(1) {
		width: 25%;
	}
	table.ifttt-triggers th:nth-child(2), table.ifttt-triggers td:nth-child(2) {
		width: 50%;
	}
	table.ifttt-triggers th:nth-child(3), table.ifttt-triggers td:nth-child(3) {
		width: 25%;
	}
</style>

<p class="beta">
	ifttt integration is currently in closed <a href="https://en.wikipedia.org/wiki/Software_release_life_cycle#Open_and_closed_beta">beta</a> testing.
	This note will be removed once the feature is made available to all.
</p> 

# Introduction

If you're not aware of <a href="https://ifttt.com"><abbr title="If-This-Then-That">ifttt.com</abbr></a> (<i>where have you been!</i>)
it's a great little service for integrating the internet. You can do anything from 
<a href="https://ifttt.com/recipes/105786-share-new-links-you-post-on-facebook-to-twitter">cross post between facebook & twitter</a> to
<a href="https://ifttt.com/recipes/255028-enjoy-a-freshly-brewed-pot-of-coffee-when-you-wake-up">brew a cup of coffee when you wake up</a>.

## Ifttt Reminder Integration

We recently added the ability to link the ifttt <a href="https://ifttt.com/email">email channel</a> 
so it can be triggered from <a href="https://toepoke.co.uk/user.aspx/edit#extras" rel="nofollow">your profile</a>:

<img class="img-center" src="/images/posts/2016/2016-01-03-iftt-trigger-email-d.png" width="659" height="343" alt="Setting ifttt trigger e-mails" 
	title="Setting ifttt trigger e-mails" 
/>

This is a special e-mail address that tells ifttt to <strong>do something</strong>. 

We'll use your <i>trigger</i> e-mail address to send a copy of your toepoke e-mails to the ifttt trigger address (<i>trigger@recipe.ifttt.com</i>).
You'll still get the e-mails delivered to your <i>primary</i> and <i>secondary</i> e-mail addresses. 

Most importantly we'll send the e-mail as if it came from <strong>your</strong> e-mail address (<i>you@gmail.com</i> in this example).
This is essential so ifttt can find <u>your ifttt account</u> and apply the recipe to it. 


## Match Triggers

Whilst trying to organise your next match, [toepoke](https://toepoke.co.uk) will send an e-mail to _ifttt_ in the following circumstances:  

<table class="ifttt-triggers" id="ifttt-triggers">
	<thead>
		<tr>
			<th class="col1">#Tag keyword</th>
			<th class="col2">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>#invite</td>
			<td>Triggered when everyone is invited to the next match.</td>
		</tr>
		<tr>
			<td>#reminder</td>
			<td>Triggered when you're still short of players, reminds everyone places are still available.</td>
		</tr>
		<tr>
			<td>#player-cancel</td>
			<td>Triggered when someone drops out of the match (after the <i>deadline</i>).</td>
		</tr>
		<tr>
			<td>#new-player</td>
			<td>Triggered when someone puts their name down to play (after the <i>deadline</i>).</td>
		</tr>
		<tr>
			<td>#new-spot</td>
			<td>If you're on the bench, this is triggered if a place comes available (lets you know you might be playing after all!)</td>
		</tr>
		<tr>
			<td>#deadline</td>
			<td>Triggered when your match deadline is hit (this is where we advise players to drop out if they need to - otherwise we still have to pay for the pitch!)</td>
		</tr>
		<tr>
			<td>#manager-deadline</td>
			<td>Let's the <a href="https://toepoke.co.uk/about.aspx/glossary#manager">manager(s)</a> know when the deadline is reached, in case they need to cancel the match through lack of players.</td>
		</tr>
		<tr>
			<td>#teams</td>
			<td>Triggered when the teams have been picked.</td>
		</tr>
		<tr>
			<td>#no-teams</td>
			<td>Sent to the <a href="https://toepoke.co.uk/about.aspx/glossary#manager">management</a> when no teams have been selected (your players may start to think the match isn't going ahead)</td>
		</tr>
		<tr>
			<td>#match-cancel</td>
			<td>Triggered when a match has been cancelled.</td>
		</tr>
		<tr>
			<td>#match-resume</td>
			<td>Triggered when a match is back on (after previously being cancelled).</td>
		</tr>
		<tr>
			<td>#pitch-change</td>
			<td>Triggered when a pitch change has been made (change of venue for instance)</td>
		</tr>
		<tr>
			<td>#ratings</td>
			<td>Triggered after the match has finished, a reminder to put your goals down and pick your <a href="https://toepoke.co.uk/about.aspx/glossary#motm">Man of the Match</a> whilst it's fresh in your mind.</td>
		</tr>
	</tbody>
</table>  

The **#Tag keyword** is added to the subject of the e-mail we send through to _ifttt_.  This allows your _recipe_ to only respond to certain e-mails.

For instance if you want to add a _quick event_ to your [Google Calendar](https://calendar.google.com), but _only_ when the teams are sent out, you'd set your <strong>Tag</strong> as <strong>#teams</strong> in the <strong>Send IFTTT an email tagged</strong> section when setting up your recipe. 

<div class="g-chart">
<iframe width="560" height="480" src="https://www.youtube.com/embed/DQDo_zrcVNo" frameborder="0" allowfullscreen></iframe>
</div>
<p class="ar">
	<a href="https://ifttt.com/recipes/377415-toepoke-co-uk-add-a-quick-event-to-my-google-calendar-when-the-teams-have-been-picked">Install this recipe</a>
</p>


If you want to trigger all the [match triggers](#ifttt-triggers) you can use the #tag **gameweek**.

## Season Trigger

You can also use the **#seasons** #tag to trigger when your [season]({% post_url /2016/2016-02-06-seasons %}) finishes.

## Message Trigger

Finally, you can use the **#message** #tag for when a <a href="https://toepoke.co.uk/about.aspx/glossary#manager">manager</a> sends a custom e-mail about your game.

## Going Further

Of course, this is only the start of what you could do:

- <a href="https://ifttt.com/twitter">Tweet<a/> or <a href="https://ifttt.com/facebook">wall post</a> when the <strong>#invite</strong> is triggered - maybe your followers fancy playing? 
- Or, send yourself a <a href="https://ifttt.com/sms">text</a> notification when <strong>#player-cancel</strong> is triggered, so you know to make sure you have enough players.
- Even better [have notifications pushed to your mobile phone!]({% post_url /2016/2016-02-06-notifications-with-ifttt %})

Until next time!<br/>
Team TP.
