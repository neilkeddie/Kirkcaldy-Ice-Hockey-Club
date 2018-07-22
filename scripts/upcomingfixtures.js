queue()
    .defer(d3.csv, "data/HockeyFixtures.csv")
    .await(upcomingFixtures);
   
    var nextFixtures = [];
    
    var today = new Date();
    var secsToday = today.getTime();
    var todayPlus = new Date();
        todayPlus.setDate(todayPlus.getDate() + 6);
    var secsTodayPlus = todayPlus.getTime();
    
    console.log(secsToday);
    console.log(secsTodayPlus);

function upcomingFixtures(error, date) {

    var ndx = crossfilter(date);
    find_fixtures(ndx, today);
    dc.renderAll();
}

function findObjectByKey(array, key, date, datePlus) {
	
    for (i = 0; i < array.length; i++) {
        var newDate = array[i][key].split("/").reverse().join("-");
        var secsNewDate = (Date.parse(newDate));
        
        
        if ((date <= secsNewDate) && (datePlus >= secsNewDate)){
            console.log(array[i][key]);
            nextFixtures.push(array[i]);
        }
    }
}

function find_fixtures(ndx, date) {

    d3.csv("data/HockeyFixtures.csv", function(error, data) {
		          
		  findObjectByKey(data, 'date', secsToday, secsTodayPlus);
		  var marqueeText;
		  console.log(nextFixtures.length);
		  if (nextFixtures.length < 1) {
		    marqueeText = 'No Scheduled Fixtures this week';
		  } else {
		        marqueeText = 'This weeks fixtures: ';
		        for (i=0;i < nextFixtures.length;i++) {
		            console.log(nextFixtures[i].team);
		            marqueeText += ('  '+nextFixtures[i].date+' '+nextFixtures[i].team+' v '+nextFixtures[i].opponents+' '+nextFixtures[i].where+' '+nextFixtures[i].time+'        ');
		        }
		  }
		  document.getElementById('marquee').innerHTML += ('<p>'+marqueeText+'</p>');            
		 
    });
}