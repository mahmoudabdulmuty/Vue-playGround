const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          username: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          username: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
      ],
      isDetailsVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },

  computed: {
    detailsValue() {
      return this.isDetailsVisible ? 'Hide' : 'Show';
    },
  },
});

app.mount('#app');
