const app = Vue.createApp({
  data() {
    return { goals: [], goal: '' };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal);
    },
    removeItem(i) {
      this.goals.splice(i, 1);
    },
  },
});

app.mount('#user-goals');


