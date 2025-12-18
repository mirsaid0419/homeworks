import { config } from "dotenv";

config()

export default{
    PORT:Number(process.env.PORT),
    URI:process.env.MONGO_URI
}