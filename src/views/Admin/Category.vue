<template>
    <div class="container">
        <div class="row">
        <CategoryCreate @created="addNewCategory"/>
          </div>
      </div>
</template>

<script>
import CategoryCreate from '@/components/category/CategoryCreate'

export default {
    name: 'categories',
    data: () => ({
        categories: []
    }),
    methods: {
        addNewCategory(category) {
            this.categories.push(category)
            console.log(this.categories)
        }

    },
    components: {
        CategoryCreate
    },
}
</script>

        