function theSearch1() {
    var city = $("#searchBar").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=44c38455c07369969dfcf31cc60c6f41&units=imperial";

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (res1) {
        console.log(res1);
        //// this is where the fun is ////
        // moment(1578409200).format("MMMM/Do/YYYY h:m a")
        var date1 = moment(res1.list[2].dt_txt).format("MMMM Do");
        var date2 = moment(res1.list[10].dt_txt).format("MMMM Do");
        var date3 = moment(res1.list[18].dt_txt).format("MMMM Do");
        var date4 = moment(res1.list[26].dt_txt).format("MMMM Do");
        var date5 = moment(res1.list[34].dt_txt).format("MMMM Do");

        var temp1 = (res1.list[2].main.temp_max + '°F');
        var temp2 = (res1.list[10].main.temp_max + '°F');
        var temp3 = (res1.list[18].main.temp_max + '°F');
        var temp4 = (res1.list[26].main.temp_max + '°F');
        var temp5 = (res1.list[34].main.temp_max + '°F');

        var humid1 = ('Humidity: ' + res1.list[2].main.humidity + '%');
        var humid2 = ('Humidity: ' + res1.list[10].main.humidity + '%');
        var humid3 = ('Humidity: ' + res1.list[18].main.humidity + '%');
        var humid4 = ('Humidity: ' + res1.list[26].main.humidity + '%');
        var humid5 = ('Humidity: ' + res1.list[34].main.humidity + '%');

        var wind1 = ('Wind Speed: ' + res1.list[2].wind.speed + 'Mph')
        var wind2 = ('Wind Speed: ' + res1.list[10].wind.speed + 'Mph')
        var wind3 = ('Wind Speed: ' + res1.list[18].wind.speed + 'Mph')
        var wind4 = ('Wind Speed: ' + res1.list[26].wind.speed + 'Mph')
        var wind5 = ('Wind Speed: ' + res1.list[34].wind.speed + 'Mph')
        // var windSpeed = (res.wind.speed);
        // console.log(tempDay1);
        var icon1 = res1.list[6].weather[0].icon;
        var icon2 = res1.list[14].weather[0].icon;
        var icon3 = res1.list[22].weather[0].icon;
        var icon4 = res1.list[30].weather[0].icon;
        var icon5 = res1.list[38].weather[0].icon;

        var weatherIcon1 = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png"
        var weatherIcon2 = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png"
        var weatherIcon3 = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png"
        var weatherIcon4 = "http://openweathermap.org/img/wn/" + icon4 + "@2x.png"
        var weatherIcon5 = "http://openweathermap.org/img/wn/" + icon5 + "@2x.png"


        console.log(res1);


        function weatherApp1() {
            $("#weatherBox1").empty();

            $("#weatherBox1").append("<h1 class='changeMeDate'>" + date1 + "</h1>");
            $("#weatherBox1").append("<img class='imgChange' src='" + weatherIcon1 + "'>");
            $("#weatherBox1").append("<p class='changeMe1'>" + "Temp: " + temp1 + "</p>");
            $("#weatherBox1").append("<p class='changeMe1'>" + humid1 + "</p>");
            $("#weatherBox1").append("<p class='changeMe1'>" + wind1 + "</p>");
        }
        function weatherApp2() {
            $("#weatherBox2").empty();

            $("#weatherBox2").append("<h1 class='changeMeDate'>" + date2 + "</h1>");
            $("#weatherBox2").append("<img class='imgChange' src='" + weatherIcon2 + "'>");
            $("#weatherBox2").append("<p class='changeMe1'>" + "Temp: " + temp2 + "</p>");
            $("#weatherBox2").append("<p class='changeMe1'>" + humid2 + "</p>");
            $("#weatherBox2").append("<p class='changeMe1'>" + wind2 + "</p>");

        }
        function weatherApp3() {
            $("#weatherBox3").empty();

            $("#weatherBox3").append("<h1 class='changeMeDate'>" + date3 + "</h1>");
            $("#weatherBox3").append("<img class='imgChange' src='" + weatherIcon3 + "'>");
            $("#weatherBox3").append("<p class='changeMe1'>" + "Temp: " + temp3 + "</p>");
            $("#weatherBox3").append("<p class='changeMe1'>" + humid3 + "</p>");
            $("#weatherBox3").append("<p class='changeMe1'>" + wind3 + "</p>");

        }
        function weatherApp4() {
            $("#weatherBox4").empty();

            $("#weatherBox4").append("<h1 class='changeMeDate'>" + date4 + "</h1>");
            $("#weatherBox4").append("<img class='imgChange' src='" + weatherIcon4 + "'>");
            $("#weatherBox4").append("<p class='changeMe1'>" + "Temp: " + temp4 + "</p>");
            $("#weatherBox4").append("<p class='changeMe1'>" + humid4 + "</p>");
            $("#weatherBox4").append("<p class='changeMe1'>" + wind4 + "</p>");

        }
        function weatherApp5() {
            $("#weatherBox5").empty();

            $("#weatherBox5").append("<h1 class='changeMeDate'>" + date5 + "</h1>");
            $("#weatherBox5").append("<img class='imgChange' src='" + weatherIcon5 + "'>");
            $("#weatherBox5").append("<p class='changeMe1'>" + "Temp: " + temp5 + "</p>");
            $("#weatherBox5").append("<p class='changeMe1'>" + humid5 + "</p>");
            $("#weatherBox5").append("<p class='changeMe1'>" + wind5 + "</p>");

        }
        weatherApp1();
        weatherApp2();
        weatherApp3();
        weatherApp4();
        weatherApp5();




    })
};