const app = Vue.createApp({
  data() {
    return {
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
    }
  }
});

app.mount('#events');
