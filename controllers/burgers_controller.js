var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    db.burger.findAll({}).then(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    }); 
    });

router.post("/api/burger", function (req, res) {
    console.log(req.body)
    db.burger.create({
        burgerName: req.body.burgerName,
        devourBurger: req.body.devourBurger
    }).then(function(result){
        res.json(result);
    }).catch(function(err){
        res.json(err);
    })
});

router.put("/api/burger/:id", function (req, res){
    db.burger.update({
        devourBurger: req.body.devourBurger
    },{
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    }).catch(function(err){
        res.json(err);
    });
});
  

     
   router.delete("/api/burger/:id", function (res, req){
       db.burger.destroy({
           where: {
               id: req.params.id
           }
       }).then(function(result){
        res.json(result);
    }).catch(function(err){
        res.json(err);
    });
   })



module.exports = router; 