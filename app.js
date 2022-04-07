const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      if (this.counter === 0) {
        this.counter = 0;
        return;
      }
      this.counter--;
    },
  },
});

app.mount('#events');
