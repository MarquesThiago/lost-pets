const Address = require("./Address")
const Phone = require("./Phone")


module.exports = (Sequelize, DataTypes) => {
    const Register = Sequelize.define("Cadastro", {
        
        num_idenf_cad: DataTypes.INTEGER,
        nom_pessoa_cad: DataTypes.STRING,
        nickname: DataTypes.STRING,
        num_cpf_cnpj: DataTypes.INTEGER(14),
        nome_email: DataTypes.INTEGER,
        password: DataTypes.STRING(24),
        cod_status: DataTypes.CHAR(1),
        cod_tipo_pessoa: DataTypes.CHAR(1),
        desc_mission: DataTypes.STRING,
        num_ident_ender:DataTypes.INTEGER,
        Num_idenf_tel: DataTypes.INTEGER,
    })

    Register.hasMany(Address, {through: 'cadastro_per_endereco'})
    Register.belongsToMany(Phone, {through: 'cadastro_per_telefone'})

    return Register
}