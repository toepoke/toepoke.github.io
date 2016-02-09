---
layout: post

title: "Typed lists in application configuration files"
# subtitle: "What's in the box"
date: 2014-07-30 17:00:00
tags: [techie-stuff, tips, development, c-sharp, configuration]
comments: true
cover_image: bluebells.jpg

excerpt: "Typed lists in application configuration files"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

Being able to read <a href="https://sites.google.com/site/craigandera/craigs-stuff/clr-workings/the-last-configuration-section-handler-i-ll-ever-need">.NET config files into typed classes</a> has been around for <a href="http://blog.codinghorror.com/the-last-configuration-section-handler/">ages</a>!

So why am I writing about it?  Good question! <img src="/images/smile.png" alt="smile" title="smile" />

An aspect of this which hasn't been well covered is when we have a list of configuration items we want to load.  We'll use this <a href="https://msdn.microsoft.com/en-us/library/1xtk877y.aspx">app.config</a> as an illustration:

{% highlight xml %}

  <Players type="Unit.Tests.XmlSerializerSectionHandler.Config.Players, Unit.Tests">

    <Player type="Unit.Tests.XmlSerializerSectionHandler.Config.Player, Unit.Tests">
      <FirstName>Homer</FirstName>
      <LastName>Simpson</LastName>
      <SupportsTeam>Leeds United</SupportsTeam>
    </Player>

    <Player type="Unit.Tests.XmlSerializerSectionHandler.Config.Player, Unit.Tests">
      <FirstName>Peter</FirstName>
      <LastName>Griffin</LastName>
      <SupportsTeam>Wales</SupportsTeam>
    </Player>

  </Players>

{% endhighlight %}

I won't go over the full explanation of how to use the **XmlSerializerSectionHandler** typed class as <a href="https://sites.google.com/site/craigandera/craigs-stuff/clr-workings/the-last-configuration-section-handler-i-ll-ever-need">Craig already does a great job</a>.  

Firstly we need some C# classes <a href="https://en.wikipedia.org/wiki/Visual_Basic_.NET">(other languages are available)</a> to represent our XML.  So in single form we have:

{% highlight c# %}
  public class Player {
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string SupportsTeam { get; set; }
  }
{% endhighlight %}

So far, so uninteresting.  The list form is thus:

{% highlight c# %}
  [XmlRoot("Players")]
  public class Players: List<Player> {

    public Players() {
      this.PlayerItems = new List<Player>();
    }

    [XmlElement("Player")]
    public List<Player> PlayerItems { get; set; }
  }
{% endhighlight %}

The **XmlRoot** declaration tells the framework this is the **List** version of the **Player** class.  The **PlayerItems** is a container for the content of the XML.  Finally ensure the **PlayerItems** object is created correctly in the constructor.

And that's basically it.  The full and unit tested version is <a href="https://github.com/toepoke/toepoke.github.io.code/blob/master/c#/Unit.Tests/XmlSerializerSectionHandler/XmlSerializerSectionHandler.cs">up on github</a>.

Hope this helps, until next time!

