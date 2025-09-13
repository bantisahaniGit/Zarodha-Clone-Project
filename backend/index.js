const express = require("express");

require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const {HoldingsModel} = require("./model/HoldingsModel");
const {OrdersModel} = require("./model/OrdersModel");
const {PositionsModel} = require("./model/PositionsModel");


const app = express();

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;
app.use(bodyParser.json());
app.use(cors());


main()
    .then(() =>{
        console.log("database is created")
    })
    .catch(() =>{
        console.log("not connected");
    })

async function main() {
    await mongoose.connect(uri);
    
}


// app.get("/positions", async (req, res) => {
//     const tempPositionsData =  [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//     tempPositionsData.forEach(async (el) =>{
//         const newPosition = new PositionsModel({
//             product: el.product,
//             name: el.name,
//             qty: el.qty,
//             avg: el.avg,
//             price: el.price,
//             net: el.net,
//             day: el.day,
//             isLoss: el.isLoss,
//         });
//         await newPosition.save();
//     })
//     res.send("data added to positions collection");
// })


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  
});
