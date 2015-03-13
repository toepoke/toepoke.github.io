---
layout: post

tumblr_url: http://toepoke.tumblr.com/post/43724103189/storing-external-config-files-under-appdata-i
title: "Config file storage in ASP.NET"
# subtitle: "What's in the box"
date: 2010-04-25 14:00:00
tags: [config, deployment]
comments: true
cover_image: cityscape.jpg

excerpt: "Storing external config files under App_Data in ASP.NET"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk 
  bio: Founder, Developer, tea maker
  image: fj.png
---

For quite a few years I’ve got into the habit of storing application config files externally to **web.config** using the **configSource** attribute, as I’m sure most people do.

Just to recap this means that you can have a set of development, test and live configuration files and just change your web.config to point to whatever environment you’re deploying to.  Advantage being that configuration like database connections which vary according to the environment they are deployed for are contained in an obvious folder like dev or test or live.

So in [toepoke](https://toepoke.co.uk) <blatantPlug/> I have something akin to the following:

webRoot\config\dev\dbConnections.config
webRoot\config\test\dbConnections.config

and on my dev box in my web.config I have:<br/>

<connectionStrings configSource=”config\dev\dbConnections.config” />

Nothing very new so far.  However, what I don’t like about this though is that the config folder is kind of in the middle of everything in the solution, coupled with the fact that toepoke is an MVC app, and I keep opening the Content folder instead ... which makes me swear ... lots ...

Now ASP.NET has a special folder called **App_Data** that has additional permissions when deployed so the content isn’t available by URL (so nasty people can’t get to it).  You use this for application data (funnily enough J) like a local database, or some XML lookup files you may have.

So (and you can probably guess where I’m going with this!) config files are application data, so it makes sense to put them into the App_Data folder and gain the extra protection it offers (granted .config files aren’t available though the URL either, so this is just additional protection).  So now the file structure looks like:<br/>

webRoot\App_Data\config\dev\dbConnections.config<br/>
webRoot\App_Data\config\test\dbConnections.config<br/>

and in the web.config:<br/>

<connectionStrings configSource=”App_Data\config\dev\dbConnection.config” />

Which I think just looks much, much neater.  And it all works, nothing more than a copy and paste and change some paths.

Hope this is useful to someone!


