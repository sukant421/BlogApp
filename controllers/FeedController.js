const dbJson = require("../DummyDb.json");

exports.getFeed = (req, res) => {
  const feedData = dbJson.blogs;
  res.send({
    data1: process.env.JWT_SECRET_KEY || "No Secret Key",
    data2: process.env._JWT_SECRET_KEY || "No Secret Key2",
  });
};
