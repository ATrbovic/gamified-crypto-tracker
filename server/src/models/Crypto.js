const Model = require("./Model.js")

class Show extends Model {
  static get tableName() {
    return "cryptos"
  }


}

module.exports = Crypto