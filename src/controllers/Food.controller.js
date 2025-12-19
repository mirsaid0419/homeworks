import { isValidObjectId } from "mongoose";
import Food from "../models/food.model.js";
import { join, resolve } from "path";
import Order from "../models/order.model.js";
const path = join(process.cwd(), "src", "images");

class Foods {
    addFood = async (req, res) => {
        try {
            const { foodname } = req.body;
            if (!foodname) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "malumotlar yetarli emas",
                });
            }
            const foodPath = join(process.cwd(), "src", `images`, `${foodname}.jpg`);
            const exisFoodPhoto = await Food.findOne({ foodname });
            if (exisFoodPhoto) {
                return res.status(409).json({ message: "bunday maxsulot mavjud" });
            }
      await Food.create({ foodname, foodphoto: foodPath });
      return res.status(201).json({ message: "food success created" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  getAllFoods = async (_, res) => {
    try {
      const allData = await Food.find();
      if (allData.length === 0) {
        return res.status(200).json({
          message: "hali food mavjud emas",
        });
      }
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
}

export default new Foods()