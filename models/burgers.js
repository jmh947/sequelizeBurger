 module.exports= function(sequelize, DataTypes) {	
    var Burger = sequelize.define("Burger", {	

        burgerName: {	
            type: DataTypes.STRING
            
        },	

        devourBurger: {	
            type: DataTypes.BOOLEAN	

        }	
    });	


    return Burger;	
}