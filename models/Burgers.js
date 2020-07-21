module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {

        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 30]
            }
        },

        devourBurger: {
            type: DataTypes.BOOLEAN
           
        }
    });


    return Burger;
}

