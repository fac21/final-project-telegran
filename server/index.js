const { response } = require("express");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/slack", (request, response) => {
  response.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
