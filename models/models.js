module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {

        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 30]
            }
        },

        devourBurger: {
            devoured: DataTypes.BOOLEAN
           
        }
    });

    Burger.associate = function(models) {
        models.Burger.belongsTo(models.models.js, { onDelete: 'cascade' });
    };


    return Burger;
}