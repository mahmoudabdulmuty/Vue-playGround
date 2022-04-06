const assignment = Vue.createApp({
  data() {
    return {
      username: 'Mahmoud Abdulmuty',
      age: 29,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
    };
  },
  methods: {
    randomNum() {
      return Math.random();
    },
  },
});

assignment.mount('#assignment');
