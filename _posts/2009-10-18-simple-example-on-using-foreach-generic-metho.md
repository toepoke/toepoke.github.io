---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724104306/simple-example-on-using-foreach-generic-metho
title: "ForEach and generics in C#"
# subtitle: "What's in the box"
date: 2009-10-18 22:10:00
tags: [c-sharp, code, generics]
comments: true
cover_image: trees-sunlight.jpg

excerpt: "Simple example on using ForEach generic method"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

Working on [toepoke](https://toepoke.co.uk) today and I wanted to loop through a list of objects and sync up some properties, so I started off by looping through a normal foreach construct. I vaguely remember there was a ForEach method hanging off the intellisense for list objects, so a quick [google](http://google.com) revealed … not much - granted I didn't do a extensive search … I'm very much in the _Not on the first page ... I'll figure it out myself!_ camp ;D 

Anyway seems like a good opportunity for a blog. We'll just use a nice simple **Person** object with the following properties for illustration:

* **Name** - useful for seeing what's going on
* **DOB** - which we'll generate when create a list of Person
* **Age** - which is the property we're going to loop around and calculate.

Which gives us the following noddy class:

{% highlight c# %}
public class Person {
  public string Name { get; set; }
  public DateTime DOB { get; set; }
  public int Age { get; set; }
}
{% endhighlight %}

We're going to drive this example through a unit test (see full exert below), but I'll just concentrate on the relevant bits here.  So next up let's populate a list of people to create our test data.

{% highlight c# %}
List<Person> people = new List<Person>() {
  new Person() { 
    Name = "Fred Flintstone", 
    DOB = DateTime.Now.AddYears(-65); 
  },
  new Person() { 
    Name = "Homer Simpson", 
    DOB = DateTime.Now.AddYears(-40); 
  }
}
{% endhighlight %}

Simple enough, couple of cases, one aged 65, the other aged 40.  Our simple **ForEach** will loop through and work out the age of each instance.  To do this we'll just take the DOB away from the current time to delivery the number of years.  The **ForEach** method is simply a delegate (which in essence is just a function) which may or may not take any arguments.  Ours isn't taking any arguments (it's a simple example after all :-)).  The looks like this:

{% highlight c# %}
people.ForEach(
  p => {
    p.Age = (DateTime.Now - p.DOB).TotalYears();
  }
);
{% endhighlight %}

Now we're working against a list of type **Person** which is the person => bit.  The right hand side inside the curly brackets is in basically a method created on the fly for the purposes of the **ForEach** method. 

So in essence the above is saying _for each person in the list of person set the age to the total number of years between the person's date of birth and now_.  Doesn't look to scary now does it :-)?

The more observant of you will have noticed that **TotalYears** doesn't exist in a **TimeSpan** object.  And you'd be absolutely correct; sadly the **TimeSpan** object doesn't provide a **TotalYears** method because it's quite complex to work out due to leap years and … erm … other stuff that's hard to work out ;-).  So to help out with our example, it's time for a little extension method on the **TimeSpan** class:

{% highlight c# %}
public static class TimeSpan_Extensions {
	/// <summary>
	/// This method is for demonstration purposes only.
	/// I _do_not_ recommend using this method for any production code whatsoever; I will guarantee bugs!
	/// </summary>
  public static int TotalYears(this TimeSpan ts) {
		return (int) ts.TotalDays / 365;
	}
}
{% endhighlight %}

**I would recommend you don't use that method for any production code whatsoever, I will guarantee bugs!  But it's perfect for our purposes.  Hopefully you've found this useful, and the full source is posted below, good luck and good searching.**
