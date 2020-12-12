<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex">
          <button @click.prevent= "LogoutUser" class="btn btn-outline-success" type="submit">Logout</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container">
    <p>{{userData.nombre}}</p>
    <p>{{userData.email}}</p>
  </div>
</div>
</template>

<script>

export default {
  // name: 'Home',
  data(){
    return{
      userData: {}
    }
  },
  methods: {
    getUserDetails(){
      let userData = localStorage.getItem('user');
      let token = localStorage.getItem('jwt');
      console.log(JSON.parse(userData));

      if(token){
        this.userData= JSON.parse(userData);
      }
    },
    LogoutUser(){
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  },
  created(){
    this.getUserDetails();
  }
}
</script>
