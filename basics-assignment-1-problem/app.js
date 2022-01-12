const app = Vue.createApp({
  data() {
    return {
      my_name: 'Aaron',
      my_age: 28,
      imageUrl: 'https://avatars.githubusercontent.com/u/3950312?v=4'
    };
  },
  methods: {
    calculateAge() {
      return this.my_age + 5;
    }
  }
});

app.mount('#assignment');

