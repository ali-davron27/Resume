new Vue({ 
el:"#app",
data:{
  name:'',
  // x:0,
  // y:0 
},

methods:{
update(){
setTimeout(()=>{
    this.name = 'ALI'
},5000)  
},


// changeName(){
// this.name = 'Davoo'
// },

// graph(event){
// this.x=event.clientX;
// this.y=event.clientY;
// }

    },
})





