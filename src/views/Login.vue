<template>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-offset-3 col-md-6">
                <form class="form" @submit.prevent="userlogin">
                    <span class="heading">АВТОРИЗАЦИЯ</span>
                    <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" placeholder="E-mail" v-model.trim="email" required>
                    </div>

                    <div class="form-group">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model.trim="password" required>
                    </div>

                    <div class="form-group">
                    <button type="submit" class="btn" @click="authorize">ВХОД</button>
                    </div>
                    <div>
                        <router-link class="nav-link" to="/forgot-password">Забыли пароль?</router-link>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data:() => ({    
        email: "",
        password: ""
    }),
    methods: {
        async userlogin() {
            const formData = {
                email: this.email,
                password: this.password
            }

        try {
            await this.$store.dispatch('login', formData)
            this.$router.push('/select-role')
        } catch(e) {}
            
        console.log (formData)        
        }
    },
}
</script>
