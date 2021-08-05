import got from "got";

const CoinMarketApiKey = "";

class CoinMarketClient {
  static async getCryptos() {
    try{
      const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`
      const apiResponse = await got(url);
      const responseBody = apiResponse.body;
      return responseBody;
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default CoinMarketClient