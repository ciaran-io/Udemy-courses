Vue.createApp({
  data: function() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredValue)
      this.enteredValue ="";
    }
  }
}).mount('#app');
