const app = Vue.createApp({
  data() {
    return {
      list: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.list.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
});

app.mount('#app');

// const buttonEl = document.querySelector('button');
// const list = document.querySelector('ul');
// const input = document.querySelector('input');

// const addGoal = () => {
//   let enteredValue = input.value;
//   if (enteredValue) {
//     const li = document.createElement('li');
//     li.textContent = enteredValue;
//     list.append(li);
//     input.value = '';
//   }
// };

// buttonEl.addEventListener('click', addGoal);
