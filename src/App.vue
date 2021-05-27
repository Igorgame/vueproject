<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<script>
import Admin from './layouts/Admin'
import Executor from './layouts/Executor'
import Customer from './layouts/Customer'
import Main from './layouts/Main'

export default{
  computed: {
    layout() {
      console.log(this.$route.meta)
      return (this.$route.meta.layout)
    }
  },
  components: {
    Admin, Executor, Customer, Main
  }
}
</script>

<style>


.form{
 background: #fff;
 padding-bottom: 40px;
 border-radius: 15px;
 text-align: center;
}
.heading{
 display: block;
 font-size: 35px;
 font-weight: 700;
 padding: 35px 0;
 border-bottom: 1px solid #f0f0f0;
 margin-bottom: 30px;
}
.form-group{
 padding: 0 40px;
 margin: 0 0 25px 0;
 position: relative;
 
}
.form-control{
 background: #f0f0f0;
 border: none;
 border-radius: 20px;
 box-shadow: none;
 padding: 0 20px 0 45px;
 height: 40px;
}
.form-control:focus{
 background: #e0e0e0;
 box-shadow: none;
 outline: 0 none;
}
.text{
 float: left;
 margin-left: 7px;
 line-height: 20px;
 padding-top: 5px;
 text-transform: capitalize;
}
.btn{
 font-size: 14px;
 color: #fff;
 background: #00b4ef;
 border-radius: 30px;
 padding: 10px 25px;
 border: none;
 text-transform: capitalize;
 transition: all 0.5s ease 0s;
}
.btns {
  display: inline-grid;
}
.btns button {
margin-bottom: 5px;
}
@media only screen and (max-width: 479px){

 .form-group{
 padding: 0 25px;
 }

.btn{
 padding: 10px 20px;
 }
}
</style>
