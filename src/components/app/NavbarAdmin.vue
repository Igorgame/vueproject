<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="/">Константа-С</a>
            <div class="data">{{date}}</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <div class="user">{{name}}</div>
                    <router-link class="nav-item"
                        v-for="link in links" 
                        :key="link.url"
                        tag="li"
                        active-class="active"
                        :to="link.url"
                        :exact="link.exact"
                    >
                        <a :href="link.url" class="nav-link">{{link.title}}</a>
                    </router-link>
                    <a href="#" class="logout" @click.prevent="logout">Выйти</a>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data: () => ({
        links: [
            {title: 'Главная', url: '/admin', exact: true},
            {title: 'Пользователи', url: '/admin/users'},
            {title: 'Регистрация пользователя', url: '/admin/registration'},
            {title: 'Заказы', url: '/admin/orders'},
            {title: 'Добавить заказ', url: '/admin/add-order'},
            {title: 'Категории', url: '/admin/category'},
            {title: 'О заказе', url: '/admin/order-info'},
            {title: 'О пользователе', url: '/admin/user-info'}

        ],
        date: new Date(),
        user: null
    }),
   
   computed: {
        date () {
            return (new Date(this.date)).toLocaleDateString()
        },
        name () {
            return this.$store.getters.info.name 
        }     
    },
    mounted () {
    setInterval(() => this.date = Date.now(), 600000)
    },

    methods: {
        async logout() {
            await this.$store.dispatch('logout')
            console.log('logout')
            this.$router.push('/login?message=logout')
        }
    },
    async mounted() {
        if (!Object.keys(this.$store.getters.info).length) {
        await this.$store.dispatch('fetchInfo')
        }
    },


}
</script>
