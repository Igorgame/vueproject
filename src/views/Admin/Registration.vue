<template>
  <div class="userregistration">
    <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-offset-3 col-md-6">
            <form class="form" @submit.prevent="userRegistration">
              <span class="heading">Регистрация</span>

              <div class="form-group">
                <input type="text" class="form-control" v-model="surname" placeholder="Фамилия"/>
              </div>

              <div class="form-group">
                <input type="text" class="form-control" v-model="name" placeholder="Имя"/>
              </div>

                <div class="form-group">
                  <input type="text" class="form-control" v-model="patronymic" placeholder="Отчество"/>
              </div>

              <div class="form-group">
                <input type="text" class="form-control" v-model="phone" placeholder="Телефон"/>
              </div>

              <div class="form-group">
                <input type="email" class="form-control" v-model="email" placeholder="Email"/>
              </div>

              <div class="form-group">
                <input type="password" class="form-control" v-model="password" placeholder="Пароль"/>
              </div>

              <div class="form-group">
                <select type="text" class="form-control" v-model="role">
                  <option disabled value="">Выберите один из вариантов</option>
                  <option value="admin">Администратор</option>
                  <option value="customer">Заказчик</option>
                  <option value="executor">Исполнитель</option>
                </select>
              </div>
              
              <div class="btns">
                <button type="submit" class="btn">
                  Регистрация
                </button>
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
  name: 'registration',
  data: () => ({
    
      surname: '',
      name: '',
      patronymic: '',
      phone: '',
      email: '',
      password: '',
      role: ''

  }),
  
  methods: {
    async userRegistration() {
        const formData = {
            surname: this.surname,
            name: this.name,
            patronymic: this.patronymic,
            phone: this.phone,
            email: this.email,
            password: this.password,
            role: this.role
        }
        console.log(formData) 

          try {
            await this.$store.dispatch('registration', formData)
            this.$router.push('/login')
          } catch(e) {}
       }
     }
   };
</script>

