'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('pets', { 
      
      num_idef_pet: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull:false
      },
    
      nome_tutor: {
        type: Sequelize.STRING,
        allowNull: false
      },

      nome_pet: {
        type: Sequelize.STRING,
        allowNull: true
      },

      nome_raca: {
        type: Sequelize.STRING,
        allowNull: true
      },

      num_idade: {
        type: Sequelize.INTEGER,
        allowNull: true
      },

      desc_story: {
        type: Sequelize.STRING,
        allowNull: true
      },

      cod_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "A"
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
  
      num_ident_cad: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model:'cadastro',
          key: 'num_ident_cad'
        },
        allowNull: false
      },

    
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('pet');
  }
};
