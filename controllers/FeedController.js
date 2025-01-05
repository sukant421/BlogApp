const dbJson = require("../DummyDb.json");

exports.getFeed = (req, res) => {
  const feedData = dbJson.blogs;
  res.send({ data: process.env.JWT_SECRET_KEY || "No Secret Key" });
};
