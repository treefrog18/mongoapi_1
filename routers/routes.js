var express = require("express");
var router = express.Router();
// 스키마 구조를 가져오기 위해서 require
var User = require("../models/contactModel");

router.get("/", function (req, res) {
  //   res.send("Hello SeoCho!!");
  res.render("index", { name: "최영욱" });
});

router.post("/signup", function (req, res) {
  console.log(req.body[1].name);
  res.send("Success");
});

//exports해야 인식된다.
module.exports = router;
