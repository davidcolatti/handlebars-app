const express = require("express");
const app = express();
const PORT = 3000;

const handlebars = require("express-handlebars");

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: "hbs",
    defaultLayout: "index",
    partialsDir: `${__dirname}/views/partials`,
  })
);

app.use(express.static("public"));

const fakeApi = () => {
  return [
    {
      name: "Katarina",
      lane: "midlaner",
    },
    {
      name: "Jayce",
      lane: "toplaner",
    },
    {
      name: "Heimerdinger",
      lane: "toplaner",
    },
    {
      name: "Zed",
      lane: "midlaner",
    },
    {
      name: "Azir",
      lane: "midlaner",
    },
  ];
};

const list = true;

app.get("/", (req, res) => {
  res.render("main", {
    layout: "index",
    suggestedChamps: fakeApi(),
    listExists: list,
  });
});

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
