var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/burger", function (req, res) {
    burger.create([
        "name", "devour"
    ], [
        req.body.name, req.body.devour
    ], function(result) {
        res.json({ id: result.insertId })
        
    });
});

router.put("/api/burger/:id", function (req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devour: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status (404).end();
        } else {
            res.status(200).end();
        }
    });
    });


    router.put("/api/burger/:id", function (req, res){
        var condition = "id = " + req.params.id;
    
        console.log("condition", condition);

    burger.delete(condition, function (res) {
        if (res.affectedRows == 0) {
            return (res.status(404).end())
        } else {
            res.status(200).end()
        }
    }) 
});



module.exports = router; 