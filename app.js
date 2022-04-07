const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      username: '',
      confirmedName: '',
    };
  },

  methods: {
    setConfirmed() {
      this.confirmedName = this.username;
    },
    setName(event, lastName) {
      this.username = event.target.value + ' ' + lastName;
    },
    increase(num) {
      this.counter += num;
    },
    decrease(num) {
      this.counter -= num;
    },
  },
});

app.mount('#events');
