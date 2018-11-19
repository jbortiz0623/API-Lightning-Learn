// Jquery is already set up for you


var jq = jQuery.noConflict();

jq.ajax({
  url: 'https://api.openaq.org/v1/countries',
  method: 'GET',
  success: function(response) {
      console.log(response)
      console.log(response.results)

    jq('#space').empty();
    var cities = response.results
    
    console.log(cities)
            cities.forEach(ozone => {

                let elem = `<p>${ozone.name} population is ${ozone.count} and has ${ozone.locations} different locations with poor air quality.</p><br>`
                console.log(ozone.locations);

                jq('#space').append(elem)
            });
  },


    
    error: function(error) { 
 
}
});

