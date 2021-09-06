const app = Vue.createApp({
  data() {
    return {
      counter: 10,
    };
  },
  methods: {
    addCounter: function(){
      this.counter++;
    },
    reduceCounter: function(){
      if(this.counter >=1)
      this.counter--;
    },
    reduceCounterBY(ammount){
      this.counter = this.counter - ammount
    },
    submitForm: function(){
      alert('Please enter Name')
    }
  }
});

app.mount('#events');
