const Sequelize =  require('sequelize')
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}

const dbLocal =  "../DB/registers.sqlite"
const dbLanguage  =  'sqlite'

const sequelize = new Sequelize({
    dialect: dbLanguage,
    storage: dbLocal
})

module.exports =  sequelize