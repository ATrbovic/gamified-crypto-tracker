const Model = require("./Model.js")

class Crypto extends Model {
  static get tableName() {
    return "cryptos"
  }


}

module.exports = Crypto