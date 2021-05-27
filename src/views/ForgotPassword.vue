<template>
    <div class="forgotpassword">
          <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-offset-3 col-md-6">
                    <form class="form" @submit.prevent="passReset">
                        <span class="heading">Сброс пароля</span>
                        <div class="form-group">
                        <input type="email" class="form-control" id="inputEmail" placeholder="E-mail" v-model.trim="email" required>
                        </div>

                        <div class="form-group">
                        <button type="submit" class="btn" @click="authorize">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
        email: '',
        error: null,
        emailSending: false
    };
  },
  methods: {
    passReset() {
        if (!this.email) {
            this.error = "Почта указана некорректно.";
            return;
        } 
    this.error = null;
    this.emailSending = true;
    firebase.auth().sendPasswordResetEmail(this.email)
    .then(() => {
      this.emailSending = false;
    })
      alert ('Отправлено')
    .catch(error => {
      this.emailSending = false;
      this.error = error.message;
    });
    }
  }
}
</script>