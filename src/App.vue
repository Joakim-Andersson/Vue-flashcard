<template>
  <section class="app-body">
    <div id="flashcard-app" class="container">
      <h1>Vegan Flashcards</h1>
      <h3>
        Have fun while learning! <br />
        And add more cards.
      </h3>

      <div class="flashcard-form">
        <label for="front">
          <input
            v-model="newFrontText"
            type="text"
            id="front"
            placeholder="Text on the Front"
          />
        </label>

        <label for="back">
          <input
            v-on:keypress.enter="addNewCard"
            v-model="newBackText"
            type="text"
            id="back"
            placeholder="Text on the Back"
          />
        </label>

        <button v-on:click="addNewCard">Add New Card</button>
        <span v-show="error" class="error"
          >Oops! Flashcards need both front and back.</span
        >
      </div>

      <ul class="flashcard-list">
        <li
          v-bind:key="card.flipped"
          v-on:click="toggleCard(card)"
          v-for="(card, index) in cards"
        >
          <transition name="flip">
            <p v-if="!card.flipped" key="front" class="card frontside">{{ card.front }}
              <span v-on:click="deleteCard(index)" class="delete-card">X</span>
            </p>
            <p v-else key="back" class="card backside">{{ card.back }}
              <span v-on:click="deleteCard(index)" class="delete-card">X</span>
            </p>
          </transition>
        </li>
      </ul>
    </div>

    <footer>
      <p>
        Thank you for investing in the future, and learning more about a climate
        friendly way of living.
      </p>
      <p>
        Brought to you by
        <a href="http://heytherejoakim.com/">Joakim Andersson</a>
      </p>
    </footer>
  </section>
</template>

<script>
const cards = [
  {
    front:
      "How many Litres of water does it take to make a single meat-burger?",
    back: "2393 liters. (Vegan burgers use 75 percent less.)",
    flipped: false,
  },
  {
    front: "What date is the World Vegan Day?",
    back: "1. November.",
    flipped: false,
  },
  {
    front: "How many animals on average does a Vegan save per year?",
    back: "On average 100+ animals.",
    flipped: false,
  },
  {
    front: "True or false: Honey is vegan. ",
    back: "False.",
    flipped: false,
  },
  {
    front: "What year was the word Vegan invented?",
    back: "1944.",
    flipped: false,
  },
  {
    front:
      "How many animals are slaughtered for their meat per hour in the US?",
    back: "Arund 500,000 animals.",
    flipped: false,
  },
  {
    front: "True or false: World's strongest man is vegan. ",
    back: "True. Patrik Baboumian has been vegan since 2011.",
    flipped: false,
  },
  {
    front: "True or false: Omega3 is only obtained from fish. ",
    back: "False. Vegans get their Omega3 from Seeds, Nuts, Seaweed and algae.",
    flipped: false,
  },
];

export default {
  el: "#flashcard-app",
  data() {
    return {
      cards: cards,
      newFrontText: "",
      newBackText: "",
      error: false,
    };
  },
  mounted() {
    if (localStorage.getItem("cards")) {
      try {
        this.cards = JSON.parse(localStorage.getItem("cards"));
      } catch (e) {
        localStorage.removeItem("cards");
      }
    }
  },
  methods: {
    toggleCard: function (card) {
      card.flipped = !card.flipped;
    },
    addNewCard: function () {
      if (!this.newFrontText || !this.newBackText) {
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFrontText,
          back: this.newBackText,
          flipped: false,
        });
        this.saveCards(this.cards), (this.newFrontText = "");
        this.newBackText = "";
        this.error = false;
      }
    },
    deleteCard: function (index) {
      this.cards.splice(index, 1);
      this.saveCards(cards);
    },
    saveCards() {
      const parsed = JSON.stringify(this.cards);
      localStorage.setItem("cards", parsed);
    },
  },
};
</script>

<style>
body {
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0),
      rgba(0, 0, 0, 0.911)
    ),
    url("./assets/background3.jpg");
  background-attachment: fixed;
  background-color: #002c25;
}

.app-body {
  margin: 40px;
}

ul {
  padding: 0;
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  max-width: 1000px;
}

li {
  list-style-type: none;
  padding: 10px 10px;
  transition: all 0.3s ease;
}

.container {
  padding: 2em 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
}

.container h1 {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 5px 0 5px 0;
  color: #005707;
}

.container h3 {
  font-weight: 300;
  margin: 0 10px;
  font-size: 14px;
  color: #1c6b23;
}

.card {
  display: block;
  width: 110px;
  height: 120px;
  padding: 30px 30px 30px 30px;
  border-radius: 7px;
  margin: 2px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
  position: relative;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  -webkit-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  -moz-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  will-change: transform;
}

li:hover {
  transform: scale(1.1);
}

li:nth-child(3n + 1) .frontside {
  background-image: linear-gradient(to right, #48c6ef 0%, #6f86d6 100%);
}
li:nth-child(3n + 1) .backside {
  font-weight: 300;
  background-image: linear-gradient(to left, #48c6ef 0%, #6f86d6 100%);
}

li:nth-child(3n + 2) .frontside {
  background-image: linear-gradient(to right, #f093fb 0%, #f5576c 100%);
}
li:nth-child(3n + 2) .backside {
  font-weight: 300;
  background-image: linear-gradient(to left, #f093fb 0%, #f5576c 100%);
}

li:nth-child(3n + 3) .frontside {
  background-image: linear-gradient(to right, #37ecba 0%, #349645 100%);
}

li:nth-child(3n + 3) .backside {
  font-weight: 300;
  background-image: linear-gradient(to left, #37ecba 0%, #349645 100%);
}

.delete-card {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 15px;
  opacity: 0.7;
  transition: all 0.5s ease;
}

.delete-card:hover,
.error {
  opacity: 1;
  transform: rotate(360deg);
}

.flip-enter-active {
  transition: all 0.5s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter{
  transform: rotateY(180deg);
  opacity: 0;
}

.flip-leave {
  transform: rotateY(-180deg);
  opacity: 0;
}

/* Form */
.flashcard-form {
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

label {
  margin: 0;
  font-weight: 400;
  color: rgb(0, 0, 0);
}

input {
  border-radius: 5px;
  border: 2px solid #eaeaea;
  padding: 10px;
  outline: none;
  margin: 10px 0 10px 10px;
}

button {
  margin: 10px;
  border-radius: 5px;
  border: none;
  background-color: #70a66f;
  padding: 10px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #70a66f;
}

.error {
  margin-top: 10px;
  font-size: 14px;
  display: block;
  color: #ff4437;
  font-weight: 600;
}

footer {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-content: center;
  color: white;
  margin: 20px;
}

footer p {
  align-content: center;
  font-weight: 300;
  margin: 5px;
  font-size: 14px;
}

footer a {
  align-content: center;
  font-weight: 300;
  font-size: 14px;
  text-decoration: underline;
  color: white;
}

@media only screen and (min-width: 900px) {
  .container {
    max-width: 900px;
  }
  .flashcard-form {
    width: 900px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
@media only screen and (min-width: 900px) {
  .container {
    margin: 6%;
  }
}

@media only screen and (min-width: 700px) {
  .flashcard-form {
    width: 700px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
