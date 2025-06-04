const requestserver = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
  }
};
