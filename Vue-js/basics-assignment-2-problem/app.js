Vue.createApp({
  data(){
    return {
      userInput: '',
      confirmedName: ''
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
    }

  }
}).mount('#assignment')