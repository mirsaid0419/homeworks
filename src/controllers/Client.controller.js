import { isValidObjectId } from "mongoose";
import Client from "../models/client.model.js";

class ClientControl {
  addClient = async (req, res) => {
    try {
      const { clientname, telephone } = req.body;
      if (!clientname || !telephone) {
        return res.status(400).json({
          statusCode: 400,
          message: "malumotlar yetarli emas",
        });
      }
      const uzPhoneRegex = /^(\+998|998|0)(9[0-9])[0-9]{7}$/;
      if (!uzPhoneRegex.test(telephone)) {
        return res.status(400).json({
          message: "telefon raqami standartga mos emas",
        });
      }
      const existPhone = await Client.findOne({ telephone });
      if (existPhone) {
        return res
          .status(409)
          .json({ message: "Bu telefon allaqachon mavjud" });
      }
      const newClient = await Client.create({ clientname, telephone });
      return res.status(201).json(newClient);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getAllClients = async (req, res) => {
    try {
      const allData = await Client.find();
      if(allData.length===0){
        return res.status(200).json({
          message:"hali client mavjud emas"
        })
      }
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  getClientById = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id || !isValidObjectId(id)) {
        return res.status(400).json({
          message: "Id mavjud emas",
        });
      }
      const client = await Client.findById(id);
      if (!client) {
        return res.status(404).json({ message: "client not found" });
      }
      return res
        .status(200)
        .json({ statusCode: 200, message: "succes", client });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
export default new ClientControl()
