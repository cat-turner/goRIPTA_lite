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
// JavaScript
window.onload = function(){
    
    var activeBuses = [];
    var idx = 0;

    var f = (function(){
        var xhr = [];
        for (i = 1; i < 95; i++){
            (function (i){
                xhr[i] = new XMLHttpRequest();
                url = "https://riptapi.herokuapp.com/api/tripupdates/route/" + i;
                xhr[i].open("GET", url, true);
                xhr[i].onreadystatechange = function () {
                    if (xhr[i].readyState == 4 && xhr[i].status == 200) {
                        var response = JSON.parse(xhr[i].response);
                        var data = response.entity;
                        if (data.length >= 1){
                            idx = idx + 1;
                            activeBuses[idx]=i; 
                        }
                    }
                };
                xhr[i].send();
            })(i);
        }
    })();
    
    console.log(activeBuses);

};
