'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'endereco', { 
        num_ident_ender: {
          type: Sequelize.Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allownull: false

        },
        num_resid: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        nome_rua : {
            type: Sequelize.STRING,
            allowNull: false
        },
        desc_complement: {
            type: Sequelize.STRING
        },
        nome_bairro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        codigo_UF : {
            type: Sequelize.CHAR,
            allowNull: false
        }
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('endereco');
  }
};
