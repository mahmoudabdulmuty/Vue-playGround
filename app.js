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
      areDetailsVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.areDetailsVisible = !this.areDetailsVisible;
    },
  },

  computed: {
    detailsValue() {
      return this.areDetailsVisible ? 'Hide' : 'Show';
    },
  },
});

app.mount('#app');
