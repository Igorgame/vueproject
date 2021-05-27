<template>
    <div class="container">
        <div class="main">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12">
                    <div class="panel">
                        <div class="panel-header">
                            <div class="header">
                                <strong>Профиль</strong>
                            </div>
                        </div>
                        <div class="panel-body">
                                <hr>
                            <div class="table">
                                <table>
                                    <tbody>
                                        <tr><td class="active">Фамилия:</td><td>Ломов</td></tr>
                                        <tr><td class="active">Имя:</td><td>Игорь</td></tr>
                                        <tr><td class="active">Отчество:</td><td>Васильевич</td></tr>
                                        <tr><td class="active">Телефон:</td><td>8 888 800 88 08</td></tr>
                                        <tr><td class="active">Email:</td><td>igor.lomov@gmail.com</td></tr>
                                        <tr><td class="active">Роль:</td><td>admin</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default ({
    setup() {
        
    },
})
</script>


<style>
.main {
    background-color: #f2f2f2;
    padding: 20px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
}
.author{
   padding:15px;
}
.author img {
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    border: 5px solid #00b4ef;
    margin-bottom: 10px;
    height: 150px;
    width: 150px;
}
.panel-header{
    background-color: #fff;
    border-radius: 5px;
}
table {
    text-align: left;
    margin: auto;
}
.active {
    padding-right: 20px;
}
</style>
