<template>
    <div class="admin">
        <NavbarAdmin />
        <main class="app-content">
            <div class="app-page">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script>
import NavbarAdmin from '@/components/app/NavbarAdmin.vue'

export default{
    name: 'admin-layout',
    components: {
        NavbarAdmin
    },
    computed: {     //получение ошибок
        error() {
            return this.$store.getters.error
        }
    },
    watch: {    //вывод ошибок
        error(fbError) {
            console.log(fbError)
        }
    }
}
</script>
