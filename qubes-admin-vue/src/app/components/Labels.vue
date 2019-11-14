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
            <li  class="list-group-item" v-for="label in labels">
                {{label.name}}        
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
         labels: state => state.labels.labels,
         loading: state => state.labels.loading,
      }),
      mounted () {
        this.$store.dispatch('labels/loadData')
      }
    }
</script>