const natural = require("natural");
const app = require("./app");

const PORT = process.env.PORT || 5000;

// Initialize Natural language tokenizer
const tokenizer = new natural.WordTokenizer();

app.listen(PORT, () => {
  console.log(`GiftLink API running on port ${PORT}`);
  console.log("Natural NLP package loaded:", !!tokenizer);
});