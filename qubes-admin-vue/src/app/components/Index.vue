<template>
  <div>
    <topbar-component></topbar-component>
    <div class="d-flex">
      <sidebar-component></sidebar-component>
      <div class="content p-4">
        <div v-if="loading">
              <cube v-bind:loading="loading"></cube>
        </div>
        <div v-else class="table-vm" id="tableID">
          <table class="table table-hover table-bordered table-striped b-table-fixed">
            <thead>
              <tr>
                <th scope="col"> Name </th>
                <th scope="col"> Type </th>
                <th scope="col"> State </th>
                <th scope="col"> Label </th>
                <th scope="col"> Action </th>
              </tr>
            </thead>
            <tbody class="list">
              <tr v-for="vm in qubes.slice(startRow, startRow + 10)" v-bind:key="vm.name">                      
                <td> {{vm.name}} </td>
                <td> {{vm.type}} </td>
                <td class="vm_label">
                  <p v-bind:style="[vm.state == 'Halted' ?  {'background': '#ced2d8', 'color': 'black'} : 
                  {'background': '#2eb85c',  'color': 'white'}]"> {{vm.state}} </p>
                </td>
                <td> {{vm.label}} </td>
                <td class="action">
                  <span class="on-off hvr-float">
                    <!-- -------------------------POWER OFF/ON--------------------------------------- -->
                    <!-- -------------------------POWER ON------------------------------------------- -->
                    <font-awesome-icon :icon="['fa', 'play']" class="play" 
                    v-if="vm.state == 'Halted'" @click="runVM(vm.name)"/>
                    <!-- -------------------------POWER OFF------------------------------------------ -->
                    <font-awesome-icon :icon="['fa', 'power-off']" class="power-off" 
                    v-else-if="vm.state == 'Running'" @click="stopVM(vm.name)"/>
                    <!-- -------------------------TRANSIENT STATE------------------------------------ -->
                    <circle-spin  
                    v-else-if="vm.state == 'Transient'" class="loadcube">
                    </circle-spin>
                  </span>
                  <span class="clone hvr-float">
                    <font-awesome-icon :icon="['fa', 'clone']" @click="clonevm(vm)"/> 
                  </span>
                  <span class="del hvr-float">
                    <font-awesome-icon :icon="['fa', 'trash-alt']"  @click="confirmAlert(vm.name)"/> 
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div id="page-navigation" class="page-vm pagination justify-content-end">
            <button class="page-link page-button" @click=movePages(-1)> Back </button>
            <p>{{startRow / rowsPerPage + 1}} out of {{Math.floor(qubes.length / rowsPerPage)}}</p>
            <button class="page-link page-button" @click=movePages(1)> Next </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data(){
      return {
        startRow: 0,
        rowsPerPage: 10,
      }
    },
    computed: mapState({
        qubes: state => state.qubes.qubes,
        loading: state => state.qubes.loading,
    }),
    mounted () {
      this.$store.dispatch('qubes/loadData');
    },
    methods: {
      movePages: function(amount) {
          var newStartRow = this.startRow + (amount * this.rowsPerPage);
          if (newStartRow >= 0 && newStartRow < this.qubes.length) 
          {
            this.startRow = newStartRow;
          }
      },
      confirmAlert: function(vm_name)
      {
        swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover " + vm_name + " VM!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
          })
          .then((willDelete) => {
              if (willDelete) {
                  swal({
                  text: vm_name +  " has been deleted!",
                  icon: "success",
                  });
                  this.deleteVM(vm_name);
              } else {
                  swal({text: vm_name + " is safe!"});
              }
          });
      },
      deleteVM(vm_name)
      {
        this.$store.dispatch('qubes/deleteQube', vm_name);
      },
      runVM(vm_name)
      {
        //to change -> load only this vm state, not all vm's state
        this.$store.dispatch('qubes/loadData');
        this.$store.dispatch('qubes/runQube', vm_name);
      },
      clonevm(vm)
      {
        const cloneQube = {"name": '', "type": vm.type, 'name_mother': vm.name}
        swal("Clone name:", {
          content: "input",
        })
        .then((value) => {
          cloneQube.name = value
          this.$store.dispatch('qubes/cloneQube', cloneQube);
          swal(`Clone ${value} - created`);
        });
      },
      stopVM(vm_name)
      {
        this.$store.dispatch('qubes/stopQube', vm_name);
      }
    }    
  }   
</script>
