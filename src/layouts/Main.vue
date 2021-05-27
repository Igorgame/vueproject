<template>
  <div class="home">
     <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">Константа-С</a>
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="/login">Вход</a>
        </li>
        </ul>
    </nav>

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>

export default {
  computed: {
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        error(fbError) {
            console.log(fbError)
        }
    } 
}
</script>


