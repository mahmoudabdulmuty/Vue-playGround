const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      userInput: '',
      isVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isVisible ? 'Hide' : 'Show';
    },
  },
  methods: {
    addTask() {
      if (this.userInput) {
        this.tasks.push(this.userInput);
        this.userInput = '';
      }
    },
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
