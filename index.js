

$(document).ready(function() {
    $("#search-btn").on("click", function(){
        console.log("Search-Btn Clicked");

        const searchedCity = $("#city-search").val();

        const apiKey = "a929eb9991d42b85d4aef4095c82b578";
        const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey;
        console.log(queryURL);
        // clear the input
        $("#city-search").val("");
        searchCity(searchedCity);

        // Create searched city array
        searchedCities = [];
        // Create button for searched city and append it to the beginning of the Searched City Element

        


        // Make query to weather api using city searched
            // replace static values with weather API data retrived
            // Make separate query for UV
        function searchCity(searchedCity) {
            $.ajax({
                type: "GET",
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey,
                datatype: "json"
            })
            .then((data) => {
                // console.log(data)
                // Display Data
                $("#temp").append(data.main.temp);
                $("#humidity").append(data.main.humidity);
                $("#windspeed").append(data.wind.speed);

                $.ajax({
                    type: "GET",
                    url: "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + data.coord.lat + "&lon=" + data.coord.lon,
                    datatype: "json"
                })
                .then((uvdata) => {
                    console.log(uvdata.value);
                    $("#UVIndex").append(uvdata.value);

                })

            })



            
        }
        
        

        // Add searched city to unordered list as a button
            // Store in Local Storage
        
        //  Add 5-day forecast





    })
});

