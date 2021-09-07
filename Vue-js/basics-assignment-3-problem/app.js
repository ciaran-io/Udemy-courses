Vue.createApp({
  data(){
    return {
      count: 0,
    }
  },
  computed: {
    newMessage(){
      if(this.count < 37){
        console.log('message')
        return  'Not there yet'
      } else if (this.count > 37)  {
        return  'Too much'
      } else {
        return  '37'
      }
    }
  },
  methods: {
    add(num){
      this.count = this.count + num
    },
    resetCount(){
      this.count = 0
    }
  },
  watch: {
    count(value){
      if(value > 0){
        // this keyword does not refer to this inside setTimeout function: store this in varaible
        const that = this
        // Es6 anonymous function: no brackets needed or return statement
        setTimeout(() => that.count = 0
        ,5000
        )
      }
    }
  }
}).mount('#assignment')