queue()
    .defer(d3.csv, "data/HockeyFixtures.csv")
    .await(upcomingFixtures);
   
    var nextFixtures = [];
    
    var today = new Date();
    var secsToday = today.getTime();
    var secsYesterday = secsToday - 86400000;
    var todayPlus = new Date();
        todayPlus.setDate(todayPlus.getDate() + 14);
    var secsTodayPlus = todayPlus.getTime();
    
    console.log(today);
    console.log(secsYesterday);
    console.log(secsToday);
    console.log(secsTodayPlus);

function upcomingFixtures(error, date) {

    var ndx = crossfilter(date);
    find_fixtures(ndx, today);
    dc.renderAll();
}

function findObjectByKey(array, key, date, datePlus) {
	
	nextFixtures = [];
	
    for (i = 0; i < array.length; i++) {
        var newDate = array[i][key].split("/").reverse().join("-");
        var secsNewDate = (Date.parse(newDate));
        console.log(secsNewDate);
        if ((date <= secsNewDate) && (datePlus >= secsNewDate)){
            console.log(array[i][key]);
            nextFixtures.push(array[i]);
        }
    }
    
}

function find_fixtures(ndx, date) {

    d3.csv("data/HockeyFixtures.csv", function(error, data) {
        
          findObjectByKey(data, 'date', secsYesterday, secsToday);
		  var marqueeText;
		  console.log(nextFixtures.length);
		  if (nextFixtures.length > 1) {
		      
	        marqueeText = 'Today\'s fixtures: ';
	        for (i=0;i < nextFixtures.length;i++) {
	            console.log(nextFixtures[i].team);
	            marqueeText += ('  '+nextFixtures[i].date+' '+nextFixtures[i].team+' v '+nextFixtures[i].opponents+' '+nextFixtures[i].where+' '+nextFixtures[i].time+'        ');
	        }
		  }

		  findObjectByKey(data, 'date', secsToday, secsTodayPlus);
		  console.log(nextFixtures.length);
		  if (nextFixtures.length < 1) {
		    marqueeText = 'No Scheduled Fixtures this week';
		  } else {
		        marqueeText += 'Upcoming fixtures: ';
		        for (j=0;j < nextFixtures.length;j++) {
		            console.log(nextFixtures[j].team);
		            marqueeText += ('  '+nextFixtures[j].date+' '+nextFixtures[j].team+' v '+nextFixtures[j].opponents+' '+nextFixtures[j].where+' '+nextFixtures[j].time+'        ');
		        }
		        marqueeText += '. For more up to date details check the KIHC Facebook page';
		  }
		  document.getElementById('marquee').innerHTML += ('<p>'+marqueeText+'</p>');            
		 
    });
}