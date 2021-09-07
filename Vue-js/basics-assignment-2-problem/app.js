Vue.createApp({
  data(){
    return {
      counter: 0,
      userInput: '',
      confirmedName: ''
    }
  },
  // watch for counter value and executes when condition is met
  watch: {
    counter(value){
      if(value > 50)
        this.counter = 0;
    }
  },
  methods: {
    alertMessage(){
      alert("Hello! I am an alert box!!");
    },
    // uses v-model to bind user input
    // showUserInput(event){
    //   this.userInput =  this.userInput + event.target.value
    // },
    confirmUserInput(){
      this.confirmedName = this.userInput
      this.userInput = ''
    },
    deleteUserInput(){
      this.userInput = ''
    },
    add(number){
      this.counter = this.counter + number
    },
    subtract(number){
      this.counter = this.counter - number
    }
    

  }
}).mount('#assignment')