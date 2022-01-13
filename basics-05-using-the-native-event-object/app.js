const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = ''
    },
    outputFullName() {
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Storrer';
    }
  },
  computed: {
    fullname() {
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Storrer';
    }
  }
  //watch: {
  //  if (value === '') {
  //    this.fullname = ''
  //  },
  //  name(value) {
  //    this.fullname = value + ' ' + 'Storrer';
  //  }
  //}
});

app.mount('#events');
