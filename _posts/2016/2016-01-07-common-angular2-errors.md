---
layout: post

title: "Common Errors in Angular 2"
# subtitle: "What's in the box"
date: 2016-01-03 09:00:00
tags: [code, ag2]
comments: true
cover_image: startled-cat.jpg

excerpt: "Oh, how do you fix this one again ..."

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---

# Introduction

I've been getting up and running with [Angular 2](http://angular.io/) 
recently and on the whole I'm liking what I see.  Much, much better than [Angular 1](https://angularjs.org/) I must say!

As with any new framework there's that period where you keep making the same error, [do some research](https://google.co.uk), 
fix it, do the same thing again 2 hours later ... rinse and repeat.

So to help you do reader (and frankly, me) I've been jotting down some common errors I keep seeing
and document the fixes.  

I'll expand as I see more.  Found some too?  Add in the comments and I'll update the post.

<hr class="fancy"/>
## "Can't bind to 'ngForIn' since it isn't a known native property in X"

### Problem
You have something like this:

{% highlight html %}
<ul>
	<li *ngFor="var i in _items">
		<li>{{i.task}}</li>
		<li>{{i.completed}}</li>
	</li>
</ul>
{% endhighlight %}

### Fix

You're a C# developer aren't you?<br/>
Simply change "**in**" to "**of**" and you're sorted <img src="/images/smile.png" alt="smile" title="smile" />. 

{% highlight html %}
<ul>
	<li *ngFor="var i of _items">
		<li>{{i.task}}</li>
		<li>{{i.completed}}</li>
	</li>
</ul>
{% endhighlight %}

<hr class="fancy"/>
## "No provider for ConnectionBackend"

Love this one!

### Problem

When injecting **Http** as a dependency (or at least via [TypeScript](http://www.typescriptlang.org/)
you may use something like this:

{% highlight javascript %}
@Injectable()
export class ToDoService {
	_http: Http = null;
	
	constructor(http: Http) {
		this._http = http;		
	}
	// some more stuff ...
}
{% endhighlight %}

### Fix

Like you would with pretty much any other dependency.  As you've found (hey, you're reading this article!)
it doesn't work.  Try this instead:

{% highlight javascript %}
@Injectable()
export class ToDoService {
	public _http: Http = null;
	
	constructor() {
		let injector = Injector.resolveAndCreate([
			HTTP_PROVIDERS
		]);
		this._http = injector.get(Http);
	}
	// some more stuff ...
}
	
{% endhighlight %}

<hr class="fancy"/>
## Component doesn't appear ... _but no errors_

The number of times this one has hit me!

### Problem

 - Child component doesn't render
 - No errors in the developer console
 - What gives?

### Fix

Most likely you've neglected to add the child component references to the **directives** declaration. 


<hr class="fancy"/>
## "Component **X** has no route config"

### Problem

This ocurred when I was traversing from one component (**TodoList**) to another (**TodoEdit**).  Here's the code from **TodoList** I'm travelling _from_.

{% highlight javascript %}
	openEdit(todo: ToDo) {
		this._router.navigate([
			"ToDoEdit", {id: todo.id}
		]);
	}	 
{% endhighlight %}

But the error was _Component **ListPage** has no route config_ - **ListPage** being the component I'm travelling _from_.

### Fix

The error was indeed to do with my **@RouteConfig** but had nothing to do with **ListPage**.  It was the component being travelled _to_ which was the problem, **ToDoEdit**.

Instead of **ToDoEdit**, I had **TodoEdit** defined in my **@RouteConfig**:

{% highlight javascript %}
@RouteConfig([
	{ path: "/", name: "Root", redirectTo: ["List"] },
	{ path: "/list", name: "List", component: ListPage},
	{ path: "/edit/:id", name: "TodoEdit", component: ToDoEdit }
])
{% endhighlight %}

Lesson here is, check the case of your route configuration <img src="/images/smile.png" alt="smile" title="smile" />


<hr class="fancy"/>
# Epilogue

Granted there aren't many here.  I fully intend to screw up even more than usual and add further findings
<img src="/images/grin.png" alt="grin" title="grin" />.

<hr class="fancy"/>
