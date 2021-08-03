import express from "express"
import { Crypto } from "../../../models/index.js"

const searchRouter = new express.Router()

// searchRouter.get("/", async (req, res) => {
//   try {
//     const Cryptos = await Crypto.query()
//   }
// })