const app = Vue.createApp({
  data() {
    return {
      firstName: 'Mahmoud',
      lastName: 'Abdulmuty',
      email: 'mahmoudabdulmuty@gmail.com',
      company: 'Algoriza',
      picture: 'https://randomuser.me/api/portraits/men/25.jpg',
      gender: 'male',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api/');
      const { results } = await res.json();
      const {
        gender,
        name: { first, last },
        email,
        picture: { large },
      } = results.at(0);

      this.firstName = first;
      this.lastName = last;
      this.email = email;
      this.picture = large;
      this.gender = gender;
    },
  },
});

app.mount('#app');
