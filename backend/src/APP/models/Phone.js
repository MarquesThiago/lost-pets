module.exports = (Sequelize, DataTypes) => {
    const Phone = Sequelize.define("Telefone", {
        Num_idenf_tel: DataTypes.INTEGER,
        cod_ddd: DataTypes.INTEGER(2),
        num_telefone: DataTypes.INTEGER(9),

    })

    return Phone
}