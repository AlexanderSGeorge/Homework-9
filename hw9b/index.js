// Serve content of the "public" subfolder directly
app.use(express.static("public"));

// Define an article list
const articles = [
  { id: 1, title: "First article", content: "Hello World!" },
  {
    id: 2,
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
  },
  {
    id: 3,
    title: "Lorem ipsum in French",
    content:
      "J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
  }
];


// Define an article list
const articles = [
  { id: 1, title: "First article", content: "Hello World!" },
  {
    id: 2,
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
  },
  {
    id: 3,
    title: "Lorem ipsum in French",
    content:
      "J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
  }
];


app.get("/ex1", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});


app.post("/ex1", upload.array(), (request, response) => {
  const name = request.body.name;
  const vote = request.body.payment;
  response.send(`${name}, Thank you for your order. We will keep you posted on the delivery status at ${submit}`);
});



app.post("/articles", upload.array(), (request, response) => {
  const title = request.body.title;
  const content = request.body.content;

  const idList = articles.map(article => article.id);

  const maxId = idList.reduce((acc, value) => {
    if (value > acc) return value;
    return acc;
  });
  const id = maxId + 1;
 
  articles.push({ id, title, content });
  response.send(`New article added successfully with ID ${id}!`);
});

app.get("/api/articles", (request, response) => {
  response.json(articles);
});

app.post("/api/countries", jsonParser, (request, response) => {
  const traveler = request.body;
  response.send(
    `Your name is ${traveler.name} and you visited ${traveler.countries
      .length} countries. Keep traveling!`
  );
});
