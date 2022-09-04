'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('telefone', { 
        
        Num_idenf_tel: { 
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false
        },
      
        cod_ddd: {
          type: Sequelize.INTEGER(2),
          allowNull: false
        },
        num_telefone: {
          type: Sequelize.INTEGER(9),
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('telefone')
  }
};
