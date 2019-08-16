---
layout: post

title: "So, how long was I at work yesterday ..."
date: 2018-08-04 08:00:00
tags: [tips]
comments: true
cover_image: time.jpg

excerpt: I work funny hours ...

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png 
---

I work *funny hours*; sometimes I finish work at 3, sometimes 4 and sometimes 6.  And I can never remember what hours I've worked.

Little tip to share that helps me remember.  This only works if you hibernate or log off your [Windows] PC on leaving work.

## Event Log

1. Open Event Viewer (**Start > Run EventVwr**)
2. Expand **Windows Logs**  
3. Right click on **System**, **Filter Current Log ...**
4. In **Event sources**: Copy+Paste "**Kernel-Power, Power-Troubleshooter**", then click **OK**
5. Right click on **System**, **Save Filter to Custom View...** and give it an appropriate name, e.g. **Log on and off times**

If you now expand **Custom Views** and select **Log on and off times** you'll see something like this:

<a href="/images/posts/2018/2018-08-log-on-and-off-times.png">
	<img class="img-center" src="/images/posts/2018/2018-08-log-on-and-off-times.png" alt="Windows Event viewer showing custom filter of log-on and off times" width="70%" />
</a>

- **Kernel-Power** tells you the time you slept or hibernated the computer.
- **Power-Troubleshooter** tells you when the computer work up.

## PowerShell

We can also get this information with [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/overview), in case, I dunno the Event Viewer decides to get corrupted and crash everytime you try and filter the results #truestory.

<p style="margin-left:1em; background-color:#012456; padding:1em; font-family:monospace; font-size:large;">
<span style="color:#a5cce3">Get-EventLog</span> 
<span style="color:#d89d68">-LogName</span>
<span style="color:#ad60de">System</span>
<span style="color:yellow">-Source</span> 
<span style="color:#ad60de">Microsoft-Windows-Power-Troubleshooter,Microsoft-Windows-Kernel-Power</span>
<span style="color:#d89d68">-After</span>
<span style="color:#a5cce3">(Get-Date)</span><span style="color:white">.AddDays</span>
<span style="color:#d89d68">(-5)</span>
</p>

Which will show log on and off times for the past week.  Tweak the <span style="background-color:#012456; font-family:monospace; padding-left:0.5em; padding-right:0.5em"><span style="color:#a5cce3">(Get-Date)</span><span style="color:white">.AddDays</span><span style="color:#d89d68">(-5)</span></span> setting for other date ranges.


<!-- Image credit -->
Cover image by <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@ederpozo?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Eder Pozo Pérez"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Eder Pozo Pérez</span></a>
<!-- Image credit -->

