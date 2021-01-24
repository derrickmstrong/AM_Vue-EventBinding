const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      return this.counter = this.counter + num;
    },
    reduce(num) {
      return this.counter = this.counter - num;
    },
    // This method using the native event object (event) as well as another parameter
    setName(event, lastName) {
      return this.name = event.target.value + ' ' + lastName;
    },
    onSubmit() {
      alert('See, I didn\'t reload the page.');
    },
    // Using the Keyup modifier .enter we only see the results of the input field upon pressing enter
    confirmedInput() {
      return this.confirmedName = this.name;
    }
  }
}).mount('#events');
