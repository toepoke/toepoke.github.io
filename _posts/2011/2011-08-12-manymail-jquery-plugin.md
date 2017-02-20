---
layout: post

title: "manyMail - A jQuery plug-in for providing a user interface for sending e-mails on a web server"
# subtitle: "What's in the box"
date: 2012-02-27 18:17:00
tags: [css, development, fluqi, jquery-ui, techie-stuff]
comments: true
cover_image: bluebells.jpg

excerpt: "manyMail - A jQuery plug-in for providing a user interface for sending e-mails on a web server"

author:
  name: fJ
  twitter: toepoke_co_uk
  gplus: toepokeCoUk
  bio: Founder, Developer, tea maker
  image: fj.png
---
<!DOCTYPE html>
<html>
<head>
	<title>manyMail - A jQuery plug-in for providing a user interface for sending e-mails on a web server</title>

	<meta name="description" content="Article about converting a mailto href into a jQuery UI dialog" />
	<meta name="keywords" content="blog, article, web, internet, html, css, javascript, jquery, jquery ui, email" />

	<!--<link href="css/manymail.css" rel="stylesheet" type="text/css" />-->
	<style>
.mtp-tab-item {
	padding-left: 5% !important;
	padding-right: 5% !important;
}

.mtp-dlg {
	font-size: 90%;
}

.mtp-dlg-label {
	width: 100px;
	display: inline-block;
	vertical-align: top;
	font-size: 80% !important;
}

.mtp-dlg-text {
	width: 80%;
	font-size: 80% !important;
}

.mtp-dlg-body {
	height: 100px;
}

.mtp-err-dlg p, .mtp-err-dlg li {
	font-size: 80%;
}

.mtp-tabs {
	min-height: 55%;
}

.mtp-header li {
	list-style-type: none;
	margin-bottom: 10px;
}

.mtp-button {
	display: inline-block;
	list-style-type: none;
	list-style-position: inside;
	list-style-image: none;
	margin-right: 10px;
	margin-top: 7px;
	padding: 5px;
	cursor: pointer;	
}

.mtp-button-delete {
	float: right;
	cursor: pointer;
}

#mtp-dlg-help li, #mtp-dlg-help p {
	font-size: small;
}

#mtp-dlg-help ul li {
	list-style-type: square;
	margin-left: 1em;
	margin-right: 1em;
}

#mtp-dlg-help p {
	margin-left: 0;
}

	</style>
	<!--<link href="css/manymail-article.css" rel="stylesheet" type="text/css" />-->

<style>
.drag-n-drop-pic {
	margin:  -10px 1em 15px 15px;
	width: 258px;
}
</style>
<style>
/*shCore.css*/
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
.syntaxhighlighter a,
.syntaxhighlighter div,
.syntaxhighlighter code,
.syntaxhighlighter table,
.syntaxhighlighter table td,
.syntaxhighlighter table tr,
.syntaxhighlighter table tbody,
.syntaxhighlighter table thead,
.syntaxhighlighter table caption,
.syntaxhighlighter textarea {
  -moz-border-radius: 0 0 0 0 !important;
  -webkit-border-radius: 0 0 0 0 !important;
  background: none !important;
  border: 0 !important;
  bottom: auto !important;
  float: none !important;
  height: auto !important;
  left: auto !important;
  line-height: 1.1em !important;
  margin: 0 !important;
  outline: 0 !important;
  overflow: visible !important;
  padding: 0 !important;
  position: static !important;
  right: auto !important;
  text-align: left !important;
  top: auto !important;
  vertical-align: baseline !important;
  width: auto !important;
  box-sizing: content-box !important;
  font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important;
  font-weight: normal !important;
  font-style: normal !important;
  font-size: 1em !important;
  min-height: inherit !important;
  min-height: auto !important;
}

.syntaxhighlighter {
  width: 100% !important;
  margin: 1em 0 1em 0 !important;
  position: relative !important;
  overflow: auto !important;
  font-size: 1em !important;
}
.syntaxhighlighter.source {
  overflow: hidden !important;
}
.syntaxhighlighter .bold {
  font-weight: bold !important;
}
.syntaxhighlighter .italic {
  font-style: italic !important;
}
.syntaxhighlighter .line {
  white-space: pre !important;
}
.syntaxhighlighter table {
  width: 100% !important;
}
.syntaxhighlighter table caption {
  text-align: left !important;
  padding: .5em 0 0.5em 1em !important;
}
.syntaxhighlighter table td.code {
  width: 100% !important;
}
.syntaxhighlighter table td.code .container {
  position: relative !important;
}
.syntaxhighlighter table td.code .container textarea {
  box-sizing: border-box !important;
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border: none !important;
  background: white !important;
  padding-left: 1em !important;
  overflow: hidden !important;
  white-space: pre !important;
}
.syntaxhighlighter table td.gutter .line {
  text-align: right !important;
  padding: 0 0.5em 0 1em !important;
}
.syntaxhighlighter table td.code .line {
  padding: 0 1em !important;
}
.syntaxhighlighter.nogutter td.code .container textarea, .syntaxhighlighter.nogutter td.code .line {
  padding-left: 0em !important;
}
.syntaxhighlighter.show {
  display: block !important;
}
.syntaxhighlighter.collapsed table {
  display: none !important;
}
.syntaxhighlighter.collapsed .toolbar {
  padding: 0.1em 0.8em 0em 0.8em !important;
  font-size: 1em !important;
  position: static !important;
  width: auto !important;
  height: auto !important;
}
.syntaxhighlighter.collapsed .toolbar span {
  display: inline !important;
  margin-right: 1em !important;
}
.syntaxhighlighter.collapsed .toolbar span a {
  padding: 0 !important;
  display: none !important;
}
.syntaxhighlighter.collapsed .toolbar span a.expandSource {
  display: inline !important;
}
.syntaxhighlighter .toolbar {
  position: absolute !important;
  right: 1px !important;
  top: 1px !important;
  width: 11px !important;
  height: 11px !important;
  font-size: 10px !important;
  z-index: 10 !important;
}
.syntaxhighlighter .toolbar span.title {
  display: inline !important;
}
.syntaxhighlighter .toolbar a {
  display: block !important;
  text-align: center !important;
  text-decoration: none !important;
  padding-top: 1px !important;
}
.syntaxhighlighter .toolbar a.expandSource {
  display: none !important;
}
.syntaxhighlighter.ie {
  font-size: .9em !important;
  padding: 1px 0 1px 0 !important;
}
.syntaxhighlighter.ie .toolbar {
  line-height: 8px !important;
}
.syntaxhighlighter.ie .toolbar a {
  padding-top: 0px !important;
}
.syntaxhighlighter.printing .line.alt1 .content,
.syntaxhighlighter.printing .line.alt2 .content,
.syntaxhighlighter.printing .line.highlighted .number,
.syntaxhighlighter.printing .line.highlighted.alt1 .content,
.syntaxhighlighter.printing .line.highlighted.alt2 .content {
  background: none !important;
}
.syntaxhighlighter.printing .line .number {
  color: #bbbbbb !important;
}
.syntaxhighlighter.printing .line .content {
  color: black !important;
}
.syntaxhighlighter.printing .toolbar {
  display: none !important;
}
.syntaxhighlighter.printing a {
  text-decoration: none !important;
}
.syntaxhighlighter.printing .plain, .syntaxhighlighter.printing .plain a {
  color: black !important;
}
.syntaxhighlighter.printing .comments, .syntaxhighlighter.printing .comments a {
  color: #008200 !important;
}
.syntaxhighlighter.printing .string, .syntaxhighlighter.printing .string a {
  color: blue !important;
}
.syntaxhighlighter.printing .keyword {
  color: #006699 !important;
  font-weight: bold !important;
}
.syntaxhighlighter.printing .preprocessor {
  color: gray !important;
}
.syntaxhighlighter.printing .variable {
  color: #aa7700 !important;
}
.syntaxhighlighter.printing .value {
  color: #009900 !important;
}
.syntaxhighlighter.printing .functions {
  color: #ff1493 !important;
}
.syntaxhighlighter.printing .constants {
  color: #0066cc !important;
}
.syntaxhighlighter.printing .script {
  font-weight: bold !important;
}
.syntaxhighlighter.printing .color1, .syntaxhighlighter.printing .color1 a {
  color: gray !important;
}
.syntaxhighlighter.printing .color2, .syntaxhighlighter.printing .color2 a {
  color: #ff1493 !important;
}
.syntaxhighlighter.printing .color3, .syntaxhighlighter.printing .color3 a {
  color: red !important;
}
.syntaxhighlighter.printing .break, .syntaxhighlighter.printing .break a {
  color: black !important;
}
</style>
<style>
/*shThemeDefault.css*/
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
.syntaxhighlighter {
  background-color: white !important;
}
.syntaxhighlighter .line.alt1 {
  background-color: white !important;
}
.syntaxhighlighter .line.alt2 {
  background-color: white !important;
}
.syntaxhighlighter .line.highlighted.alt1, .syntaxhighlighter .line.highlighted.alt2 {
  background-color: #e0e0e0 !important;
}
.syntaxhighlighter .line.highlighted.number {
  color: black !important;
}
.syntaxhighlighter table caption {
  color: black !important;
}
.syntaxhighlighter .gutter {
  color: #afafaf !important;
}
.syntaxhighlighter .gutter .line {
  border-right: 3px solid #6ce26c !important;
}
.syntaxhighlighter .gutter .line.highlighted {
  background-color: #6ce26c !important;
  color: white !important;
}
.syntaxhighlighter.printing .line .content {
  border: none !important;
}
.syntaxhighlighter.collapsed {
  overflow: visible !important;
}
.syntaxhighlighter.collapsed .toolbar {
  color: blue !important;
  background: white !important;
  border: 1px solid #6ce26c !important;
}
.syntaxhighlighter.collapsed .toolbar a {
  color: blue !important;
}
.syntaxhighlighter.collapsed .toolbar a:hover {
  color: red !important;
}
.syntaxhighlighter .toolbar {
  color: white !important;
  background: #6ce26c !important;
  border: none !important;
}
.syntaxhighlighter .toolbar a {
  color: white !important;
}
.syntaxhighlighter .toolbar a:hover {
  color: black !important;
}
.syntaxhighlighter .plain, .syntaxhighlighter .plain a {
  color: black !important;
}
.syntaxhighlighter .comments, .syntaxhighlighter .comments a {
  color: #008200 !important;
}
.syntaxhighlighter .string, .syntaxhighlighter .string a {
  color: blue !important;
}
.syntaxhighlighter .keyword {
  color: #006699 !important;
}
.syntaxhighlighter .preprocessor {
  color: gray !important;
}
.syntaxhighlighter .variable {
  color: #aa7700 !important;
}
.syntaxhighlighter .value {
  color: #009900 !important;
}
.syntaxhighlighter .functions {
  color: #ff1493 !important;
}
.syntaxhighlighter .constants {
  color: #0066cc !important;
}
.syntaxhighlighter .script {
  font-weight: bold !important;
  color: #006699 !important;
  background-color: none !important;
}
.syntaxhighlighter .color1, .syntaxhighlighter .color1 a {
  color: gray !important;
}
.syntaxhighlighter .color2, .syntaxhighlighter .color2 a {
  color: #ff1493 !important;
}
.syntaxhighlighter .color3, .syntaxhighlighter .color3 a {
  color: red !important;
}

.syntaxhighlighter .keyword {
  font-weight: bold !important;
}
</style>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/jquery-ui.min.js"></script>
	<link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/themes/ui-darkness/jquery-ui.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript">
/*
 * Developed by : www.toepoke.co.uk
 *
 * If you redistribute this file, please keep this section in place.
 *
 * Version: 1.0.2
 * License: Same as jQuery - see http://jquery.org/license
*/

(function ($) {
	// tracks data for each instance of manyMail
	var _Sequence = 1;

	$.fn.manyMail = function (settings) {

		// default settings		
		settings = $.extend({
			separator: ";",
			title: "Submit your e-mail",
			modal: true,
			width: 570,
			height: 550,
			showHelp: true,
			showClient: true,
			showReset: true,
			validate: function(email) { 
				return defaultValidator(email); 
			},
			loadAddresses: function(email) {
				// By default we don't do anything
			},
			decode: function(emailAddress) {
				// no encoding by default, just return what we've been given
				return emailAddress;
			},
			confirmation: function (email) {
				// By default we don't display a confirmation 
				return true;
			},
			send: function(email) {
				// Caller must override the "send" method, so give a 
				// reminder if they haven't
				alert("override settings.send method to send the e-mail \n(you would be sending to [" + email.To + "])");

				return;
			}
		}, settings);
		

		this.each(function() {
			var alink = jQuery(this);
			var email = buildDefaultObject();
			email.settings = settings;
			email.startingEmail = email;
			
			getDataFromLink(email, alink);
			
			if (email.settings.loadAddresses) {
				// caller wants to add their own stuff in
				email.settings.loadAddresses(email);
				buildEmailLists(email);
			}

			var mailHtml = buildDialogHtml(email);

			// add html to the page so it can be called up later
			$("body").append(mailHtml);

			$(".mtp-button-delete").click(
				function () {
					$(this).parent().fadeOut();
				}
			);

			// wire up the onclick to open the dialog
			alink.click(
				function() { 
					// make sure we have the lists up-to-date
					buildEmailLists(email);
					wireUpDragNDrop(email);
					showDialog(email);					

					// prevent click through
					return false;
				}
			);

		});


		function showDialog(email) {
			var dlgButtons = {};
			if (email.settings.showHelp)		dlgButtons["Help"] = function() { showHelpDialog(); };
			if (email.settings.showClient)	dlgButtons["Outlook"] = function() { getDataFromDialog(email); openInClientApp(email); }
			if (email.settings.showReset)		dlgButtons["Reset"] = function() { resetDialog(email.startingEmail); }
			
			// Send is always present otherwise there's just no point
			dlgButtons["Send"] = function() {
				getDataFromDialog(email);
				var errMsg = email.settings.validate(email);
				if (errMsg && errMsg.length > 0) {
					// validation failed, so show error message and don't close the dialog
					showError(email, errMsg);
				} else {
					if (email.settings.confirmation(email)) {
						email.settings.send(email);	
						$( this ).dialog( "close" );
					}
				}
			}; // button send

			$("#" + email.ID).dialog( 
				{
					modal: email.settings.modal,
					width: email.settings.width,
					height: email.settings.height,
					title: email.settings.title,
					buttons: dlgButtons
				} // dialog settings
			) // dialog
		}; // showDialog


		function wireUpDragNDrop(email) {
			var prefix = "#" + email.ID;
			var sortableIDs = "#" + email.ToListID  + ", #" + email.CcListID + ", #" + email.BccListID;

			$(sortableIDs).sortable().disableSelection();
			// enable tabs
			var $tabs = $( "#" + email.TabsID ).tabs();

			var $tabItems = $("ul li", $tabs).droppable(
				{
					accept: ".connectedSortable li", 
					hoverClass: "ui-state-hover",
					drop: function( event, ui ) {
						var $item = $(this);
						var $list = $( $item.find("a").attr("href") )
							.find( ".connectedSortable" );

						// if we don't find a list, user must be adding item onto another item in the same list
						if ($list.length > 0) {
							ui.draggable.hide( "fast", 
								function() {
									$tabs.tabs("select", $tabItems.index( $item ));
									$(this).appendTo($list).show("fast");
								}
							);
						} // if

					} // drop event
				} // droppable settings
			);
		}; // wireUpDragNDrop


		function showHelpDialog() {
			// is the dialog already on the page?
			if ($("#mtp-dlg-help").length == 0) {
				// ... only do this once as it's the same content for all dialogs
				var helpHtml = buildHelpDialog();
				$("body").append(helpHtml);
			}

			$("#mtp-dlg-help").dialog(
				{
					modal: false,
					width: 450,
					height: 450,
					title: "Help",
					buttons: {
						Ok: function() { $(this).dialog("close"); }
					}
				}
			);

		}; // showHelpDialog
		
		
		function buildHelpDialog() {
			var html = "";

			html += '<div id="mtp-dlg-help" class="mtp-dlg ui-helper-hidden" title="manyMail help">';
			html += '<p>To send your e-mail, simply:</p>';
			html +=   '<ul>';
			html +=     '<li>Enter a relevant subject and message for your e-mail.</li>';
			html +=     '<li>Check all the people you want to send the e-mail to are in the <strong>To:</strong>, <strong>Cc:</strong> and/or <strong>Bcc:</strong> tabs.</li>';
			html +=     '<li>If you want someone in the <strong>To:</strong> tab recieve a blind-copy, simply drag \'n\' drop their address onto the <strong>Bcc:</strong> tab</li>';
			html +=     '<li>If you don\'t want someone to get the e-mail, simply click the little cross at the side of their address.</li>';
			html +=     '<li>If you make a mistake, simply click the <strong>Reset</strong> button to go back to where you started.</li>';
			html +=     '<li>When you\'re happy, click <strong>Send</strong>.</li>';
			html +=     '<li>If you prefer to use your installed e-mail applicatiion, click Outlook (you may not have Outlook, but you get the idea).</li>';
			html +=   '</ul>';
			html += '</div>';

			return html;
		}; // showHelpDialog


		function openInClientApp(email) {
			var href = "mailto:" + email.To + "?";
			
			if (email.Cc)
				href += "cc=" + email.Cc;
				
			if (email.Bcc) {
				if (!isLast(href, "?")) 
					// evidently there was a CC: component
					href += "&";
				href += "bcc=" + email.Bcc;
			}
			
			if (email.Subject) {
				if (!isLast(href, "?"))
					// evidently there was a CC: or BCC:
					href += "&";
				href += "subject=" + email.Subject;
			}
			
			if (email.Body) {
				if (!isLast(href, "?"))
					// evidently there was a CC:, BCC: or Subject
					href += "&";
				href += "body=" + email.Body;
			}
				
			// and fire a new window off so it opens in the client application
			var winMail = window.open(href, "_blank", "scrollbars=yes,resizable=yes,width=10,height=10");
			if (winMail)
				winMail.close();
				
		}; // openInClientApp
		
		function isLast(inputString, isChar) {
			if (inputString.length == 0)
				return false;
			if (inputString.charAt( inputString.length-1 ) == isChar)
				return true;
			else 
				return false;
				
		}; // isLast


		function resetDialog(email) {
			/// <summary>
			/// Resets the e-mail dialog back to the provided email object
			/// </summary>
			/// <param name="email">Email object to reset the form to</param>
			/// <returns>No return value</returns>
			
			$("#" + email.ID)
					.find("#" + email.SubjectID)
					.val( email.startingEmail.Subject )
				.end()
					.find("#" + email.BodyID)
					.val( email.startingEmail.Body )
				.end()
					.find("#" + email.ToListID)
					// note that jQuery "replaceWith" will remove "#mtp-to-list" as well, which we don't want
					.children()
					.remove()
					.end()
					.append( buildEmailButtonList(email.startingEmail.ToList) )
				.end()
					.find("#" + email.CcListID)
					// note thast jQuery "replaceWith" will remove "#mtp-cc-list" as well, which we don't want
					.children()
					.remove()
					.end()
					.append( buildEmailButtonList(email.startingEmail.CcList) )
				.end()
					.find("#" + email.BccListID)
					// note that jQuery "replaceWith" will remove "#mtp-bcc-list" as well, which we don't want
					.children()
					.remove()
					.end()
					.append( buildEmailButtonList(email.startingEmail.BccList) );
					
			// as we've replaced all the html in the To/Cc/Bcc tabs, we have to wire up 
			// the delete buttons again
			$(".mtp-button-delete", $("#" + email.TabsID) ).click(
				function () {
					$(this).parent().fadeOut();
				}
			);

			// again, as we've replaced the elements in the DOM, we need to wire up 
			// the drag 'n' drop stuff
			wireUpDragNDrop(email.startingEmail);

		}; // resetDialog


		function showError(email, errMsg) {
			/// <summary>
			/// Displays a dialog over the e-mail dialog telling the user stuff they need
			/// to fix before the e-mail can be sent.
			/// </summary>
			/// <param name="errMsg">Error message to display to the user, this is HTML, so I'd recommend <p><ul>...</p></param>
			/// <returns>Nothing</returns>

			var errDlg = $("#" + email.ErrDlgID);

			// has the error dialog already been created?
			if (errDlg.length == 0) {
				// hasn't been created yet, so add it into the DOM so we can report the error
				var html = "";
				html += '<div id="' + email.ErrDlgID + '" title="Error" class="ui-helper-hidden mtp-err-dlg">';
				html +=		'<div id="' + email.ErrMsgID + '">';
				html +=		errMsg;
				html +=		'</div>';
				html += '</div>';
				$("body").append(html);
				// read it back as we'll need it in a minute
				errDlg = $("#" + email.ErrDlgID);

			} else {
				// dialog already there, so just replace the content
				$("#" + email.ErrMsgID, errDlg).replaceWith(errMsg);
			}

			errDlg.dialog(
				{
					modal: true,
					buttons: {
						Ok: function() {
							$(this).dialog("close");
						}
					}
				}
			);

		}; // showError


		function defaultValidator(email) {
			/// <summary>
			/// Build-in validator to use for the e-mail dialog (i.e. used if the caller doesn't override it)
			/// Basically makes sure the user has entered the minumum expected data, ie. someone must be in the
			/// To: box, Subject and body must also have content
			/// </summary>
			/// <param name="email">Email object with the parsed data from the form</param>
			/// <returns>
			/// If the dialog is deemed valid, an empty string is returned to indicate everything is OK
			/// If the dialog is invalid and error message is returned as string
			/// </returns>

			if (email == null)
				// dunno what's happened there!
				throw "defaultValidator expected an email object";

			var errMsg = "";

			if (email.To == null || email.To == "")
				errMsg += "<li>You need at least a <strong>To:</strong> address.</li>";
			if (email.Subject == null || email.Subject == "")
				errMsg += "<li>You need to fill in the <strong>subject</strong> line.</li>";
			if (email.Body == null || email.Body == "")
				errMsg += "<li>You need to fill in the <strong>body</strong>.</li>";

			if (errMsg != "") {
				errMsg = 
					'<p>Sorry, but we couldn\'t send the e-mail:</p>' + 
					'<ul>' + errMsg + '</ul>';
				return errMsg;
			}

			return "";

		}; // defaultValidator


		function getDataFromDialog(email) {
			/// <summary>
			/// Gets the data from the form into a manageable object with the following properties:
			///		To      - to e-mail addresses separated by ";" (or settings.separator)
			///		Cc:     - copy e-mail addresses separated by ";" (or settings.separator)
			///		Bcc:    - blind copy e-mail addresses separated by ";" (or settings.separator)
			///		Subject - subject line in the dialog
			///		Body    - the body in the dialog
			/// </summary>
			/// <returns>Returns the object version of what's in the dialog</returns>

			email.Subject = $.trim( $("#" + email.SubjectID).val() );
			email.Body = $.trim( $("#" + email.BodyID).val() );

			email.To = "";   email.ToList = [];
			email.Cc = "";   email.CcList = [];
			email.Bcc = "";  email.BccList = [];

			// have to work around the fact that :visible (correctly) is dependent
			// on the parent being visible, which on an in-active tab it will be hidden, 
			// so we can't just do "#mtp-to-list li:visible", we have to do it the long way ...
			//$(this).parent().attr("id")
			$("#" + email.ToListID + " li, #" + email.CcListID + " li, #" + email.BccListID + " li").each(
				function (index) {
					var self = $(this);
					if (self.css("display") == "none")
						// item really is hidden, not just the parent, so skip this one
						return;

					var distId = self.parent().attr("id");
					var recipient = $.trim(self.text());
					var recipientSep = recipient + settings.separator;

					// I'm sure there's a better way of doing this ... but hay, it'll do :)
					if (distId === email.ToListID) 
						email.ToList.push( recipient );
					else if (distId === email.CcListID) 
						email.CcList.push( recipient );
					else 
						email.BccList.push( recipient );

				} // function
			); // each

				// and use the lists to create the separated versions
			email.To = email.ToList.join(email.settings.separator);
			email.Cc = email.CcList.join(email.settings.separator);
			email.Bcc = email.BccList.join(email.settings.separator);

			return email;
		}; // getDataFromDialog


		function buildDefaultObject() {
			var rootID = "mtp-" + _Sequence.toString();
			var emailObj = {
				ID: rootID,
				From: "",
				Reply: "",
				To: "",
				Cc: "",
				Bcc: "",
				Subject: "",
				Body: "",
				// make life a little easier
				ID: rootID,
				TabsID: rootID + "-tabs",
				ToListID: rootID + "-to-list",
				CcListID: rootID + "-cc-list",
				BccListID: rootID + "-bcc-list",
				FromID: rootID + "-from",
				ReplyID: rootID + "-reply",
				ToID: rootID + "-to",
				CcID: rootID + "-cc",
				BccID: rootID + "-bcc",
				SubjectID: rootID + "-subject",
				BodyID: rootID + "-body",
				ErrMsgID: rootID + "-err-msg",
				ErrDlgID: rootID + "-err-dlg"
			};

			// move the sequence on for the next one
			_Sequence++;

			return emailObj;

		}; // buildDefaultObject


		function getDataFromLink(email, alink) {
			/// <summary>
			/// Breaks down the href attribute in a "mailto" link into a more management object
			/// </summary>
			/// <param name="email">current email object to add link info to</param>
			/// <param name="alink">jQuery object pointing to a "mailto" "a" link</param>
			/// <returns>Returns the mailing object extracted from the mailto href</returns>
			if (alink == null)
				return;
			if (alink.attr("tagName").toUpperCase() != "A")
				return;
			if (alink.attr("href") == null)
				return;

			// OK, we've got an "a" tag, so try and get the data out
			var href = alink.attr("href");

			// as we're hacking a URL extraction function, fool it into thinking it's
			// a normal url by moving from "mailto:xyz@abc.com?subject=123" to "?to=xyz@abc.com&subject=123" 
			// so basically it's a consistent ?key=value&key=value format
			href = href.replace("?", "&").replace("mailto:", "?to=");

			var rootID = "mtp-" + _Sequence.toString();

			email.From = email.settings.decode( getParameterByName(href, "from") );
			email.Reply = email.settings.decode( getParameterByName(href, "reply") );
			email.To = email.settings.decode( getParameterByName(href, "to") );  
			email.Cc = email.settings.decode( getParameterByName(href, "cc") );
			email.Bcc = email.settings.decode( getParameterByName(href, "bcc") );
			email.Subject = getParameterByName(href, "subject");
			email.Body = getParameterByName(href, "body");
			
			// now we've got the To/Cc/Bcc bits (which CSV lists basically)
			// ... extract out the components bits into a list)			
			buildEmailLists(email);

			return email;
		};

		function buildEmailLists(email) {
			email.ToList  = splitEmail(email.To, email.settings.separator);
			email.CcList  = splitEmail(email.Cc, email.settings.separator);
			email.BccList = splitEmail(email.Bcc, email.settings.separator);

		}; // buildEmailLists

		function splitEmail(emailList, sep) {
			/// <summary>
			/// Splits the e-mail address into an array.  This is separated out as the "split" function will
			/// return an array with a length of 1, which will be an empty string?!?!!  So get in first
			/// and return an empty array if there's nothing to do.
			/// </summary>
			var arrEmails = emailList.split(sep);

			// We end up with an empty element at the end, so get
			// rid of those (usually because there's a single separator at the end of "emailList", or because
			// emailList is actually an empty string)
			while (arrEmails.length > 0 && arrEmails[arrEmails.length - 1] == "") {
				arrEmails.pop();
			}

			return arrEmails;
		}
				

		function buildDialogHtml( email ) {
			/// <summary>
			/// Draws the HTML for the e-mail dialog, pre-populating it with the "email" object that's been
			/// extracted from the "mailto" href.
			/// </summary>
			/// <param name="email">E-mail object to draw the dialog from</param>
			/// <returns>Returns the HTML for the jQuery UI dialog</returns>

			var html = "";

			html += '<div id="' + email.ID + '" class="mtp-dlg ui-helper-hidden" title="' + email.settings.title + '">';

			// header 
			html +=   '<ol class="mtp-header">';
			html +=     '<li>';
			html +=       '<label for="' + email.SubjectID + '" class="mtp-dlg-label">Subject:</label>';
			html +=       '<input type="text" id="' + email.SubjectID + '" class="ui-corner-all mtp-dlg-text" value="' + email.Subject + '" />';
			html +=     '</li>';
			html +=     '<li>';
			html +=       '<label for="' + email.BodyID + '" class="mtp-dlg-label">Message:</label>';
			html +=       '<textarea id="' + email.BodyID + '" class="ui-corner-all mtp-dlg-text mtp-dlg-body">' + email.Body + '</textarea>';
			html +=     '</li>';
			html +=   '</ol>';

			// tabs
			html +=   '<div id="' + email.TabsID + '" class="mtp-tabs">';
			html +=     '<ul>';
			html +=       '<li class="mtp-tab-item"><a href="#' + email.ToID + '">To:</a></li>';
			html +=       '<li class="mtp-tab-item"><a href="#' + email.CcID + '">Cc:</a></li>';
			html +=       '<li class="mtp-tab-item"><a href="#' + email.BccID + '">Bcc:</a></li>';
			html +=     '</ul>';
			html +=     '<div id="' + email.ToID + '">';
			html +=       '<ul id="' + email.ToListID + '" class="ui-helper-reset connectedSortable">';
			html += buildEmailButtonList(email.ToList);
			html +=       '</ul>';
			html +=     '</div>';
			html +=     '<div id="' + email.CcID + '">';
			html +=       '<ul id="' + email.CcListID + '" class="ui-helper-reset connectedSortable">';
			html += buildEmailButtonList(email.CcList);
			html +=       '</ul>';
			html +=     '</div>';
			html +=     '<div id="' + email.BccID + '">';
			html +=       '<ul id="' + email.BccListID + '" class="ui-helper-reset connectedSortable">';
			html += buildEmailButtonList(email.BccList);
			html +=       '</ul>';
			html +=     '</div>';
			html +=   '</div>';
			html += '</div>';			
				
			return html;
		};


		/// <summary>
		/// Helper method for drawing a list of e-mail buttons that appear in the To, Cc lists, etc.
		/// </summary>
		/// <param name="emailList">Array of email address to draw</param>
		/// <returns>Returns the HTML for the button list</returns>
		function buildEmailButtonList(emailList) {
			var html = "";
			for (var em in emailList) {
				html += buildEmailButton(emailList[em]);
			}
			return html;
		};


		function buildEmailButton(emailAddress) {
			/// <summary>
			/// Helper method for drawing one of the e-mail address buttons that appear in the To:, Cc: and Bcc: tabs.
			/// </summary>
			/// <param name="emailAddress">E-mail address to draw a button of</param>
			/// <returns>Returns the HTML for drawing an e-mail button</returns>

			var html =
				'<li class="ui-state-default ui-corner-all mtp-button">' + 
					emailAddress + 
					'<span class="ui-icon ui-icon-circle-close mtp-button-delete"></span>' +
				'</li>';

			return html;
		}


		// 
		function getParameterByName( href, name ) {
			/// <summary>
			/// Extracts a value for a given key in a querystring.
			/// </summary>
			/// <param name="href">href attribute to extract the value from</param>
			/// <param name="name">attribute name to extract from</param>
			/// <returns>Returns the value for the given URL parameter</returns>
			/// <remarks>
			/// Note that this is basically nabbed from the following question on stackoverflow.com
			/// http://stackoverflow.com/questions/901115/get-querystring-values-with-jquery
			/// </remarks>

			name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regexS = "[\\?&]"+name+"=([^&#]*)";
			var regex = new RegExp( regexS );
			var results = regex.exec( href );
			// window.location.href
			if (results == null)
				return "";
			else
				return decodeURIComponent(results[1].replace(/\+/g, " "));
		};

	}; // manyMail


})(jQuery);	
	</script>
	<script src="/assets/main.js" type="text/javascript"></script>

</head>

<h1>manyMail</h1>

<h2>Overview</h2>

<p>
	If you do a bit of web development you'll no doubt know you can use the <a href="http://www.ianr.unl.edu/internet/mailto.html">mailto</a>
	attribute in <a href="http://htmlhelp.com/reference/html40/special/a.html">a hyperlink</a> to bring up
	the <a href="mailto:someone[at]example.com">e-mail client</a> installed on the user's computer (if there is one).
</p>			
<p>
	This is great if you use <a href="http://office.microsoft.com/en-us/outlook/">Outlook</a>
	or <a href="http://www.mozillamessaging.com/">Thunderbird</a>, but what if your e-mail is web based like 
	<a href="https://mail.google.com/mail">Gmail</a> or <a href="http://hotmail.co.uk">Hotmail</a>?
	Yup, you're a bit stumped.  This is where manyMail comes in; it provides
	an interactive user interface for sending e-mails from your website. <a href="#footnote" class="footnote" title="Want a normal contact form?">*</a>

</p>
<p>
	OK, with the preamble out of the way, how about a quick demo?
</p>
<pre class="brush: html">
<a id="simple-example-src" href="mailto:player-xyz[at]example.com">e-mail player xyz</a>
</pre>
<pre class="brush: javascript">
$(document).ready(function() {
$("#simple-example").manyMail();
});
</pre>
<p>
	<a id="simple-example" href="mailto:player-xyz[at]example.com" class="button button_magenta">Simple demo</a>
</p>
<img src="/images/posts/2011/drag-and-drop.png" class="fr pic drag-n-drop-pic" />

<p>
	Notice you can drag an e-mail between the <strong>To:</strong>, <strong>Cc:</strong>
	and <strong>Bcc:</strong> tabs.  The end-user can also remove any e-mail addresses
	they don't want to send (more useful on say <a href="http://toepoke.co.uk">a team based website</a> <span class="smilie wink" title="wink"></span>).
</p>
<p>
	Now we've got an idea of what we're looking at, let's look a bit deeper.
</p>

<h3>Dependencies</h3>
<p>
	manyMail uses the <a href="http://jquery.com/">jQuery</a> javascript framework to
	provide the functionality of the plug-in, as well as the <a href="http://jqueryui.com/demos/dialog/">jQuery UI dialog</a>
	and <a href="http://jqueryui.com/demos/tabs/">jQuery UI tabs</a> to provide the pop-up for changing the e-mail properties.
</p>
<p>
	As such you will need to have the <a href="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js" title="We're using 1.4.4 here, but any major 1.4 build should be fine.">jQuery</a> and
	the <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/jquery-ui.min.js" title="We're using 1.8.6 here, but any major 1.8 build should be fine.">jQuery UI</a> javascript frameworks downloaded as 
	well as the <a href="scripts/jquery-mailto-plugin-1.0.0.js">manyMail plug-in</a>.  You will also
	need a <a href="http://www.devcurry.com/2010/05/latest-jquery-and-jquery-ui-theme-links.html">ui theme</a>, we're
	using the <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/themes/ui-darkness/jquery-ui.css">ui-darkess</a>
	theme here as it fits nicely with the <a href="http://toepoke.co.uk">toepoke</a> design.
</p>
<p>
	Note that manyMail only uses the dialog and tabs parts of the jQuery UI framework, so you can just 
	<a href="http://jqueryui.com/download">download</a> those components if you wish.
</p>

<h3>Settings</h3>
<p>
	As with many <a href="http://plugins.jquery.com/">plug-ins</a>, manyMail has a few default properties
	you can override to change its behaviour.
</p>
<p>
	The following properties are used to change how the <a href="http://jqueryui.com/demos/dialog/">dialog control</a>
	behaves.
</p>
<ol class="disc">
	<li><a href="http://jqueryui.com/demos/dialog/#option-height">height</a></li>
	<li><a href="http://jqueryui.com/demos/dialog/#option-width">width</a></li>
	<li><a href="http://jqueryui.com/demos/dialog/#option-title">title</a></li>
	<li><a href="http://jqueryui.com/demos/dialog/#option-modal">modal</a></li>
</ol>
<p id="jq-props">
	We won't go over those properties as the 
	<a href="http://jqueryui.com/demos/dialog/">jQuery documentation</a> already does an excellent job, 
	the important part is that those properties are honoured.
	
	However a little example might be useful.
</p>
<pre class="brush: html">
<a id="jquery-properties-example-src" href="mailto:to-player1[at]example.com;">e-mail player1</a>
</pre>
<pre class="brush: javascript">
$("#jquery-properties-example").manyMail({
title: "this is a new title",
width: screen.width * 0.66,
height: screen.height * 0.66,
modal: false
});
</pre>
<p>
	<a id="jquery-properties-example" href="mailto:to-player1[at]example.com;" class="button button_magenta">jQuery Properties Demo</a>
</p>
<p>
	Here we've given our own title for the dialog, changed the dialog size to roughly &#8532; of the available screen
	space and the dialog is no longer <a href="http://jqueryui.com/demos/dialog/#option-modal">modal</a>.
</p>
<p>
	The only other property is the <strong>separator</strong> which specifies what character is used
	to <a href="http://en.wikipedia.org/wiki/Delimiter">delimit</a> the e-mail addresses in the
	<strong>href</strong> attribute.  By default this is a semi-colon (;) and this is fine for 99% of the time.
</p>

<h3 id="overrides">Override Methods</h3>
<p>
	As well as the various properties that can be modified, we can also change how the plug-in 
	functions, by overriding a variety of exposed methods, as detailed below.
</p>


<h4 id="decode">decode</h4>
<p>
	You may notice that all the samples use invalid e-mail addresses, such as 
	<strong>someone[at]example.com</strong>.  This is on purpose and is a primitive 
	<a href="http://en.wikipedia.org/wiki/E-mail_address_harvesting#Anti-harvesting_methods">anti e-mail harvesting</a>
	technique (as this page can be viewed by 
	<a href="http://en.wikipedia.org/wiki/Anonymous_(group)#Origins_as_a_concept_and_a_meme">anonymous users</a>). 
</p>
<p>
	Of course before we can send an e-mail we need to convert the address into the correct format.  We can do this
	either on the server-side, or on the client-side, which is where the <strong>decode</strong> event comes in.
</p>
<p>
	When the plug-in extracts the e-mail addresses from the <strong>href</strong> in your <strong>mailto</strong> 
	link, it calls the <strong>decode</strong> method which can be overridden, as illustrated below:
</p>
<pre class="brush: html">
<a id="decode-example-src" href="mailto:to-player1[at]example.com&cc=cc-player1[at]example.com">Decode demo</a>
</pre>
<pre class="brush: javascript">
$("#decode-example").manyMail({
decode: function(emailAddress) {
// Simple example of decoding an e-mail address for the dialog.
// Rendered on the page as "player1[at]example.com", this replaces 
while (emailAddress.indexOf("[at]") != -1)
emailAddress = emailAddress.replace("[at]", "@");

return emailAddress;
}			
});
</pre>
<p>
	<a id="decode-example" href="mailto:to-player1[at]example.com&cc=cc-player1[at]example.com" class="button button_magenta">Decode demo</a>
</p>
<p>
	In this example we've just replaced the <strong>[at]</strong> with the appropriate <strong>ampersand (&amp;)</strong>.
	Naturally you're free to use whatever <a href="http://en.wikipedia.org/wiki/E-mail_address_harvesting#Anti-harvesting_methods">anti-harvesting method</a>
	you like, just override the <strong>decode</strong> method to arrange the data as you need.  Alternatively
	you can always do the decoding server-side when you <a href="#send">send</a> the message.
</p>

<h4 id="loadAddresses">loadAddresses</h4>
<p>
	Perhaps you want to add an additional address, perhaps so you get a copy of the e-mail being sent (though 
	we'd suggest doing this <a href="#server-checks">server-side</a>).
</p>
<pre class="brush: html">
<a id="loadAddresses-example-src" href="mailto:to-player1[at]example.com&cc=cc-player1[at]example.com">Add addresses callback demo</a>
</pre>
<pre class="brush: javascript">
$("#loadAddresses-example").manyMail({
loadAddresses: function(email) {
email.To += ";another.to[at]example.com";
email.Cc = "another.cc[at]example.com";
email.Bcc = "another.bcc[at]example.com";
}
});
</pre>
<p>
	Notice in the <strong>loadAddresses</strong> override above the <strong>+=</strong> part and the 
	<strong>semi-colon (;)</strong>, this is to preserve anything that's already in the <strong>To:</strong>
	part of the <strong>mailto</strong> reference.  
</p>
<p>
	<a id="loadAddresses-example" href="mailto:to-player1[at]example.com&cc=cc-player1[at]example.com" class="button button_magenta">Add Addresses Demo</a>
</p>
<p>
	The further thought is we can use this function to populate the pop-up form, rather than use the
	normal <strong>href</strong> method, as in this example:
</p>
<pre class="brush: html">
	<a id="loadAddresses-without-href-example-src" href="#">Add e-mails at runtime</a>
</pre>
<pre class="brush: javascript">
$("#loadAddresses-without-href-example").manyMail({
loadAddresses: function(email) {
email.To = "to-someone[at]example.com";
email.Cc = "cc-someone[at]example.com";
email.Bcc = "bcc-someone[at]example.com";
}
});
</pre>
<p>
	<a id="loadAddresses-without-href-example" href="#" class="button button_magenta">Add e-mails at runtime</a>
</p>
<p>
	Naturally the further thought would be to use the above method to load your e-mail addresses from
	the server using an <a href="http://api.jquery.com/category/ajax/">Ajax</a> call, this would further
	mitigate the risk of a <a href="http://en.wikipedia.org/wiki/Spambot">spambot</a> picking up your
	users e-mail addresses.
</p>

<p>
	The downside with this approach however, is you lose the in-built <a href="http://en.wikipedia.org/wiki/Progressive_enhancement">progessive goodness</a> 
	when using the <strong>mailto</strong> attribute
	(as there's no address in the mailto attribute of the href).  That said there's no reason why you couldn't still specify
	a <strong>mailto</strong> attribute with no e-mail addresses defined, as in:  
</p>
<pre class="brush: html">
	<a id="loadAddresses-without-href-example-with-no-to-address-src" href="mailto:&subject=blah, blah, blah">Add e-mails at runtime with no e-mail addresses</a>
</pre>
<pre class="brush: javascript">
$("#loadAddresses-without-href-example-with-no-to-address").manyMail({
loadAddresses: function(email) {
email.To = "to-someone[at]example.com";
email.Cc = "cc-someone[at]example.com";
email.Bcc = "bcc-someone[at]example.com";
}
});				
</pre>
<p>
	<a id="loadAddresses-without-href-example-with-no-to-address" href="mailto:&subject=blah, blah, blah" class="button button_magenta">Add e-mails at runtime with no e-mail addresses</a>
</p>
<p>
	Note the <strong>&</strong> at the front tells the browser there is no <strong>To</strong> addresses associated with this hyperlink.
</p>


<h4 id="validate">validate</h4>
<p>
	When clicking the <a href="#send">send</a> button on the form the <strong>validate</strong>
	method is called so any errors on the form can be trapped and displayed.  The method
	performs the following checks:
</p>
<ol class="disc">
	<li>There is at least one address in the To: tab.</li>
	<li>There is a subject defined.</li>
	<li>There is some content in the body</li>
</ol>
<p>
	Should any required data be missing the <strong>defaultValidator</strong> will 
	return an error message, which is then displayed to the user.  If you just click
	the <strong>send</strong> button in the 
	<a id="default-validator-example-2" href="#">demo</a>
	you should see the default error message.
</p>
<pre class="brush: html">
	<a id="default-validator-example-src">Default validation demo</a>
</pre>
<pre class="brush: javascript">
$("#default-validator-example").manyMail();
</pre>
<p>
	<a id="default-validator-example-2" href="#" class="button button_magenta">Default validation demo</a>
</p>

<p>
	As with other of the plug-in functions, the validate method can be overridden.  If you wish to override 
	<strong>valdiate</strong> method, return an empty string to indicate everything is OK, otherwise
	return a set of <a href="http://www.w3schools.com/tags/tag_li.asp">LI tags</a>, one for
	each error message to display.
</p>

<pre class="brush: javascript">
$("#override-validator-example").manyMail({
validate: function(email) {
if (email.To == null || email.To == "") {
// mmm, no to address, who we going to send to?
return "<li>The overridden validate message says to need a To!</li>";
}
// our overridden rules have passed, so let them through
return "";
}
});
</pre>
<p>
	<a id="override-validator-example" href="#" class="button button_magenta">Override validation demo</a>
</p>


<h4 id="buttons">Buttons</h4>
<p>
	You may not want all the buttons in the dialog displayed.  Perhaps for aesthetic reasons or you think
	your users may be insulted by being offered <strong>"Help"</strong> on filling in an e-mail form 
	<span class="smilie grin" title="grin"></span>.
</p>
<p>
	Whatever the reason, it's quite straightforward to disable the buttons, except the <strong>Send</strong>
	button naturally!
</p>				

<pre class="brush: html">
	<a id="buttons-example-src" href="mailto:to-player1[at]example.com?subject=Button demo">Buttons demo</a>
</pre>
<pre class="brush: javascript">
$("#buttons-example").manyMail({
showHelp: false,
showReset: false,
showClient: false
});
</pre>

<p>
	<a id="buttons-example" href="mailto:to-player1[at]example.com?subject=Buttons demo" class="button button_magenta">Buttons demo</a>
</p>



<h4 id="confirmation">Confirmation</h4>
<p>
	The confirmation method can be used as a final erm ... confirmation <span class="smilie grin" title="grin"></span> that the user wants 
	to send the e-mail.  This is a simple function that expects a <strong>true</strong> or <strong>false</strong>
	value to be returned.  By default the function returns <strong>true</strong> and no confirmation 
	message is displayed, so you only need to override this method if you want a confirmation message.
</p>				

<pre class="brush: html">
	<a id="confirmation-example-src" href="mailto:to-player1[at]example.com?subject=Confirmation demo&body=Click the 'Send' button to see the confirmation in action.">Confirmation demo</a>
</pre>
<pre class="brush: javascript">
$("#confirmation-example").manyMail({
confirmation: function(email) {
return 
confirm("Are you sure you want to send this communication?");
}
});
</pre>

<p>
	<a id="confirmation-example" href="mailto:to-player1[at]example.com?subject=Confirmation demo&body=Click the 'Send' button to see the confirmation in action." class="button button_magenta">Confirmation demo</a>
</p>


<h4 id="send">Send</h4>
<p>
	Finally there is the <strong>send</strong> method which <u>must</u> be overridden as this method
	calls your <a href="#server-checks">server</a> with the content to e-mail.
</p>
<p>
	
</p>

<pre class="brush: html">
	<a id="send-example-src" href="mailto:to-player1[at]example.com; to-player2[at]example.com; to-player3[at]example.com?cc=cc-player1[at]example.com; cc-player2[at]example.com; cc-player3[at]example.com&bcc=bcc-player1[at]example.com&from=sender[at]example.com&reply=reply_to[at]example.com&subject=Here is an e-mail for you&body=here is some body text for your e-mail">Send demo</a>
</pre>

<pre class="brush: javascript">
$("#send-example").manyMail({
send: function(email) {

// add a little helper method for showing what will be sent
email.formatList = function(listType, emailList) {
if (emailList == null)
return "";
var msg = listType + ":\n";
for (var index in emailList) {
msg += emailList[index] + "\n";
}
msg += "\n\n";
return msg;
};

var msg = "Subject: " + email.Subject + "\n";
msg += email.formatList("To", email.ToList);
msg += email.formatList("Cc", email.CcList);
msg += email.formatList("Bcc", email.BccList);
msg += "Body:\n\n" + email.Body;

// ToDo: Place your Ajax call to the server here
alert(msg);
}
});
</pre>
<p>
	<a id="send-example" href="mailto:to-player1[at]example.com; to-player2[at]example.com; to-player3[at]example.com?cc=cc-player1[at]example.com; cc-player2[at]example.com; cc-player3[at]example.com&bcc=bcc-player1[at]example.com&from=sender[at]example.com&reply=reply_to[at]example.com&subject=Here is an e-mail for you&body=here is some body text for your e-mail" class="button button_magenta">Send demo</a>
</p>

<h3 id="emailObject">Email Object</h3>

<p>
	You may have noticed through each of the methods outlined above, each has an <strong>email</strong>
	parameter detailing the various properties of the email dialog, so let's have a look at what's 
	exposed.
</p>
<table>
	<thead>
		<tr>
			<th>Property</th>
			<th>MailTo href</th>
			<th>Description</th>
		</tr>
	</thead>

	<tbody>
		<tr>
			<td>Subject</td>
			<td>subject</td>
			<td>
				<p class="sm">
					What should appear by default in the subject part of the dialog.
				</p>
			</td>
		</tr>
		<tr>
			<td>Body</td>
			<td>body</td>
			<td>
				<p class="sm">
					What should appear by default in the body part of the dialog.
				</p>
			</td>
		</tr>
		<tr>
			<td id="email-to">To</td>
			<td>to</td>
			<td>
				<p class="sm">
					A semi-colon separated list of e-mail address that should be added to the <strong>To:</strong> tab of the dialog.
				</p>
			</td>
		</tr>
		<tr>
			<td id="email-cc">Cc</td>
			<td>cc</td>
			<td>
				<p class="sm">
					A semi-colon separated list of e-mail address that should be added to the <strong>Cc:</strong> tab of the dialog.
				</p>	
			</td>
		</tr>
		<tr>
			<td id="email-bcc">Bcc</td>
			<td>bcc</td>
			<td>
				<p class="sm">
					A semi-colon separated list of e-mail address that should be added to the <strong>Bcc:</strong> tab of the dialog.
				</p>		
			</td>
		</tr>
		<tr>
			<td>ToList/CcList/BccList</td>
			<td>n/a</td>
			<td>
				<p class="sm">
				Holds the same information as the <a href="#email-to">To</a>/<a href="#email-cc">Cc</a> and 
				<a href="#email-bcc">Bcc</a>, but in a javascript array rather than delimited.
				</p>
			</td>
		</tr>
		<tr>
			<td>Reply</td>
			<td>reply</td>
			<td rowspan="2">
				<p class="sm">
					If a <strong>reply</strong> or <strong>from</strong> attribute is added to the 
					<strong>href</strong>
					it will be passed through the <strong>email</strong> class and will 
					be available to the server after the <a href="#send">Send</a> method
					is called, however it plays no part in the dialog displayed to the user.
				</p>
				<p class="sm">
					The <strong>reply</strong> attribute is usually used to indicate where
					replies to an e-mail should be sent, whereas the <strong>from</strong>
					attribute is used to dictate who sent the e-mail.
				</p>
				<p class="sm">
					Whilst these fields are available to you (for displaying in the 
					<a href="#confirmation">confirmation</a> for example) 
					<a href="http://en.wikipedia.org/wiki/E-mail_spoofing">we wouldn't recommend using this field</a>

				</p>
			</td>
		</tr>
		<tr>
			<td>From</td>
			<td>from</td>
		</tr>
	</tbody>
</table>


<h3 id="server-checks">Additional Server-side checks</h3>
<p>
	Hopefully an underlying theme of this article has been the <a href="http://en.wikipedia.org/wiki/E-mail_address_harvesting">dangerous territory</a>
	we place ourselves in if we expose the e-mail addresses of our users in plain view on a website.
</p>
<p>
	We wholeheartedly recommend only using the plug-in behind a page with some form of 
	<a href="http://en.wikipedia.org/wiki/Digest_access_authentication">authentication</a> 
	or an alternative method of ensuring the website is being displayed to a real person, 
	<a href="http://www.google.com/recaptcha">such as recaptcha</a>, before showing the e-mail addresses
	(note having the email addresses <a href="http://en.wikipedia.org/wiki/Hard_coding">hard-coded</a> <a href="#loadAddresses">in a javascript function</a> is as dangerous as through HTML).
</p>
<p>
	To summarise then, <a href="http://toepoke.co.uk">we</a> hope you find the plug-in useful although keep
	in mind a few points.
</p>
<ol class="disc">
	<li>
			Don't show e-mail addresses in plain-view (otherwise they <i>will</i> get <a href="http://en.wikipedia.org/wiki/E-mail_address_harvesting">harvested</a>
			by <a href="http://en.wikipedia.org/wiki/Spambot">the bots</a>).
	</li>
	<li>
			If you can, only trust your back-end database for setting the Reply-To and From e-mail fields.
			Otherwise your site could become a target for being used a <a href="http://en.wikipedia.org/wiki/E-mail_spam">spamming tool</a>.
	</li>
	<li>
			Ideally only allow e-mailing from <a href="http://en.wikipedia.org/wiki/Digest_access_authentication">authenticated users</a>.
			At the very least use something like a <a href="http://www.google.com/recaptcha">recaptcha</a> before showing the 
			e-mail addresses of your users.
	</li>
</ol>
<p>
	All that said, we hope you find the plug-in useful.
</p>

<h3>Source</h3>
<p>
	Source available on <a href="https://github.com/toepoke/manyMail">github</a>.
</p>

<h3>Footnotes</h3>
<p id="footnote">
	If you're after a more traditional contact form, <a href="http://theodin.co.uk/blog/ajax/contactable-jquery-plugin.html">this looks like a good one</a>.
</p>

</div>

<script type="text/javascript">
	$(document).ready(function () {

		SyntaxHighlighter.all();

		$("#simple-example").manyMail();

		$("#jquery-properties-example").manyMail({
				title: "this is a new title",
				width: screen.width * 0.66,
				height: screen.height * 0.66,
				modal: false
		});

		$("#decode-example").manyMail({
			decode: function(emailAddress) {
				// Simple example of decoding an e-mail address for the dialog.
				// Rendered on the page as "player1[at]example.com", this replaces 
				while (emailAddress.indexOf("[at]") != -1)
					emailAddress = emailAddress.replace("[at]", "@");

				return emailAddress;
			}
		});

		$("#loadAddresses-example").manyMail({
			loadAddresses: function(email) {
				email.To += ";another.to[at]example.com";
				email.Cc = "another.cc[at]example.com";
				email.Bcc = "another.bcc[at]example.com";
			}
		});

		$("#loadAddresses-without-href-example, #loadAddresses-without-href-example-with-no-to-address").manyMail({
			loadAddresses: function(email) {
				email.To = "to-someone[at]example.com";
				email.Cc = "cc-someone[at]example.com";
				email.Bcc = "bcc-someone[at]example.com";
			}
		});

		$("#default-validator-example-1, #default-validator-example-2").manyMail();

		$("#override-validator-example").manyMail({
			validate: function(email) {
				if (email.To == null || email.To == "") {
					// mmm, no to address, who we going to send to?
					return "<li>The overridden validate message says to need a To!</li>";
				}
				// our overridden rules have passed, so let them through
				return "";
			}
		});

		$("#buttons-example").manyMail({
			showHelp: false,
			showReset: false, 
			showClient: false
		});

		$("#confirmation-example").manyMail({
			confirmation: function(email) {
				return confirm("Are you sure you want to send this communication?");
			}
		});

		$("#send-example").manyMail({
			send: function(email) {

				// add a little helper method for showing what will be sent
				email.formatList = function(listType, emailList) {
					if (emailList == null)
						return "";
					var msg = listType + ":\n";
					for (var index in emailList) {
						msg += emailList[index] + "\n";
					}
					msg += "\n\n";
					return msg;
				};

				var msg = "Subject: " + email.Subject + "\n";
				msg += email.formatList("To", email.ToList);
				msg += email.formatList("Cc", email.CcList);
				msg += email.formatList("Bcc", email.BccList);
				msg += "Body:\n\n" + email.Body;

				// ToDo: Place your Ajax call to the server here
				alert(msg);
			}
		});

	});
</script>

<script type="text/javascript">
	/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('K M;I(M)1S 2U("2a\'t 4k M 4K 2g 3l 4G 4H");(6(){6 r(f,e){I(!M.1R(f))1S 3m("3s 15 4R");K a=f.1w;f=M(f.1m,t(f)+(e||""));I(a)f.1w={1m:a.1m,19:a.19?a.19.1a(0):N};H f}6 t(f){H(f.1J?"g":"")+(f.4s?"i":"")+(f.4p?"m":"")+(f.4v?"x":"")+(f.3n?"y":"")}6 B(f,e,a,b){K c=u.L,d,h,g;v=R;5K{O(;c--;){g=u[c];I(a&g.3r&&(!g.2p||g.2p.W(b))){g.2q.12=e;I((h=g.2q.X(f))&&h.P===e){d={3k:g.2b.W(b,h,a),1C:h};1N}}}}5v(i){1S i}5q{v=11}H d}6 p(f,e,a){I(3b.Z.1i)H f.1i(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1B,c=0,d,h;I(M.1R(f)){I(e!==1d)1S 3m("2a\'t 5r 5I 5F 5B 5C 15 5E 5p");H r(f)}I(v)1S 2U("2a\'t W 3l M 59 5m 5g 5x 5i");e=e||"";O(d={2N:11,19:[],2K:6(g){H e.1i(g)>-1},3d:6(g){e+=g}};c<f.L;)I(h=B(f,c,b,d)){a.U(h.3k);c+=h.1C[0].L||1}Y I(h=n.X.W(z[b],f.1a(c))){a.U(h[0]);c+=h[0].L}Y{h=f.3a(c);I(h==="[")b=M.2I;Y I(h==="]")b=M.1B;a.U(h);c++}a=15(a.1K(""),n.Q.W(e,w,""));a.1w={1m:f,19:d.2N?d.19:N};H a};M.3v="1.5.0";M.2I=1;M.1B=2;K C=/\\$(?:(\\d\\d?|[$&`\'])|{([$\\w]+)})/g,w=/[^5h]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=11,u=[],n={X:15.Z.X,1A:15.Z.1A,1C:1r.Z.1C,Q:1r.Z.Q,1e:1r.Z.1e},x=n.X.W(/()??/,"")[1]===1d,D=6(){K f=/^/g;n.1A.W(f,"");H!f.12}(),y=6(){K f=/x/g;n.Q.W("x",f,"");H!f.12}(),E=15.Z.3n!==1d,z={};z[M.2I]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S]))/;z[M.1B]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1h=6(f,e,a,b){u.U({2q:r(f,"g"+(E?"y":"")),2b:e,3r:a||M.1B,2p:b||N})};M.2n=6(f,e){K a=f+"/"+(e||"");H M.2n[a]||(M.2n[a]=M(f,e))};M.3c=6(f){H r(f,"g")};M.5l=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")};M.5e=6(f,e,a,b){e=r(e,"g"+(b&&E?"y":""));e.12=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.3q=6(){M.1h=6(){1S 2U("2a\'t 55 1h 54 3q")}};M.1R=6(f){H 53.Z.1q.W(f)==="[2m 15]"};M.3p=6(f,e,a,b){O(K c=r(e,"g"),d=-1,h;h=c.X(f);){a.W(b,h,++d,f,c);c.12===h.P&&c.12++}I(e.1J)e.12=0};M.57=6(f,e){H 6 a(b,c){K d=e[c].1I?e[c]:{1I:e[c]},h=r(d.1I,"g"),g=[],i;O(i=0;i<b.L;i++)M.3p(b[i],h,6(k){g.U(d.3j?k[d.3j]||"":k[0])});H c===e.L-1||!g.L?g:a(g,c+1)}([f],0)};15.Z.1p=6(f,e){H J.X(e[0])};15.Z.W=6(f,e){H J.X(e)};15.Z.X=6(f){K e=n.X.1p(J,14),a;I(e){I(!x&&e.L>1&&p(e,"")>-1){a=15(J.1m,n.Q.W(t(J),"g",""));n.Q.W(f.1a(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1d)e[c]=1d})}I(J.1w&&J.1w.19)O(K b=1;b<e.L;b++)I(a=J.1w.19[b-1])e[a]=e[b];!D&&J.1J&&!e[0].L&&J.12>e.P&&J.12--}H e};I(!D)15.Z.1A=6(f){(f=n.X.W(J,f))&&J.1J&&!f[0].L&&J.12>f.P&&J.12--;H!!f};1r.Z.1C=6(f){M.1R(f)||(f=15(f));I(f.1J){K e=n.1C.1p(J,14);f.12=0;H e}H f.X(J)};1r.Z.Q=6(f,e){K a=M.1R(f),b,c;I(a&&1j e.58()==="3f"&&e.1i("${")===-1&&y)H n.Q.1p(J,14);I(a){I(f.1w)b=f.1w.19}Y f+="";I(1j e==="6")c=n.Q.W(J,f,6(){I(b){14[0]=1f 1r(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1J)f.12=14[14.L-2]+14[0].L;H e.1p(N,14)});Y{c=J+"";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(h,g,i){I(g)5b(g){24"$":H"$";24"&":H d[0];24"`":H d[d.L-1].1a(0,d[d.L-2]);24"\'":H d[d.L-1].1a(d[d.L-2]+d[0].L);5a:i="";g=+g;I(!g)H h;O(;g>d.L-3;){i=1r.Z.1a.W(g,-1)+i;g=1Q.3i(g/10)}H(g?d[g]||"":"$")+i}Y{g=+i;I(g<=d.L-3)H d[g];g=b?p(b,i):-1;H g>-1?d[g+1]:h}})})}I(a&&f.1J)f.12=0;H c};1r.Z.1e=6(f,e){I(!M.1R(f))H n.1e.1p(J,14);K a=J+"",b=[],c=0,d,h;I(e===1d||+e<0)e=5D;Y{e=1Q.3i(+e);I(!e)H[]}O(f=M.3c(f);d=f.X(a);){I(f.12>c){b.U(a.1a(c,d.P));d.L>1&&d.P<a.L&&3b.Z.U.1p(b,d.1a(1));h=d[0].L;c=f.12;I(b.L>=e)1N}f.12===d.P&&f.12++}I(c===a.L){I(!n.1A.W(f,"")||h)b.U("")}Y b.U(a.1a(c));H b.L>e?b.1a(0,e):b};M.1h(/\\(\\?#[^)]*\\)/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"});M.1h(/\\((?!\\?)/,6(){J.19.U(N);H"("});M.1h(/\\(\\?<([$\\w]+)>/,6(f){J.19.U(f[1]);J.2N=R;H"("});M.1h(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.19,f[1]);H e>-1?"\\\\"+(e+1)+(3R(f.2S.3a(f.P+f[0].L))?"":"(?:)"):f[0]});M.1h(/\\[\\^?]/,6(f){H f[0]==="[]"?"\\\\b\\\\B":"[\\\\s\\\\S]"});M.1h(/^\\(\\?([5A]+)\\)/,6(f){J.3d(f[1]);H""});M.1h(/(?:\\s+|#.*)+/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"},M.1B,6(){H J.2K("x")});M.1h(/\\./,6(){H"[\\\\s\\\\S]"},M.1B,6(){H J.2K("s")})})();1j 2e!="1d"&&(2e.M=M);K 1v=6(){6 r(a,b){a.1l.1i(b)!=-1||(a.1l+=" "+b)}6 t(a){H a.1i("3e")==0?a:"3e"+a}6 B(a){H e.1Y.2A[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3G:[a.2G],h={"#":"1c",".":"1l"}[b.1o(0,1)]||"3h",g,i;g=h!="3h"?b.1o(1):b.5u();I((a[h]||"").1i(g)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 2g a)c[d]=a[d];O(d 2g b)c[d]=b[d];H c}6 w(a,b,c,d){6 h(g){g=g||1P.5y;I(!g.1F){g.1F=g.52;g.3N=6(){J.5w=11}}c.W(d||1P,g)}a.3g?a.3g("4U"+b,h):a.4y(b,h,11)}6 A(a,b){K c=e.1Y.2j,d=N;I(c==N){c={};O(K h 2g e.1U){K g=e.1U[h];d=g.4x;I(d!=N){g.1V=h.4w();O(g=0;g<d.L;g++)c[d[g]]=h}}e.1Y.2j=c}d=e.1U[c[a]];d==N&&b!=11&&1P.1X(e.13.1x.1X+(e.13.1x.3E+a));H d}6 v(a,b){O(K c=a.1e("\\n"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1K("\\n")}6 u(a,b){I(a==N||a.L==0||a=="\\n")H a;a=a.Q(/</g,"&1y;");a=a.Q(/ {2,}/g,6(c){O(K d="",h=0;h<c.L-1;h++)d+=e.13.1W;H d+" "});I(b!=N)a=v(a,6(c){I(c.L==0)H"";K d="";c=c.Q(/^(&2s;| )+/,6(h){d=h;H""});I(c.L==0)H d;H d+\'<17 1g="\'+b+\'">\'+c+"</17>"});H a}6 n(a,b){a.1e("\\n");O(K c="",d=0;d<50;d++)c+="                    ";H a=v(a,6(h){I(h.1i("\\t")==-1)H h;O(K g=0;(g=h.1i("\\t"))!=-1;)h=h.1o(0,g)+c.1o(0,b-g%b)+h.1o(g+1,h.L);H h})}6 x(a){H a.Q(/^\\s+|\\s+$/g,"")}6 D(a,b){I(a.P<b.P)H-1;Y I(a.P>b.P)H 1;Y I(a.L<b.L)H-1;Y I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,h=[],g=b.2D?b.2D:c;(d=b.1I.X(a))!=N;){K i=g(d,b);I(1j i=="3f")i=[1f e.2L(i,d.P,b.23)];h=h.1O(i)}H h}6 E(a){K b=/(.*)((&1G;|&1y;).*)/;H a.Q(e.3A.3M,6(c){K d="",h=N;I(h=b.X(c)){c=h[1];d=h[2]}H\'<a 2h="\'+c+\'">\'+c+"</a>"+d})}6 z(){O(K a=1E.36("1k"),b=[],c=0;c<a.L;c++)a[c].3s=="20"&&b.U(a[c]);H b}6 f(a){a=a.1F;K b=p(a,".20",R);a=p(a,".3O",R);K c=1E.4i("3t");I(!(!a||!b||p(a,"3t"))){B(b.1c);r(b,"1m");O(K d=a.3G,h=[],g=0;g<d.L;g++)h.U(d[g].4z||d[g].4A);h=h.1K("\\r");c.39(1E.4D(h));a.39(c);c.2C();c.4C();w(c,"4u",6(){c.2G.4E(c);b.1l=b.1l.Q("1m","")})}}I(1j 3F!="1d"&&1j M=="1d")M=3F("M").M;K e={2v:{"1g-27":"","2i-1s":1,"2z-1s-2t":11,1M:N,1t:N,"42-45":R,"43-22":4,1u:R,16:R,"3V-17":R,2l:11,"41-40":R,2k:11,"1z-1k":11},13:{1W:"&2s;",2M:R,46:11,44:11,34:"4n",1x:{21:"4o 1m",2P:"?",1X:"1v\\n\\n",3E:"4r\'t 4t 1D O: ",4g:"4m 4B\'t 51 O 1z-1k 4F: ",37:\'<!4T 1z 4S "-//4V//3H 4W 1.0 4Z//4Y" "1Z://2y.3L.3K/4X/3I/3H/3I-4P.4J"><1z 4I="1Z://2y.3L.3K/4L/5L"><3J><4N 1Z-4M="5G-5M" 6K="2O/1z; 6J=6I-8" /><1t>6L 1v</1t></3J><3B 1L="25-6M:6Q,6P,6O,6N-6F;6y-2f:#6x;2f:#6w;25-22:6v;2O-3D:3C;"><T 1L="2O-3D:3C;3w-32:1.6z;"><T 1L="25-22:6A-6E;">1v</T><T 1L="25-22:.6C;3w-6B:6R;"><T>3v 3.0.76 (72 73 3x)</T><T><a 2h="1Z://3u.2w/1v" 1F="38" 1L="2f:#3y">1Z://3u.2w/1v</a></T><T>70 17 6U 71.</T><T>6T 6X-3x 6Y 6D.</T></T><T>6t 61 60 J 1k, 5Z <a 2h="6u://2y.62.2w/63-66/65?64=5X-5W&5P=5O" 1L="2f:#3y">5R</a> 5V <2R/>5U 5T 5S!</T></T></3B></1z>\'}},1Y:{2j:N,2A:{}},1U:{},3A:{6n:/\\/\\*[\\s\\S]*?\\*\\//2c,6m:/\\/\\/.*$/2c,6l:/#.*$/2c,6k:/"([^\\\\"\\n]|\\\\.)*"/g,6o:/\'([^\\\\\'\\n]|\\\\.)*\'/g,6p:1f M(\'"([^\\\\\\\\"]|\\\\\\\\.)*"\',"3z"),6s:1f M("\'([^\\\\\\\\\']|\\\\\\\\.)*\'","3z"),6q:/(&1y;|<)!--[\\s\\S]*?--(&1G;|>)/2c,3M:/\\w+:\\/\\/[\\w-.\\/?%&=:@;]*/g,6a:{18:/(&1y;|<)\\?=?/g,1b:/\\?(&1G;|>)/g},69:{18:/(&1y;|<)%=?/g,1b:/%(&1G;|>)/g},6d:{18:/(&1y;|<)\\s*1k.*?(&1G;|>)/2T,1b:/(&1y;|<)\\/\\s*1k\\s*(&1G;|>)/2T}},16:{1H:6(a){6 b(i,k){H e.16.2o(i,k,e.13.1x[k])}O(K c=\'<T 1g="16">\',d=e.16.2x,h=d.2X,g=0;g<h.L;g++)c+=(d[h[g]].1H||b)(a,h[g]);c+="</T>";H c},2o:6(a,b,c){H\'<2W><a 2h="#" 1g="6e 6h\'+b+" "+b+\'">\'+c+"</a></2W>"},2b:6(a){K b=a.1F,c=b.1l||"";b=B(p(b,".20",R).1c);K d=6(h){H(h=15(h+"6f(\\\\w+)").X(c))?h[1]:N}("6g");b&&d&&e.16.2x[d].2B(b);a.3N()},2x:{2X:["21","2P"],21:{1H:6(a){I(a.V("2l")!=R)H"";K b=a.V("1t");H e.16.2o(a,"21",b?b:e.13.1x.21)},2B:6(a){a=1E.6j(t(a.1c));a.1l=a.1l.Q("47","")}},2P:{2B:6(){K a="68=0";a+=", 18="+(31.30-33)/2+", 32="+(31.2Z-2Y)/2+", 30=33, 2Z=2Y";a=a.Q(/^,/,"");a=1P.6Z("","38",a);a.2C();K b=a.1E;b.6W(e.13.1x.37);b.6V();a.2C()}}}},35:6(a,b){K c;I(b)c=[b];Y{c=1E.36(e.13.34);O(K d=[],h=0;h<c.L;h++)d.U(c[h]);c=d}c=c;d=[];I(e.13.2M)c=c.1O(z());I(c.L===0)H d;O(h=0;h<c.L;h++){O(K g=c[h],i=a,k=c[h].1l,j=3W 0,l={},m=1f M("^\\\\[(?<2V>(.*?))\\\\]$"),s=1f M("(?<27>[\\\\w-]+)\\\\s*:\\\\s*(?<1T>[\\\\w-%#]+|\\\\[.*?\\\\]|\\".*?\\"|\'.*?\')\\\\s*;?","g");(j=s.X(k))!=N;){K o=j.1T.Q(/^[\'"]|[\'"]$/g,"");I(o!=N&&m.1A(o)){o=m.X(o);o=o.2V.L>0?o.2V.1e(/\\s*,\\s*/):[]}l[j.27]=o}g={1F:g,1n:C(i,l)};g.1n.1D!=N&&d.U(g)}H d},1M:6(a,b){K c=J.35(a,b),d=N,h=e.13;I(c.L!==0)O(K g=0;g<c.L;g++){b=c[g];K i=b.1F,k=b.1n,j=k.1D,l;I(j!=N){I(k["1z-1k"]=="R"||e.2v["1z-1k"]==R){d=1f e.4l(j);j="4O"}Y I(d=A(j))d=1f d;Y 6H;l=i.3X;I(h.2M){l=l;K m=x(l),s=11;I(m.1i("<![6G[")==0){m=m.4h(9);s=R}K o=m.L;I(m.1i("]]\\>")==o-3){m=m.4h(0,o-3);s=R}l=s?m:l}I((i.1t||"")!="")k.1t=i.1t;k.1D=j;d.2Q(k);b=d.2F(l);I((i.1c||"")!="")b.1c=i.1c;i.2G.74(b,i)}}},2E:6(a){w(1P,"4k",6(){e.1M(a)})}};e.2E=e.2E;e.1M=e.1M;e.2L=6(a,b,c){J.1T=a;J.P=b;J.L=a.L;J.23=c;J.1V=N};e.2L.Z.1q=6(){H J.1T};e.4l=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,h=1f e.1U.5Y,g=J,i="2F 1H 2Q".1e(" ");I(c!=N){d=1f c;O(K k=0;k<i.L;k++)(6(){K j=i[k];g[j]=6(){H h[j].1p(h,14)}})();d.28==N?1P.1X(e.13.1x.1X+(e.13.1x.4g+a)):h.2J.U({1I:d.28.17,2D:6(j){O(K l=j.17,m=[],s=d.2J,o=j.P+j.18.L,F=d.28,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1O(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1O(q)}I(F.1b!=N&&j.1b!=N){q=y(j.1b,F.1b);b(q,j.P+j[0].5Q(j.1b));m=m.1O(q)}O(j=0;j<m.L;j++)m[j].1V=c.1V;H m}})}};e.4j=6(){};e.4j.Z={V:6(a,b){K c=J.1n[a];c=c==N?b:c;K d={"R":R,"11":11}[c];H d==N?c:d},3Y:6(a){H 1E.4i(a)},4c:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1j a[d]=="2m")c=c.1O(y(b,a[d]));H J.4e(c.6b(D))},4e:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,h=b+1;h<a.L&&a[b]!==N;h++){K g=a[h];I(g!==N)I(g.P>d)1N;Y I(g.P==c.P&&g.L>c.L)a[b]=N;Y I(g.P>=c.P&&g.P<d)a[h]=N}H a},4d:6(a){K b=[],c=2u(J.V("2i-1s"));v(a,6(d,h){b.U(h+c)});H b},3U:6(a){K b=J.V("1M",[]);I(1j b!="2m"&&b.U==N)b=[b];a:{a=a.1q();K c=3W 0;O(c=c=1Q.6c(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1N a}b=-1}H b!=-1},2r:6(a,b,c){a=["1s","6i"+b,"P"+a,"6r"+(b%2==0?1:2).1q()];J.3U(b)&&a.U("67");b==0&&a.U("1N");H\'<T 1g="\'+a.1K(" ")+\'">\'+c+"</T>"},3Q:6(a,b){K c="",d=a.1e("\\n").L,h=2u(J.V("2i-1s")),g=J.V("2z-1s-2t");I(g==R)g=(h+d-1).1q().L;Y I(3R(g)==R)g=0;O(K i=0;i<d;i++){K k=b?b[i]:h+i,j;I(k==0)j=e.13.1W;Y{j=g;O(K l=k.1q();l.L<j;)l="0"+l;j=l}a=j;c+=J.2r(i,k,a)}H c},49:6(a,b){a=x(a);K c=a.1e("\\n");J.V("2z-1s-2t");K d=2u(J.V("2i-1s"));a="";O(K h=J.V("1D"),g=0;g<c.L;g++){K i=c[g],k=/^(&2s;|\\s)+/.X(i),j=N,l=b?b[g]:d+g;I(k!=N){j=k[0].1q();i=i.1o(j.L);j=j.Q(" ",e.13.1W)}i=x(i);I(i.L==0)i=e.13.1W;a+=J.2r(g,l,(j!=N?\'<17 1g="\'+h+\' 5N">\'+j+"</17>":"")+i)}H a},4f:6(a){H a?"<4a>"+a+"</4a>":""},4b:6(a,b){6 c(l){H(l=l?l.1V||g:g)?l+" ":""}O(K d=0,h="",g=J.V("1D",""),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);h+=u(a.1o(d,k.P-d),j+"48")+u(k.1T,j+k.23);d=k.P+k.L+(k.75||0)}}h+=u(a.1o(d),c()+"48");H h},1H:6(a){K b="",c=["20"],d;I(J.V("2k")==R)J.1n.16=J.1n.1u=11;1l="20";J.V("2l")==R&&c.U("47");I((1u=J.V("1u"))==11)c.U("6S");c.U(J.V("1g-27"));c.U(J.V("1D"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"").Q(/\\r/g," ");b=J.V("43-22");I(J.V("42-45")==R)a=n(a,b);Y{O(K h="",g=0;g<b;g++)h+=" ";a=a.Q(/\\t/g,h)}a=a;a:{b=a=a;h=/<2R\\s*\\/?>|&1y;2R\\s*\\/?&1G;/2T;I(e.13.46==R)b=b.Q(h,"\\n");I(e.13.44==R)b=b.Q(h,"");b=b.1e("\\n");h=/^\\s*/;g=4Q;O(K i=0;i<b.L&&g>0;i++){K k=b[i];I(x(k).L!=0){k=h.X(k);I(k==N){a=a;1N a}g=1Q.4q(k[0].L,g)}}I(g>0)O(i=0;i<b.L;i++)b[i]=b[i].1o(g);a=b.1K("\\n")}I(1u)d=J.4d(a);b=J.4c(J.2J,a);b=J.4b(a,b);b=J.49(b,d);I(J.V("41-40"))b=E(b);1j 2H!="1d"&&2H.3S&&2H.3S.1C(/5s/)&&c.U("5t");H b=\'<T 1c="\'+t(J.1c)+\'" 1g="\'+c.1K(" ")+\'">\'+(J.V("16")?e.16.1H(J):"")+\'<3Z 5z="0" 5H="0" 5J="0">\'+J.4f(J.V("1t"))+"<3T><3P>"+(1u?\'<2d 1g="1u">\'+J.3Q(a)+"</2d>":"")+\'<2d 1g="17"><T 1g="3O">\'+b+"</T></2d></3P></3T></3Z></T>"},2F:6(a){I(a===N)a="";J.17=a;K b=J.3Y("T");b.3X=J.1H(a);J.V("16")&&w(p(b,".16"),"5c",e.16.2b);J.V("3V-17")&&w(p(b,".17"),"56",f);H b},2Q:6(a){J.1c=""+1Q.5d(1Q.5n()*5k).1q();e.1Y.2A[t(J.1c)]=J;J.1n=C(e.2v,a||{});I(J.V("2k")==R)J.1n.16=J.1n.1u=11},5j:6(a){a=a.Q(/^\\s+|\\s+$/g,"").Q(/\\s+/g,"|");H"\\\\b(?:"+a+")\\\\b"},5f:6(a){J.28={18:{1I:a.18,23:"1k"},1b:{1I:a.1b,23:"1k"},17:1f M("(?<18>"+a.18.1m+")(?<17>.*?)(?<1b>"+a.1b.1m+")","5o")}}};H e}();1j 2e!="1d"&&(2e.1v=1v);',62,441,'||||||function|||||||||||||||||||||||||||||||||||||return|if|this|var|length|XRegExp|null|for|index|replace|true||div|push|getParam|call|exec|else|prototype||false|lastIndex|config|arguments|RegExp|toolbar|code|left|captureNames|slice|right|id|undefined|split|new|class|addToken|indexOf|typeof|script|className|source|params|substr|apply|toString|String|line|title|gutter|SyntaxHighlighter|_xregexp|strings|lt|html|test|OUTSIDE_CLASS|match|brush|document|target|gt|getHtml|regex|global|join|style|highlight|break|concat|window|Math|isRegExp|throw|value|brushes|brushName|space|alert|vars|http|syntaxhighlighter|expandSource|size|css|case|font|Fa|name|htmlScript|dA|can|handler|gm|td|exports|color|in|href|first|discoveredBrushes|light|collapse|object|cache|getButtonHtml|trigger|pattern|getLineHtml|nbsp|numbers|parseInt|defaults|com|items|www|pad|highlighters|execute|focus|func|all|getDiv|parentNode|navigator|INSIDE_CLASS|regexList|hasFlag|Match|useScriptTags|hasNamedCapture|text|help|init|br|input|gi|Error|values|span|list|250|height|width|screen|top|500|tagName|findElements|getElementsByTagName|aboutDialog|_blank|appendChild|charAt|Array|copyAsGlobal|setFlag|highlighter_|string|attachEvent|nodeName|floor|backref|output|the|TypeError|sticky|Za|iterate|freezeTokens|scope|type|textarea|alexgorbatchev|version|margin|2010|005896|gs|regexLib|body|center|align|noBrush|require|childNodes|DTD|xhtml1|head|org|w3|url|preventDefault|container|tr|getLineNumbersHtml|isNaN|userAgent|tbody|isLineHighlighted|quick|void|innerHTML|create|table|links|auto|smart|tab|stripBrs|tabs|bloggerMode|collapsed|plain|getCodeLinesHtml|caption|getMatchesHtml|findMatches|figureOutLineNumbers|removeNestedMatches|getTitleHtml|brushNotHtmlScript|substring|createElement|Highlighter|load|HtmlScript|Brush|pre|expand|multiline|min|Can|ignoreCase|find|blur|extended|toLowerCase|aliases|addEventListener|innerText|textContent|wasn|select|createTextNode|removeChild|option|same|frame|xmlns|dtd|twice|1999|equiv|meta|htmlscript|transitional|1E3|expected|PUBLIC|DOCTYPE|on|W3C|XHTML|TR|EN|Transitional||configured|srcElement|Object|after|run|dblclick|matchChain|valueOf|constructor|default|switch|click|round|execAt|forHtmlScript|token|gimy|functions|getKeywords|1E6|escape|within|random|sgi|another|finally|supply|MSIE|ie|toUpperCase|catch|returnValue|definition|event|border|imsx|constructing|one|Infinity|from|when|Content|cellpadding|flags|cellspacing|try|xhtml|Type|spaces|2930402|hosted_button_id|lastIndexOf|donate|active|development|keep|to|xclick|_s|Xml|please|like|you|paypal|cgi|cmd|webscr|bin|highlighted|scrollbars|aspScriptTags|phpScriptTags|sort|max|scriptScriptTags|toolbar_item|_|command|command_|number|getElementById|doubleQuotedString|singleLinePerlComments|singleLineCComments|multiLineCComments|singleQuotedString|multiLineDoubleQuotedString|xmlComments|alt|multiLineSingleQuotedString|If|https|1em|000|fff|background|5em|xx|bottom|75em|Gorbatchev|large|serif|CDATA|continue|utf|charset|content|About|family|sans|Helvetica|Arial|Geneva|3em|nogutter|Copyright|syntax|close|write|2004|Alex|open|JavaScript|highlighter|July|02|replaceChild|offset|83'.split('|'),0,{}))
	</script>
<script type="text/javascript">
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(2(){1 h=5;h.I=2(){2 n(c,a){4(1 d=0;d<c.9;d++)i[c[d]]=a}2 o(c){1 a=r.H("J"),d=3;a.K=c;a.M="L/t";a.G="t";a.u=a.v=2(){6(!d&&(!8.7||8.7=="F"||8.7=="z")){d=q;e[c]=q;a:{4(1 p y e)6(e[p]==3)B a;j&&5.C(k)}a.u=a.v=x;a.D.O(a)}};r.N.R(a)}1 f=Q,l=h.P(),i={},e={},j=3,k=x,b;5.T=2(c){k=c;j=q};4(b=0;b<f.9;b++){1 m=f[b].w?f[b]:f[b].S(/\\s+/),g=m.w();n(m,g)}4(b=0;b<l.9;b++)6(g=i[l[b].E.A]){e[g]=3;o(g)}}})();',56,56,'|var|function|false|for|SyntaxHighlighter|if|readyState|this|length|||||||||||||||||true|document||javascript|onload|onreadystatechange|pop|null|in|complete|brush|break|highlight|parentNode|params|loaded|language|createElement|autoloader|script|src|text|type|body|removeChild|findElements|arguments|appendChild|split|all'.split('|'),0,{}))
</script>
<script type="text/javascript">
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'break case catch continue ' +
						'default delete do else false  ' +
						'for function if in instanceof ' +
						'new null return super switch ' +
						'this throw true try typeof var while with'
						;

		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,					css: 'string' },			// double quoted strings
			{ regex: r.multiLineSingleQuotedString,					css: 'string' },			// single quoted strings
			{ regex: r.singleLineCComments,							css: 'comments' },			// one line comments
			{ regex: r.multiLineCComments,							css: 'comments' },			// multiline comments
			{ regex: /\s*#.*/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// keywords
			];
	
		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['js', 'jscript', 'javascript'];

	SyntaxHighlighter.brushes.JScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

</script>
<script type="text/javascript">
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		function process(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				code = match[0],
				tag = new XRegExp('(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)', 'xg').exec(code),
				result = []
				;
		
			if (match.attributes != null) 
			{
				var attributes,
					regex = new XRegExp('(?<name> [\\w:\\-\\.]+)' +
										'\\s*=\\s*' +
										'(?<value> ".*?"|\'.*?\'|\\w+)',
										'xg');

				while ((attributes = regex.exec(code)) != null) 
				{
					result.push(new constructor(attributes.name, match.index + attributes.index, 'color1'));
					result.push(new constructor(attributes.value, match.index + attributes.index + attributes[0].indexOf(attributes.value), 'string'));
				}
			}

			if (tag != null)
				result.push(
					new constructor(tag.name, match.index + tag[0].indexOf(tag.name), 'keyword')
				);

			return result;
		}
	
		this.regexList = [
			{ regex: new XRegExp('(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)', 'gm'),			css: 'color2' },	// <![ ... [ ... ]]>
			{ regex: SyntaxHighlighter.regexLib.xmlComments,												css: 'comments' },	// <!-- ... -->
			{ regex: new XRegExp('(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)', 'sg'), func: process }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['xml', 'xhtml', 'xslt', 'html'];

	SyntaxHighlighter.brushes.Xml = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
</script>


