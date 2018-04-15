---
layout: post

title: "Microsoft Azure Key Vaults with Dot Net 4.5"
date: 2018-04-14 08:00:00
tags: [azure]
comments: true
cover_image: clouds.jpg
excerpt: "Using Azure Key Vault under Dot Net 4.5 ...."

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png 
---

Today we're going to look at using the [Azure Key Vault](https://azure.microsoft.com/en-gb/services/key-vault/) to store sensitive data securely in Azure, when using the traditional Dot Net framework.

If you're using .NET Core [it's seems fairly straight forward](https://aspnetmonsters.com/2017/10/monsters-weekly/ep107/).  However the story for traditional .NET a little more problematic.  Problematic enough to warrant sharing the story.

<blockquote class="blockquote">
	&ldquo;Why not just Dot Net Core if it's easier?&rdquo;
</blockquote>

Fair question :smile:.

[My little website](https://toepoke.co.uk) is currently running on .NET 4.5.  Whilst I'd like to move to .NET Core that's a long term plan.  The medium term plan is to move to Azure for the increased scalability it brings.

Currently I encrypt the web.config file (because #security) and my research suggests that this won't cut it under Azure.  Whilst it *does work*, as soon as you try and scale up/down the website it fails.  

I presume scaling means, in essence, moving to a new machine (or VM) with a different configuration (even though I've stipulated a machineKey setting).  Anywho it doesn't work :frowning:.  Hence looking at [Key Vaults](https://azure.microsoft.com/en-gb/services/key-vault/) as it's outside the web application and shouldn't suffer the problems when scaling.

# Demo App

I've put together a stripped down demo application on [Github](https://github.com/toepoke/KeyVault.Demo) you can follow along with.

I'll be referring to that codebase throughout so you may want to go ahead and [clone it](https://github.com/toepoke/KeyVault.Demo.git).

It's deliberately cut down to just a Web API and nothing else so don't be surprised that it's a little ... sparse!

## Key Vault with .NET 4.5.2

A couple of quick notes about adding the key vault dependencies to an existing application.  The following steps have already been applied to the [demo app](https://github.com/toepoke/KeyVault.Demo).

You'll need to install the following packages via nuget:

<ul class="info" style="list-style-type:none">
	<li>Install-Package Microsoft.IdentityModel.Clients.ActiveDirectory</li>
	<li>Install-Package Microsoft.Azure.KeyVault</li>
</ul>

Your application needs to be at least .NET 4.5.2 otherwise you'll get this error message when you try and install **Microsoft.Azure.KeyVault**.

<p class="beta">
	Install-Package : Could not install package 'Microsoft.Azure.KeyVault 2.3.2'. You are trying to install this package into 
	a project that targets '.NETFramework,Version=v4.5', but the package does not contain any assembly references or content 
	files that are compatible with that framework. For more information, contact the package author.	
</p>

# Azure Setup

Azure is a fast moving platform so I'm just listing the steps you need to go through.  Far easier to update in the future than screenshots!

## Resource Group

We'll use a separate resource group to make it easier to rip down and restart if need be.

Select **Resource Groups** &#187; **Add**<br/>
<dl class="dl-horizontal">
	<dt>Resource Group Name:</dt>
	<dd><span class="data-field">RG-KeyVaultDemo</span></dd>
	<dt>Subscription:</dt>
	<dd><span class="data-field">&#171; Your Subscription &#187;</span></dd>
	<dt>Resource Group Location:</dt>
	<dd><span class="data-field">UK South</span> <span class="footnote">(or somewhere else)</span></dd>
</dl>

## Key Vault setup

Next up we create the Key Vault itself.

### Create the Key Vault
Select **Key vaults** &#187; **Add**<br/>

<dl class="dl-horizontal">
	<dt>Name</dt>
	<dd><span class="data-field">KV-TOEPOKE</span></dd>
	<dt>Subscription:</dt>
	<dd><span class="data-field">&#171; Your Subscription &#187;</span></dd>
	<dt>Resource Group (use existing)</dt>
	<dd><span class="data-field">RG-KeyVaultDemo</span></dd>
	<dt>Location</dt>
	<dd><span class="data-field">UK South</span> <span class="footnote">(or wherever you fancy)</span></dd>
	<dt>Pricing tier</dt>
	<dd><span class="data-field">Standard</span> <span class="footnote">(yes, key vaults do cost <a href="https://azure.microsoft.com/en-gb/pricing/details/key-vault/">some money</a>)</span></dd>
	<dt>Access policies</dt>
	<dd><span class="data-field">&#171; Select as applicable &#187;</span></dd>
</dl>
And then click **Create**.

Next up we'll add the data we want to stay private.

### Create the USERNAME key
Select **Key vaults** &#187; **KV-TOEPOKE** &#187; **Secrets** &#187; **Generate/Import**<br/>
<dl class="dl-horizontal">
	<dt>Upload options</dt>
	<dd><span class="data-field">Manual</span></dd>
	<dt>Name</dt>
	<dd><span class="data-field">USERNAME</span></dd>
	<dt>Value</dt>
	<dd><span class="data-field">&#171; Your secret your want to keep &#187;</span></dd>
	<dt>Content type (optional)</dt>
	<dd><span class="data-field">&#171; blank &#187;</span></dd>
	<dt>Set activation date?</dt>
	<dd><span class="data-field">&#171; blank &#187;</span></dd>
	<dt>Set expiration date?</dt>
	<dd><span class="data-field">&#171; blank &#187;</span></dd>
	<dt>Enabled</dt>
	<dd><span class="data-field">Yes</span></dd>
</dl>
And click **Create**.
- Click through on the **USERNAME** secret, then click on **CURRENT VERSION**.
- Here you'll see the **Secret Identifier** - **https://kv-toepoke.vault.azure.net/secrets/USERNAME/somebigfatlongguid**
- Copy the **https://kv-toepoke.vault.azure.net/secrets/USERNAME/** part to the clipboard
- Paste into the <span class="data-field">UsernameSecretIdentifier</span> in <span class="data-field">appSettings.config</span>

### Create the PASSWORD key
Select **Key vaults** &#187; **KV-TOEPOKE** &#187; **Secrets** &#187; **Generate/Import**<br/>
<dl class="dl-horizontal">
	<dt>Upload options</dt>
	<dd><span class="data-field">Manual</span></dd>
	<dt>Name</dt>
	<dd><span class="data-field">PASSWORD</span></dd>
	<dt>Value</dt>
	<dd><span class="data-field">&#171; Your password you want to store &#187;</span></dd>
	<dt>Content type (optional)</dt>
	<dd><span class="data-field">&#171; blank &#187;</span></dd>
	<dt>Set activation date?</dt>
	<dd><span class="data-field">&#171; blank &#187;</span></dd>
	<dt>Set expiration date?</dt>
	<dd><span class="data-field">&#171; blank &#187;</span></dd>
	<dt>Enabled</dt>
	<dd><span class="data-field">Yes</span></dd>
</dl>
And click **Create**.
- Click through on the **PASSWORD** secret, then click on **CURRENT VERSION**.
- Here you'll see the **Secret Identifier** - **https://kv-toepoke.vault.azure.net/secrets/PASSWORD/somebigfatlongguid**
- Copy the **https://kv-toepoke.vault.azure.net/secrets/PASSWORD/** part to the clipboard
- Paste into the <span class="data-field">PasswordSecretIdentifier</span> in <span class="data-field">appSettings.config</span>

## Azure Active Directory setup

With our vault and our secrets set-up we can go ahead and read our data?  Not as simple as that as we don't want anyone to be able to access our secret, only an application we authorise.  We do this through Azure Active Directory.
<p class="info">
	Before we start it's worth pointing out that you <u>don't need to deploy your web app or API to Azure</u> in order to access the Key Vault.
</p>

### Application Registration

Select **Azure Active Directory** &#187; **App registrations** &#187; **New application registration**

<dl class="dl-horizontal">
	<dt>Name</dt>
	<dd><span class="data-field">AD-TOEPOKE</span></dd>
	<dt>Application type</dt>
	<dd><span class="data-field">Web app / API</span></dd>
	<dt>Sign-on URL</dt>
	<dd><span class="data-field">https://example.com</span></dd>
</dl>
<p class="footnote">
	<strong>Sign-on URL</strong> is used for signing into your website via <a href="https://azure.microsoft.com/en-gb/services/active-directory/">Azure Active Directory</a>, which we aren't going to use so you can enter any valid URL here.
</p>

<p>
	On saving the <span class="data-field">AD-TOEPOKE</span> <strong>App registration</strong> you'll be allocated a Guid in the <strong>Application ID</strong> field.  Add this to the <span class="data-field">ClientID</span> in <span class="data-field">appSettings.config</span> file of the sample application.
</p>

<p>
	Whilst on the confirmation screen, click the <strong>Settings</strong> option and then <strong>Keys</strong>.
</p>
<dl class="dl-horizontal">
	<dt>Description</dt>
	<dd><span class="data-field">AD-TOEPOKE-KEY</span></dd>
	<dt>Duration</dt>
	<dd><span class="data-field">Never Expires</span></dd>
	<dt>Value</dt>
	<dd><span class="data-field">&#171; Leave blank &#187;</span></dd>
</dl>
Click **Save** and you'll see the <span class="data-field">Value</span> field is populated with an encoded string.  Paste this into the <span class="data-field">ClientSecret</span> field in <span class="data-field">appSettings.config</span> file of the sample application.

<p class="info">
	It's very important you take a note of the <strong>Value</strong> now as once you navigate from the blade in the Azure portal it's no longer available.  Indeed if you navigate to the <strong>Keys</strong> blade later the <strong>Value</strong> field simply says <strong>Hidden</strong>.
<br/>
<br/>
	If you <i>do</i> navigate away without noting the <strong>Value</strong>, simply delete the key and create a fresh one.
</p>


### Linking the Key Vault to Azure Active Directory

So we've created a [Vault](#key-vault-setup) for storing our secrets and defined an [Application](#application-registration) for asking for the secrets in the vault.  So now we need to tell the vault that our application has permission to access the vault.

Select **Key Vaults** &#187; **KV-TOEPOKE** &#187; **Access policies** &#187; **Add new**
<dl class="dl-horizontal">
	<dt>Configure from template (optional)</dt>
	<dd><span class="data-field">&#171; blank &#187;</span></dd>
	<dt>Select principal</dt>
	<dd><span class="data-field">AD-TOEPOKE</span></dd>
	<dt>Key permissions</dt>
	<dd><span class="data-field">Get &amp; List</span></dd>
	<dt>Secret permissions</dt>
	<dd><span class="data-field">Get &amp; List</span></dd>
	<dt>Certificate permissions</dt>
	<dd><span class="data-field">Get &amp; List</span></dd>
	<dt>Authorised application</dt>
	<dd><span class="data-field">&#171; None selected &#187;</span></dd>
</dl>
And click **OK**, and then click **Save** (why **OK** doesn't save I have no idea - always catching me out!)

## Fire it up

Finally we can test our demo application out:

<ol class="info" style="padding-left: 2em">
	<li>Start the demo application in Visual Studio</li>
	<li>Change the URL to <a href="http://localhost:63049/api/home">http://localhost:63049/api/home</a> (your port may vary)</li>
	<li>Cross your fingers</li>
	<li>If all is well the browser will show the <a href="#create-the-username-key">username</a> and <a href="#create-the-password-key">password</a> secrets you entered eariler</li>
</ol>

## Links

The following resources were used in constructing the above article:

<ul class="info" style="list-style-type:none">
	<li><a href="https://docs.microsoft.com/en-us/azure/key-vault/key-vault-get-started">Setup Azure Key Vaults with Powershell</a></li>
	<li><a href="https://docs.microsoft.com/en-us/azure/key-vault/key-vault-use-from-web-application">Use Azure Key Vault from a web application</a></li>
	<li><a href="https://www.attosol.com/azure-key-vault-an-introduction-with-step-by-step-directions/">Azure Key Vault - An Introduction with step-by-step directions</a></li>
	<li><a href="https://aspnetmonsters.com/2017/10/monsters-weekly/ep107/">Monsters Weekly</a></li>
	<li><a href="http://codingcanvas.com/storing-application-secrets-in-azure-key-vault/">Storing application secrets in Azure key vault</a></li>
	<li><a href=""></a></li>
</ul>

