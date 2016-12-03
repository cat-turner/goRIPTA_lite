(function() {
    
    
    
    app.getBusData = function(key, label) {
    var url = "https://riptapi.herokuapp.com/api/tripupdates/route/60";
            // Fetch the latest data.
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          var response = JSON.parse(request.response);
          
          /*
          var results = response.query.results;
          results.key = key;
          results.label = label;
          results.created = response.query.created;
          app.updateForecastCard(results);
          */

          //var results = response.query.results;
          console.log(response);

          var timestamp = response.header.timestamp;

          console.log(timestamp);

          var data = response.entity;
          console.log(data);





        }
      } else {
        // Return the initial weather forecast since no data is available.
        //app.updateBusRouteCard(initialBusData);
      }
    };
    request.open('GET', url);
    request.send();
    }
    
    
})();