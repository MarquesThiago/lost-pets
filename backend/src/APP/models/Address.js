module.exports = (Sequelize, DataTypes) => {
    const Address = Sequelize.define("Endereco", {
        num_ident_ender: DataTypes.INTEGER,
        num_resid: DataTypes.INTEGER,
        nome_rua : DataTypes.STRING,
        desc_complement:DataTypes.STRING,
        nome_bairro: DataTypes.STRING,
        codigo_UF : DataTypes.CHAR(2),

    } )

    return Address
}