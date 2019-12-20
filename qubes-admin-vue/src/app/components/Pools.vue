<template>
  <div> 
    <topbar-component></topbar-component>
    <div class="d-flex">
      <sidebar-component></sidebar-component>
      <div class="content p-4">
        <div v-if="loading">
          loading...
        </div>
        <div v-else>
          <ul class="list-group">
            <li  class="list-group-item" v-for="pool in pools" v-bind:key="pool.name">
              {{pool.name}}             
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
      computed: mapState({
         pools: state => state.pools.pools,
         loading: state => state.pools.loading,
      }),
      mounted () {
        this.$store.dispatch('pools/loadData')
      }
    }
</script>