<template>
    <div>
        <topbar-component></topbar-component>
            <div class="d-flex">
              <sidebar-component></sidebar-component>
              <div class="content p-4">
                <div v-if="loading">
                  loading...
                </div>
                <div v-else class="table-vm">
                  <b-table id="qubes-tab" striped hover 
                    :items="qubes" :per-page="perPage"
                    :current-page="currentPage"
                  >
                  </b-table>
                  <div class="page-vm">
                    <b-pagination 
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                      aria-controls="qubes-tab"
                    ></b-pagination>
                  </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
      data () {
        return {
          perPage: 10,
          currentPage: 1,
         }
      },
      computed: mapState({
         qubes: state => state.qubes.qubes,
         loading: state => state.qubes.loading,
         rows(){
           return this.qubes.length 
         }
      }),
      mounted () {
        this.$store.dispatch('qubes/loadData')
      }
    }   
</script>
