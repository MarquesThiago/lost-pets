'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.createTable('cadsatro', { 
    
    num_idenf_cad: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    nom_pessoa_cad: {
      type: Sequelize.STRING,
      allowNull: false 
    },

    nickname: {
      type: Sequelize.STRING,
      allowNull: true
    },

    num_cpf_cnpj: {
      type: Sequelize.INTEGER(14),
      allowNull: false
    },

    nome_email: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    password: {
      type: Sequelize.STRING(24),
      allowNull:false
    },

    cod_status: {
      type: Sequelize.CHAR(1),
      allowNull: false,
      defaultValue:"A"
    },

    cod_tipo_pessoa: {
      type: Sequelize.CHAR(1),
      allowNull: false,
      defaultValue: "F"
    },

    desc_mission: {
      type: Sequelize.STRING,
      allowNull: true
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    },

    num_ident_ender: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model:'endereco',
        key: 'num_ident_ender'
      },
      allowNull: false
    },
    
    Num_idenf_tel: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'telefone',
        key: 'Num_idenf_tel'
      },
      allowNull: false
    },

    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('cadastro');

  }
};
