<template>
    <div class="customer">
        <NavbarCustomer />

        <main class="app-content">
            <div class="app-page">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script>
import NavbarCustomer from '@/components/app/NavbarCustomer.vue'

export default{
    name: 'customer-layout',
    components: {
        NavbarCustomer
    },
    computed: {
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        error(fbError) {
            console(fbError)
        }
    }
}
</script>