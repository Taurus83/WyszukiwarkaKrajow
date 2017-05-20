//Search for country
var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();

if(!countryName.length) countryName = 'Poland';
$.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
}

function showCountriesList(resp) {
    countriesList.empty();
resp.forEach(function(item){
    $('<li>').text(item.name).appendTo(countriesList);
});
}

//Show user location (country)
var requestUrl = "http://ip-api.com/json";

$.ajax({
        url: requestUrl,
        method: 'GET',
        success: function(json)
    {
    console.log("Your country is: " + json.country);
    },
    error: function(err)
    {
    console.log("Request failed, error= " + err);
    }
});