const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Restart");
});
const users = [
  { id: 1, name: "Afridi1", roll: "0121" },
  { id: 2, name: "Afridi2", roll: "0122" },
  { id: 3, name: "Afridi3", roll: "0123" },
  { id: 4, name: "Afridi4", roll: "0124" },
  { id: 5, name: "Afridi5", roll: "0125" },
  { id: 6, name: "Afridi6", roll: "0126" },
];
app.get("/user", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const match = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(match);
  } else {
    res.send(users);
  }
});
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  res.send(user);
});
app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening", port);
});
