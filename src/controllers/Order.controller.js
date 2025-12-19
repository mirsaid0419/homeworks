import Order from "../models/order.model.js";

class Orders {
  addOrder = async (req, res) => {
    try {
      const { foodId, clientId, quantity } = req.body;
      if (!foodId || !clientId || !quantity) {
        return res.status(400).json({
          statusCode: 400,
          message: "malumotlar yetarli emas",
        });
      }
      await Order.create({ foodId, clientId, quantity });
      return res.status(201).json({ message: "food success created" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  getOrderById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id)) {
        return res.status(400).json({ message: "id hatoligi" });
      }
      const userOrders = await Order.find({ clientId: id })
        .populate("foodId", "foodname")
        .populate("clientId", "clientname");
      if (userOrders.length===0) {
        return res.status(200).json({
          message: "hali buyurtma mavjud emas",
        });
      }
      return res.status(200).json({ userOrders });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  orderDeleteById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id)) {
        return res.status(400).json({ message: "id hatoligi" });
      }
      const existOrders = await Order.findByIdAndDelete(id);
      if (!existOrders) {
        return res.status(404).json({
          message: "bunday buyurtma mavjud emas",
        });
      }
      return res.status(200).json({ message: "order success deleted" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default new Orders()