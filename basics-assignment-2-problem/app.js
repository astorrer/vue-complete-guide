const app = Vue.createApp({
  data() {
    return {
      userInput:''
    };
  }
  methods: {
    showAlert() {
      alert('Hi Again!');
    },
    saveInput(event) {
      this.userInput = event.target.value;
    }
  }
});

app.mount('#assignment')