exports.healthCheck = (req, res) => {
  const resp = { status: 200, health: "healthy" };
  res.send(resp);
};
