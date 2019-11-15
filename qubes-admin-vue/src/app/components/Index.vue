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
                  <b-alert
                  variant="danger"
                  dismissible
                  fade
                  :show="showDismissibleAlert"
                  @dismissed="showDismissibleAlert=false"
                  >
                    {{alertmsg}}
                  </b-alert>
                  <p>
                    <b-button size="sm" @click="onRowSelected">Select</b-button>
                    <b-button size="sm" @click="clearSelected">Clear selected</b-button>
                    <b-button size="sm" @click="deleteVM" class="btn btn-danger">Delete</b-button>
                    <!-- <b-button size="sm" @click="selectThirdRow">Select 3rd row</b-button>
                    <b-button size="sm" @click="unselectThirdRow">Unselect 3rd row</b-button> -->
                  </p>
                  <b-table id="qubes-tab" striped hover 
                    ref="selectableTable"
                    selectable
                    :items="qubes" :per-page="perPage"
                    :current-page="currentPage"
                     @row-selected="onRowSelected"
                    
                  >
                    <template v-slot:cell(selected)="{ rowSelected }">
                      <template v-if="rowSelected">
                        <span aria-hidden="true">&check;</span>
                        <span class="sr-only">Selected</span>
                      </template>
                      <template v-else>
                        <span aria-hidden="true">&nbsp;</span>
                        <span class="sr-only">Not selected</span>
                      </template>
                    </template>
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
          selected: '',
          showDismissibleAlert: false,
          alertmsg: null,
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
      },
      methods: {
        onRowSelected(items) {
          this.selected = items
        },
        clearSelected() {
          this.$refs.selectableTable.clearSelected()
        },
        selectThirdRow() {
          // Rows are indexed from 0, so the third row is index 2
          this.$refs.selectableTable.selectRow(2)
        },
        unselectThirdRow() {
          // Rows are indexed from 0, so the third row is index 2
          this.$refs.selectableTable.unselectRow(2)
        },
        deleteVM()
        {
          this.$store.dispatch('qubes/deleteQube', this.selected[0].name);
          this.showDismissibleAlert = true
          this.alertmsg = this.selected[0].name + " deleted !"

        }
      }    
    }   
</script>
