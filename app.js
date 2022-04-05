const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and Learn Vue',
      vueLink: 'https://vuejs.org/',
    };
  },
});

app.mount('#user-goal');
