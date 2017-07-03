var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var country = $('#country');

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
  resp.forEach(function(item){
    $('<li>').text(item.name).appendTo(countriesList);
    $('<div class="col-xs-6 country-left">').text("Capital City: ").appendTo(countriesList);
    $('<div class="col-xs-6 country-right">').text(item.capital).appendTo(countriesList);
    $('<div class="col-xs-6 country-left">').text("Languages: ").appendTo(countriesList);
    $('<div class="col-xs-6 country-right">').text(item.languages).appendTo(countriesList);
    $('<div class="col-xs-6 country-left">').text("Curriences: ").appendTo(countriesList);
    $('<div class="col-xs-6 country-right">').text(item.currencies).appendTo(countriesList);
    $('<div class="col-xs-6 country-left">').text("Languages: ").appendTo(countriesList);
    $('<div class="col-xs-6 country-right">').text(item.languages).appendTo(countriesList);
    $('<div class="col-xs-6 country-left">').text("Timezone: ").appendTo(countriesList);
    $('<div class="col-xs-6 country-right">').text(item.timezones).appendTo(countriesList);
    $('<div class="col-xs-6 country-left">').text("Region: ").appendTo(countriesList);
    $('<div class="col-xs-6 country-right">').text(item.region).appendTo(countriesList);
    });
}
