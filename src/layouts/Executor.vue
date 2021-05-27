<template>
    <div class="executor">
        <NavbarExecutor />

        <main class="app-content">
            <div class="app-page">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script>
import NavbarExecutor from '@/components/app/NavbarExecutor.vue'

export default{
    name: 'executor-layout',
    components: {
        NavbarExecutor
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