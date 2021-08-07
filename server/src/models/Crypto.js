const Model = require("./Model.js")

class Crypto extends Model {
  static get tableName() {
    return "cryptos"
  }

  static get relationMappings() {
    
  }

}

module.exports = Crypto