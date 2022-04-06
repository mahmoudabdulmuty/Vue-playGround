const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and Learn Vue',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      return randomNum > 0.5 ? 'Learn Vue!' : 'Master Vue';
    },
  },
});

app.mount('#user-goal');
