Vue.createApp({
  data() {
    return {
      USERDATA: [{ name: 'Ciaran', age: 26 }],
      imageLink: "https://www.mozilla.org/media/img/firefox/template/page-image-master.1b6efe3d5631.jpg"
    };
  },
  methods: {
    randomNum(){
     return Math.floor(Math.random() * 2);
    }
  }
}).mount('#assignment');
