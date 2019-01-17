(() => {

// create a component first
const HomePageComponent = {
  template: "<h2> This is the home page</h2>"
}

const UsersPageComponent = {
  template: "<h2> This is the users page</h2>"
}

const contactPageComponent = {
  template: " <h2> This is the contact page </h2>"
}

const routes = [
  {path: '/', name: 'home', component: HomePageComponent},
  {path: '/contact', name: 'contact' , component: contactPageComponent},
  {path: '/users', name: 'users' , component: UsersPageComponent}
]


const router = new VueRouter({
  routes
});

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
    'homepagecomponent': HomePageComponent,
    'userspagecomponent': UsersPageComponent,
    'contactcomponent': contactPageComponent

  },
  router
});

})();
