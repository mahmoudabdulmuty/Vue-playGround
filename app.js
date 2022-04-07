const app = Vue.createApp({
  data() {
    return {
      output: '',
      confirmed: '',
    };
  },
  methods: {
    showAlert(text) {
      alert(text);
    },
    showName(e) {
      this.output = e.target.value;
    },
    showConfirmed() {
      this.confirmed = this.output;
    },
  },
});

app.mount('#assignment');
