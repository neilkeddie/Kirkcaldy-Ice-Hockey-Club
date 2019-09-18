queue()
    .defer(d3.csv, "data/HockeyFixtures201819.csv")
    .await(showFixtures);
    
	var globalFixtures = [];
	var teamName;

function showFixtures(error, team) {
    
    var ndx = crossfilter(team);
	show_fixtures(ndx, "All");
	document.getElementById("all201819").onclick = function() {$("#fixtures201819").empty();show_fixtures(ndx, "All")};
	document.getElementById("kubz201819").onclick = function() {$("#fixtures201819").empty();show_fixtures(ndx, "KUBZ")};
	document.getElementById("eagles201819").onclick = function() {$("#fixtures201819").empty();show_fixtures(ndx, "EAGLES")};
	document.getElementById("redskins201819").onclick = function() {$("#fixtures201819").empty();show_fixtures(ndx, "REDSKINS")};
	document.getElementById("chiefs201819").onclick = function() {$("#fixtures201819").empty();show_fixtures(ndx, "CHIEFS")};
	document.getElementById("flames201819").onclick = function() {$("#fixtures201819").empty();show_fixtures(ndx, "FLAMES")};
	document.getElementById("falcons201819").onclick = function() {$("#fixtures201819").empty();show_fixtures(ndx, "FALCONS")};
	document.getElementById("kestrels201819").onclick = function() {$("#fixtures201819").empty();show_fixtures(ndx, "KESTRELS")};
    dc.renderAll();
}

function findObjectByKey(array, key, value) {
	
    for (i = 0; i < array.length; i++) {
        if (array[i][key] === value){
            globalFixtures.push(array[i]);
        }
    }
}

function show_fixtures(ndx, team) {
	
	teamName = team;
	
     d3.csv("data/HockeyFixtures201819.csv", function(error, data) {
		  if (error) throw error;

		  var table = d3.select('#fixtures201819').append('table');
		  var titles = d3.keys(data[0]);
		  var headers = table.append('thead').append('tr')
		                   .selectAll('th')
		                   .data(titles).enter()
		                   .append('th')
		                   .text(function (d) {
			                    return d;
		                    });
		  if (teamName === '' || teamName === 'All') {
		  			  var rows = table.append('tbody').selectAll('tr')
		               .data(data)
		               .enter()
		               .append('tr');
		               
		 
		  rows.selectAll('td')
		  .data(function (d) {
		   	return titles.map(function (k) {
		   		return { 'value': d[k], 'name': k};
		    	});
		    })
		    .enter()
		    .append('td')
		    .attr('data-th', function (d) {
		    	return d.name;
		    })
		    .text(function (d) {
		    	return d.value;
		    });
		  }	else {
		  globalFixtures = [];
		  findObjectByKey(data, 'team', teamName);
		  	
		  console.log(teamName);
		  var rows = table.append('tbody').selectAll('tr')
		               .data(globalFixtures)
		               .enter()
		               .append('tr');
		               
		 
		  rows.selectAll('td')
		  .data(function (d) {
		   	return titles.map(function (k) {
		   		return { 'value': d[k], 'name': k};
		    	});
		    })
		    .enter()
		    .append('td')
		    .attr('data-th', function (d) {
		    	return d.name;
		    })
		    .text(function (d) {
		    	return d.value;
		    });

		  }
	$("th").css("text-transform","uppercase");
	$("th").css("background-color","#ffff4d");

		
	$("tr").each(function() {
		var col_val = $(this).find("td:eq(3)").text();
    	if (col_val === "AWAY"){
    		$(this).css("background-color","#14326a");
    		$(this).css("color","white");
    	} else {
    		$(this).css("background-color","white",);
		    $(this).css("color","#14326a");
    	}
	});

	});
}