const db = require("../connetion")
const  { DataTypes } =  require("sequelize")

const Phone = db.define( "telefone", {
    codigo_dd: {
        type: DataTy.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    num_telefone : {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allownull: false

    }

})

module.exports = Phone