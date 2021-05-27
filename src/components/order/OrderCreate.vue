<template>
    <div class="row justify-content-center align-items-center">
          <div class="col-md-offset-3 col-md-6">
            <form class="form" @submit.prevent="addOrder">
              <span class="heading">Создание заказа</span>

                <div class="form-group">
                    <select type="text" class="form-control" v-model="ordername">
                      <option disabled value="">Категория</option>                  
                      <option value="glassing">Стекольные работы</option>
                      <option value="splasterering">Штукатурные работы</option>
                      <option value="painting">Малярные работы</option>
                      <option value="facing">Облицовочные работы</option>
                      <option value="stiking">Наклейка обоев</option>
                      <option value="flooring">Устройство напольгого покрытия</option>
                    </select>
                </div>

              <div class="form-group">
                <input type="text" class="form-control" v-model="address" placeholder="Адрес"/>
              </div>

              <div class="form-group">
                <input type="date" class="form-control" v-model="startdate" placeholder="Дата начала"/>
              </div>

              <div class="form-group">
                <input type="text" class="form-control" v-model="customer" placeholder="Заказчик"/>
              </div>

              <div class="form-group">
                <input type="text" class="form-control" v-model="executor" placeholder="Исполнитель"/>
              </div>

              
              <div class="btns">
                <button type="submit" class="btn">
                  Добавить
                </button>
              </div>
            </form>
          </div>
      </div>
</template>

<script>
export default {
  data: () => ({
    ordername: '',
    address: '',
    startdate: '',
    customer: '',
    executor: ''
    }),
    methods: {
        async addOrder() {

            try {
                const order = await this.$store.dispatch('createOrder', {
                ordername: this.ordername,
                address: this.address,
                startdate: this.startdate,
                customer: this.customer,
                executor: this.executor
                })
                
                this.ordername = '',
                this.address = '',
                this.startdate = '',
                this.customer = '',
                this.executor = ''
                this.$emit('created',order)
                alert('Заказ создан')
                console.log(order)
            } catch (e) {}
        }
    }
}
</script>