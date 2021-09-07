const app = Vue.createApp({
  data() {
    return { goals: [], input: '' };
  },
  methods: {
    addGoal: function(){
      this.goals.push(this.input)
      this.input = ''
      console.log(this.goals)
    }
  },
  // watch:{
  //   input
  // }
});

app.mount('#user-goals');
