const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increase(num) {
      this.counter += num;
    },
    decrease(num) {
      if (this.counter === 0) {
        this.counter = 0;
      } else {
        this.counter -= num;
      }
    },
  },
});

app.mount('#events');
