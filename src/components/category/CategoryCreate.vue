<template>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-offset-3 col-md-6">
            <form class="form" @submit.prevent="addcategory">
              <span class="heading">Создание категории</span>
              <div class="form-group">
                <input type="text" class="form-control" 
                v-model="categoryname" placeholder="Название"/>
              </div>
              
              <div class="btns">
                <button type="submit" class="btn">
                  Добавить
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data: () => ({
    categoryname: ''
    }),
    methods: {
        async addcategory() {

            try {
                const category = await this.$store.dispatch('createCategory', {
                categoryname: this.categoryname,
                })
                this.categoryname = ''
                this.$emit('created',category)
                alert('Категория создана')
                console.log(category)
            } catch (e) {}
        }
    }
}
</script>