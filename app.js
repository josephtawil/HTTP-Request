$(document).ready(function () {
    //ajax is a function
    //it is a request going out 
    //we are expecting a response to come back after making the request
    $.ajax({
        //the type of request that we want to make
        type: "GET",
        //the url is a json url 
        url: "http://quotes.rest/qod.json",
    }).then(function (response) {
        //then is saying that if all 
        //we are looking through the response API
        //we looked through the response,
        // then the contents inside the response,
        // then the quotes array inside contents, 
        //and then author inside the array

        console.log(response.contents.quotes[0].author);
        //we can see the response of the http request
        console.log(response);
        //adding this to the page
        document.body.append(response.contents.quotes[0].author);
    });

    $.ajax({
        type: "GET",
        url: "https://icanhazdadjoke.com/",
        //we need the dataType set as json because 
        dataType: "json",
    }).then(function (response) {
        console.log(response.joke);
        $("body").prepend(`<p>${response.joke}</p>`);
    });

    $.ajax({
        type: "GET",
    })
});