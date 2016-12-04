  /*****************************************************************************
   *
   * Methods for dealing with the bus data
   * https://raw.githubusercontent.com/tbarmann/ripta-api/master/static/RIPTApkstops0916.geojson
   * has given the stop id and route #, you can find the name of the stop and the lat lon location
   * given the route id, stop id, and the stop id before the one you care about
   * you get human readable stop name
   * like 
   * KENNEDY PLAZA (PROVIDENCE) > SHAW'S (SMITHFIELD RD) via ADMIRAL ST
   * 
   * https://raw.githubusercontent.com/tbarmann/ripta-api/master/static/google_transit/trips.json
   * 
   * given stop id, route_ids, gives you name of bus stop
   * https://github.com/tbarmann/ripta-api/blob/master/static/stops.json
   * 
   * route_ids appears to be a new number. where this comes from.
   * 
   * given the route id, this csv files has the sequential stop ids
   * https://github.com/tbarmann/ripta-api/blob/master/static/google_transit/routes.csv
   * 
   ****************************************************************************/
   
(function() {
    'use strict';
    
     
     var routeIDNUM_FETCH = 21;

     var url = "https://riptapi.herokuapp.com/api/tripupdates/route/" + routeIDNUM_FETCH;
     

    // Fetch the latest data.
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          var response = JSON.parse(request.response);

          var timestamp = response.header.timestamp;

          var data = response.entity;

          for (var i = 0; i < data.length; i++){
            var busData = data[i];
            var busTripUpdate = busData.trip_update;

            var busTripUpdateTimestamp = busTripUpdate.timestamp;

            var StopTimeUpdate = busTripUpdate.stop_time_update;

            for (var j = 0; j < StopTimeUpdate.length; j++){
              //iterate thru stop time updates
              //this is where the data fills the card

              var stopIdObj = StopTimeUpdate[j];


              var stopIdNumber = stopIdObj.stop_id;
              

              if (stopIdObj.hasOwnProperty("arrival") && stopIdObj.arrival != null){

              //When Will the bus Arrive? Will it be on time?
              var stopArrivalDelay = stopIdObj.arrival.delay; //negative = early , pos = late
              var stopArrivalTime = stopIdObj.arrival.time;

              }

              if(stopIdObj.hasOwnProperty("departure") && stopIdObj.departure != null){
              //When will the bus leave the bus stop? Will it leave on schedule?
              var stopDepartureDelay = stopIdObj.departure.delay;
              var stopDepartureTime = stopIdObj.departure.time;

              }
              
              if (j == StopTimeUpdate.length - 1){ 
                
                var STOPIDNUM_FETCH = j;
                

                if (stopArrivalDelay > 0){

                  var timeArriveDelayStr = Math.abs(Number(stopArrivalDelay)/60) + " min late";

                }else if(stopArrivalDelay < 0){
                  
                  var timeArriveDelayStr = Math.abs(Number(stopArrivalDelay)/60) + " min early";
                  
                }else{
                  var timeArriveDelayStr = "on time";
                }
                
                if (stopDepartureDelay > 0){

                  var timeDepartDelayStr = Math.abs(Number(stopDepartureDelay)/60) + " min late";

                }else if(stopArrivalDelay < 0){
                  
                  var timeDepartDelayStr = Math.abs(Number(stopDepartureDelay)/60) + " min early";
                  
                }else{
                  var timeDepartDelayStr = "on time";
                }
                //Make the ETAs human readable
                
                var dateArrive = new Date(stopArrivalTime * 1000);
                
                var datevaluesArrive = [
                   dateArrive.getFullYear(),
                   dateArrive.getMonth()+1,
                   dateArrive.getDate(),
                   dateArrive.getHours(),
                   dateArrive.getMinutes(),
                   dateArrive.getSeconds(),
                ];
                //console.log(datevaluesArrive); //=> [2011, 3, 25, 23, 0, 0]
                
                var dateDepart = new Date(stopDepartureTime * 1000);
                
                var datevaluesDepart = [
                   dateDepart.getFullYear(),
                   dateDepart.getMonth()+1,
                   dateDepart.getDate(),
                   dateDepart.getHours(),
                   dateDepart.getMinutes(),
                   dateDepart.getSeconds(),
                ];

                var cardData = JSON.stringify({
                  STOPIDNUM_FETCH:STOPIDNUM_FETCH,
                  arriveDelay:timeArriveDelayStr,
                  departDelay:timeDepartDelayStr,
                  datevaluesArrive:datevaluesArrive,
                  datevaluesDepart:datevaluesDepart
                  
                });
                console.log(cardData);

                

              }
              

            }

          }


        }
      } else {
        // Return the initial weather forecast since no data is available.
        //app.updateForecastCard(initialWeatherForecast);
      }
    };
    request.open('GET', url);
    request.send();

})();
