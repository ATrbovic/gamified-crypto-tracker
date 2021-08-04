import got from "got";

const messariApiKey = "";

class MessariClient {
  static async getCryptos() {
    try{
      const url = ``
      const apiResponse = await got(url);
      const responseBody = apiResponse.body;
      return responseBody;
    } catch (erro) {
      return {error: error.message}
    }
  }
}