// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawCharts);

function drawChart(divId, title, arrValues) {
	var container = document.getElementById(divId);
	if (container == null) 
		// we don't have a DIV for this chart, so back out straight away
		return;
		
	var data = new google.visualization.DataTable();
	// Set-up options
	var options = {
		"title": title,
		"width": 500,
		"height": 250,
		is3D: true
	};
	
	// Chart headers
	data.addColumn("string", divId); // re-use div id
	data.addColumn("number", "votes");
	
	// Chart data
	data.addRows(arrValues);
	
	// Instantiate and draw our chart, passing in some options.	
	container.className = "g-chart";	// easier than trying to just remove the spinners "sk-spinner sk-spinner-pulse"
	
	var chart = new google.visualization.PieChart(container);
	chart.draw(data, options);
}
  
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawCharts() {

	/** YOUR EXPERIENCE **/
	// How did you first find out about toepoke?
	drawChart("find-out", "How did you first find out about toepoke?", [
		["Word of mouth", 4], 
		["Twitter", 1]
	]);

	// What kind of toepoke user are you?
	drawChart("user-type", "What kind of toepoke user are you?", [
		["Manager", 9], 
		["Player", 9], 
		["Not sure", 1], 
		["Abandoned", 3], 
	]);
		
	// How long have you been using toepoke?
	drawChart("how-long", "How long have you been using toepoke?", [
		["2-12 months", 16], 
		["Over 2 years", 6]
	]);	

	// Has you squad successfully run a match using the website?
	drawChart("run-a-match", "Has you squad successfully run a match using the website?", [
		["Yes", 16], 
		["No - only just started using it", 2],
		["No - not enough players", 3],
		["I don't organise it", 1]
	]);	

	// Do you often find you play with a reduced number of players?
	drawChart("reduced-players", "Do you often find you play with a reduced number of players?", [
		["Usually right number", 12], 
		["Too few", 8],
		["Too many", 2]
	]);	

	// Given your experience, how likely are you to recommend toepoke.co.uk to a friend?
	drawChart("recommend", "How likely are you to recommend toepoke.co.uk to a friend?", [
		["Very, it's awesome!", 6], 
		["Likely", 11],
		["Undecided", 3],
		["Unlikely", 1],
		["Very unlikely", 1]
	]);	
	
	/** FIRST IMPRESSIONS **/
	// I found the user experience intuitive ...
	drawChart("intuitive", "I found the user experience intuitive", [
		["Strongly agree", 2], 
		["Agree", 11],
		["Didn't notice", 2],
		["Disagree", 7],
		["Strongly disagree", 0]
	]);	

	// I was guided towards what I wanted to achieve ...
	drawChart("guided", "I was guided towards what I wanted to achieve", [
		["Strongly agree", 2], 
		["Agree", 16],
		["Didn't notice", 3],
		["Disagree", 2],
		["Strongly disagree", 0]
	]);	

	// I felt supported and it was apparent help was available if I needed it ...
	drawChart("supported", "I felt supported and it was apparent help was available if I needed it", [
		["Strongly agree", 4], 
		["Agree", 7],
		["Didn't notice", 10],
		["Disagree", 1],
		["Strongly disagree", 0]
	]);	
	
	// I found the "tour" explained how things worked quite well
	drawChart("tour", "I found the 'tour' explained how things worked quite well", [
		["Strongly agree", 3], 
		["Agree", 5],
		["Not watched 'the tour'", 13],
		["Disagree", 1],
		["Strongly disagree", 0]
	]);	

	/** HOW IT WORKS NOW **/
	// What do you think of the volume of e-mail you receive?
	drawChart("e-mail-volume", "What do you think of the volume of e-mail you receive?", [
		["Not enough", 2], 
		["About right", 18],
		["Too much", 2]
	]);	
	
	// What do you think about the ratings functionality?
	drawChart("ratings", "What do you think about the ratings functionality?", [
		["Too many metrics", 8], 
		["Love all the metrics", 11],
		["Really helps pick sides", 6],
		["Hate it", 3]
	]);		
	
	// Existing features
	drawChart("features", "Existing features", [
		["Haven't used most of them - don't know how they work", 9], 
		["Used most of them ... have an idea how they work", 7],
		["Used the tour and that told me", 3],
		["Been through every icon!", 3]
	]);	

	// Learning how to use features
	drawChart("learning-features", "Learning how to use features", [
		["I read the change log", 1], 
		["I use the tour on the screen", 1],
		["I use the demo account", 1],
		["I'd rather watch some videos", 3],
		["I just click stuff and see what happens", 16]
	]);	

	/** PAYMENTS **/
	// Would you pay your share of the pitch online if you could?
	drawChart("pay-share", "Would you pay your share of the pitch online if you could?", [
		["Would love it!", 11], 
		["Wouldn't use it", 11]
	]);	

	// If an online payments were an option, which method would you prefer?
	drawChart("payment-method", "If an online payments were an option, which method would you prefer?", [
		["Bank transfer - stripe.com", 4], 
		["Paypal.co.uk", 9],
		["Nochex.com", 0],
		["Stick with cash", 9]
	]);	

	// Would you be happy to pay a nominal admin fee for online payments?
	drawChart("admin-fee", "Would you be happy to pay a nominal admin fee for online payments?", [
		["Yes - 50p", 0], 
		["Yes - 30p", 0],
		["No", 14]
	]);	

	/** SMS MESSAGING **/
	// Would text message communications be of interest to you?
	drawChart("sms-interest", "Would text message communications be of interest to you?", [
		["Very important", 4], 
		["Fairly important", 4],
		["May use it occasionally", 7],
		["Wouldn't use it", 7]
	]);	

	// If SMS messaging is of interest to you? Would you be prepared to pay for them?
	drawChart("sms-fee", "Would you be prepared to pay for them?", [
		["10p per message", 4], 
		["50p to put your name down", 1],
		["Only use it if it was free", 9],
		["Happy with e-mail", 8]
	]);	

	/** PHONE APP **/
	// Would you prefer to use toepoke.co.uk through a smartphone app?
	drawChart("prefer-app", "Would you prefer to use toepoke.co.uk through a smartphone app?", [
		["Yes, iPhone", 9], 
		["Yes, Android", 7],
		["No, happy with the website", 6]
	]);	

	// If you'd like a phone app, would you be prepared to pay for one?
	drawChart("app-cost", "If you'd like a phone app, would you be prepared to pay for one?", [
		["1.99 per year", 2], 
		["4.99 one off fee", 3],
		["Only use it if it was free", 11],
		["Mobile version of the website is fine", 6]
	])	

	/** MISC **/
	// Would you play another team in your area to ensure you get your footy fix?
	drawChart("another-team", "Would you play another team in your area to ensure you get your footy fix?", [
		["Very likely", 0], 
		["Likely", 3],
		["Unlikely", 1],
		["Very unlikely", 0]
	]);	
	
/*	
	drawChart("another-team", "Would you play another team in your area to ensure you get your footy fix?", [
		["Likely", {v: 75, f:"75%"} ],
		["Unlikely", {v: 25, f:"25%"} ]
	]);	
*/	
	
}
  
  
  
  
  
  
  
  
  