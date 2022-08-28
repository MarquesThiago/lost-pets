const db = require("../connetion")
const  { DataTypes }  =  require("sequelize")

const Address = db.define("endereco", {

    num_ident_ender: {
        type: DataTy.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    num_resid: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    nome_rua : {
        type: DataTypes.STRING,
        allowNull: false
    },
    desc_complement: {
        type: DataTypes.STRING
    },
    nome_bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo_UF : {
        type: DataTypes.CHAR,
        allowNull: false
    }
    

}
); 

module.exports = Address 