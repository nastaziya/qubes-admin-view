<template>
    <div>
        <topbar-component></topbar-component>
        <div class="d-flex">
            <sidebar-component></sidebar-component>
            <div class="content p-4">
                <img src="../../assets/qubes-logo-icon.png">
                <h2 id="title">{{data().msg}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {
            document.title = 'index';
        },
        methods:
        {
            data () {
              return {
                msg: 'Welcome to Qubes Admin Panel'
              }
            }
        }
    }   
</script>

<style>
#title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


img{
  
  
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}

</style>