const app = Vue.createApp({
  data() {
    return {
      name: '',
      counter: 0,
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
    setName: function(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
