exports.healthCheck = (req, res) => {
  const resp = { status: 200, health: "healthy and running" };
  res.send(resp);
};
