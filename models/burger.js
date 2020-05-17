var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) { 
            cb(res);
        });
    } ,

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVlas, condition, cb) {
        orm.update("burgers", objColVlas, condition, function(res) {
            cb(res);
        });
    },

    delete: function (cb) {
        orm.delete("burgers", function(res) {
            cb(res);
        });
    }
    

}

module.exports = burger;