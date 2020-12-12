<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex float-right">
            <button
              @click.prevent="LogoutUser"
              class="btn btn-outline-light"
              type="submit"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>

    <div class="card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="require('../../public/resources/perfil.png')" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ userData.nombre }}</h5>
            <p class="card-text">
              Carlos es veterinario y por su puesto su amor por los animales es lo que más se destaca él. Le gusta el rock y en sus ratos libres se dedica a tocar la guitarra eléctrica con un grupo de amigos de la infancia.
            </p>
            <p class="card-text">
              <small class="text-muted">{{ userData.email }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Home',
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    getUserDetails() {
      let userData = localStorage.getItem("user");
      let token = localStorage.getItem("jwt");
      console.log(JSON.parse(userData));

      if (token) {
        this.userData = JSON.parse(userData);
      }
    },
    LogoutUser() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>

<style scoped>
.navbar {
  background-color: #73c6b6;
  
}
.card{
  width: auto; 
  margin: auto auto;
  margin-top: 50px;
} 

</style>