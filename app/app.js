var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

/*mongoose = require('mongoose');*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {

    var json_rest =
         [
            {
                name : "Hotel Emperador",
                stars : "3",
                price : "1596"
            },
            {
                name : "Petit Palace San Bernardo",
                stars : "4",
                price : "2145"
            },
            {
                name : "Hotel Nuevo Boston",
                stars : "2",
                price : "861"
            }
        ]
    ;

    res.header("Access-Control-Allow-Origin", '*'); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    //res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
    res.header("Cf-Ray", "374ffe9959e852c0-MIA");
    res.header("Content-Type", "application/json,charset=utf-8");


    res.status(200).jsonp(json_rest);

});

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});