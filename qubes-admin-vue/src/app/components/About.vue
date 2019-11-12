<template>
  <div> 
    <sidebar-component></sidebar-component>
    <p>About</p>
  </div>
</template>
<script>
    export default {
        mounted () {
            document.title = 'about';
        }
    }
</script>