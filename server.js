const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");

const app = express();

//Allow cors origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is listining on port ${PORT}`);
});
