const Register = require("./Register")

module.exports = (Sequelize, DataTypes) => {
    const Pets = Sequelize.define("Pet", {
        num_idef_pet: DataTypes.INTEGER,
        nome_tutor: DataTypes.STRING,
        nome_pet: DataTypes.STRING,
        nome_raca: DataTypes.STRING,
        num_idade: DataTypes.INTEGER,
        desc_story: DataTypes.STRING,
        cod_status: DataTypes.STRING,
        num_ident_cad: DataTypes.INTEGER,

    })

    Pets.hasOne( Register, {through: "anuncia"})

    return Pets
}