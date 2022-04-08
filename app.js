const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      console.log('running');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Abdulmuty';
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount('#events');
