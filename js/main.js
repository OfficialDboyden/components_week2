(() => {

// create a component first
const UserComponent = {
  props: ['name', 'role'],


  template: "#userstemplate",

  created: function(){
    console.log("im aliiiiiiiveee!");
  },

  methods: {
    logFromChild() {
      console.log("logged from component");
    },

    passEvent() {
      this.$emit('shoutup');
    }
  }
}
// then your vue instance

const vm = new Vue({
  el: "#app",

  data: {
    testmessage: "sup"
  },


methods: {
    calledOnParent() {
      console.log("This method lives in the main VM and was called from a component");
    }
},

created: function() {
  console.log("blah blah");
},

  components: {
    'activeusers' : UserComponent
  }

})

})();
