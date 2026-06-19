Vue.createApp({
  data() {
    return {
	    imageUrl: "kenmoti.jpg"
    };
  },
  
  methods:{
      changeImage(){
          this.imageUrl = "kenmoti_naguru.jpg"
      }
  }
}).mount('#app');