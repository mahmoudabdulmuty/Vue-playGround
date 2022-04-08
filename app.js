const app = Vue.createApp({
  data() {
    return {
      className: '',
      hidden: false,
      visible: true,
      inlineStyle: '',
    };
  },
  computed: {
    boxClasses() {
      return {
        hidden: this.hidden,
        visible: this.visible,
      };
    },
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden;
      this.visible = !this.visible;
    },
  },
});

app.mount('#assignment');
