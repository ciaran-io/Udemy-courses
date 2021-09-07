Vue.createApp({
  data() {
    return {
      input:'',
     tasks:[],
     showList: true,
    buttonText:''
    }
  },
  methods: {
    addListItem(){
      this.tasks.push(this.input)
      this.input = ''
    },
    toggleList(){
      this.showList = !this.showList
    }
  },
  computed: {
    buttonCaption(){
      return this.showList && this.tasks.length > 0 ? 'Hide' : 'Show';
    }
    //   if(this.showList && this.tasks.length > 0){
    //     return this.buttomText = 'Hide'
    //   } else {
    //     return this.buttomText = 'Show'
    //   }
    // }
  }
}).mount('#assignment')