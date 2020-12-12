<template>
  <div >
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img
              class="img-login"
              :src="require('../../../public/resources/img-login.png')"
            />
          </div>
          <div class="col-6">
            <form class="form">
              <div class="form-group">
                <img
                  class="icon-user"
                  :src="require('../../../public/resources/user.png')"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputUser1">User</label>
                <input
                  v-model="login.email"
                  type="email"
                  class="form-control"
                  id="exampleInputUser1"
                />
              </div>
              <div class="form-group">
                <label  for="exampleInputPassword1">Password</label>
                <input
                  v-model="login.password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                @click.prevent="LoginUser"
                type="submit"
                class="btn btn-light btn-sm"
              >
                Login
              </button>
              <!-- <pre>{{$data}}</pre> -->
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      login: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    async LoginUser() {
      try {
        let response = await this.$http.post("/api/usuario/login", this.login);
        console.log(response.data);

        // ¡¡¡¡Cambio aquí!!!! tokenReturn por el nombre del token y user por el nombre del usuario en nuestra DB.
        let token = response.data.tokenReturn;
        let userData = response.data.user;

        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(userData));

        if (token) {
          this.$router.push("/home");
        }
        swal("Great!", "Welcome back :D", "success");
      } catch (error) {
        console.log(error);
        swal("Oops!", "Incorrect username or password D:", "error");
      }
    },
  },
};
</script>

<style scoped>
.container {
margin-top: 100px;
  background-color:#73C6B6;
  opacity: .7;
  width: 800px;
  border-radius: 5px;
}
.form {
  padding: 70px;
  text-align: center;
}

.img-login {
  width: 100%;
  margin-top: 20px;
  margin-left: 35px;
}

.col-6 {
  height: 500px;
}

.icon-user {
  width: 100px;
  height: 100px;
}




</style>