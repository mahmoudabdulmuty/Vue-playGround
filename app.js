const app = Vue.createApp({
  data() {
    return {
      courseGoalOne: 'Finish the course and Learn Vue!',
      courseGoalTwo: 'Master Vue and Build Some Projects!',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      return randomNum > 0.5 ? this.courseGoalOne : this.courseGoalTwo;
    },
  },
});

app.mount('#user-goal');
