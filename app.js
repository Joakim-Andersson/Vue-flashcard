const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
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
      this.saveCards()
      if (localStorage.getItem('cards')) {
        try {
          this.cats = JSON.parse(localStorage.getItem('cards'));
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
        this.saveCards(),
        this.newFrontText =''
        this.newBackText = '';
        this.error = false;
      }
      },
      deleteCard: function(index) {
        this.cards.splice(index, 1)
        this.saveCards()
      },
      saveCards() {
        const parsed = JSON.stringify(this.cards);
        localStorage.setItem('cards', parsed);
      }
    }
  });