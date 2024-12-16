exports.healthCheck = (req, res) => {
  const resp = { status: 200, health: "up and running : healthy" };
  res.send(resp);
};
