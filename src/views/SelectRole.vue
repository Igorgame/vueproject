<template>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-offset-3 col-md-6">
                <form class="form" @submit.prevent="userlogin">
                    <span class="heading">Войти как</span>
                    <div>
                        <router-link class="nav-link" to="/admin">Администратор</router-link>
                    </div>
                    <div>
                        <router-link class="nav-link" to="/customer">Заказчик</router-link>
                    </div>
                    <div>
                        <router-link class="nav-link" to="/executor">Исполнитель</router-link>
                    </div> 
                </form>
            </div>
        </div>
    </div>
</template>