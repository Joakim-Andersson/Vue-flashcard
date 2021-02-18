const cards = [
    {
      front: 'How many Litres of water does it take to make a single meat-burger?',
      back: '2393 liters. Vegan burger uses 75 percent less water.',
      flipped: false,
    },
    {
      front: 'How many animals on average does a Vegan save per year?',
      back: 'On average 100+ animals.',
      flipped: false,
  
    },
    {
      front: 'How many animals are slaugthered for their meat per hour in the US?',
      back: 'Arund 500,000 animals.',
      flipped: false,
    },
    {
      front: 'True or false: Honey is vegan? ',
      back: 'False.',
      flipped: false,
    },
  ]; 


  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFrontText: '',
      newBackText: '',
      error: false,
    },
    mounted() {
      if (localStorage.getItem('cards')) {
        try {
          this.cards = JSON.parse(localStorage.getItem('cards'));
        } catch(e) {
          localStorage.removeItem('cards');
        }
      }
    },
    methods: {
      toggleCard: function(card) {
        card.flipped = !card.flipped
      },
      addNewCard: function() {
        if (!this.newFrontText || !this.newBackText) {
          this.error = true;
        } else {
        this.cards.push({
          front: this.newFrontText,
          back: this.newBackText,
          flipped: false,
        });
        this.saveCards(this.cards),
        this.newFrontText =''
        this.newBackText = '';
        this.error = false;
      }
      },
      deleteCard: function(index) {
        this.cards.splice(index, 1)
        this.saveCards(cards)
      },
      saveCards() {
        const parsed = JSON.stringify(this.cards);
        localStorage.setItem('cards', parsed);
      }
    }
  });