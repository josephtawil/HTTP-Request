$(document).ready(function () {
    //ajax is a function
    //it is a request going out 
    //we are expecting a response to come back after making the request
    $.ajax({
        //the type of request that we want to make
        type: "GET",
        url: "http://quotes.rest/qod.json",
    }).then(function (response) {
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
    //then is saying that if all 
});