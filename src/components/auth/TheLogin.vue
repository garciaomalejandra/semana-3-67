<template>
    <form>
        <div class="form-group">
            <label for="exampleInputUser1">User</label>
            <input v-model="login.email" type="email" class="form-control" id="exampleInputUser1">
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
                user:'',
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