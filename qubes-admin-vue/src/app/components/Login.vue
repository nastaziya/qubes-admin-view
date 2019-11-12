<template>
  <div>
    <topbar-component></topbar-component>
    <sidebar-component></sidebar-component>
    <p>Login</p>
  </div>
</template>
<script>
    export default {
        mounted () {
            document.title = 'login';
        }
    }
</script>