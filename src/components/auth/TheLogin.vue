<template>
    <form>
        <div class="form-group">
            <!-- Cambios: >User< -->
            <label for="exampleInputEmail1">Email</label>
            <!-- Cambios: type="text", id="exampleInputUser1" -->
            <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button @click.prevent= "LoginUser" type="submit" class="btn btn-primary">Login</button>
    <!-- <pre>{{$data}}</pre> -->
    </form>
</template>

<script>
import swal from 'sweetalert'
export default {
    data(){
        return{
            login:{
                // Cambios: user
                email:'',
                password:''
            },
        }
    },
    methods:{
        async LoginUser(){
            try{
                let response= await this.$http.post('/api/usuario/login', this.login);
                console.log(response.data);

                // ¡¡¡¡Cambio aquí!!!! tokenReturn por el nombre del token y user por el nombre del usuario en nuestra DB.
                let token= response.data.tokenReturn;
                let userData= response.data.user;

                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(userData));

                if(token){
                    this.$router.push('/home');
                }
                swal('Great!', "Welcome back :D", 'success');
            }
            catch(error){
                console.log(error);
                swal('Oops!', 'Incorrect username or password D:', 'error');
            }
        }
    }
}
</script>

<style scoped>

</style>