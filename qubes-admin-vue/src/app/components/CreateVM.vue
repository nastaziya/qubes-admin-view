<template>
  <div>
    <topbar-component></topbar-component>
    <div class="d-flex">
      <sidebar-component></sidebar-component>
      <div class="content p-4">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
           <b-form-group
            id="input-group-1"
            label="Name:"
            label-for="input-1"
            description="We'll never be hacked."
          >
            <b-form-input
              id="input-1"
              v-model="form.name"
              required
              placeholder="Enter new VM name"
            ></b-form-input>
          </b-form-group>   
          <b-form-group id="input-group-2" label="Label:" label-for="input-2">
            <b-form-select
              id="input-2"
              v-model="form.label"
              required
            >
              <option :value="label.name" v-for="label in labels" >{{label.name}}</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="input-group-3" label="Pool:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.pool_identifier"
              required
            >
              <option :value="pool.name" v-for="pool in pools">{{pool.name}}</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="input-group-4" label="Template:" label-for="input-4">
            <b-form-select
              id="input-4"
              v-model="form.template"
              required
            >
              <option :value="template.name" v-for="template in templates">{{template.name}}</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="input-group-5" label="Type:" label-for="input-5">
            <b-form-select
              id="input-5"
              v-model="form.type"
              :options="type"
              required
            >
            </b-form-select>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        form: {
          label: null,
          name: '',
          pool_identifier: null,
          template: null,
          type: null
        },        
        show: true,
        type: [{ text: 'Select One', value: null }, 'AppVM', 'TemplateVM']
      }
    },
    computed: mapState({
        pools: state => state.pools.pools,
        labels: state => state.labels.labels,
        qubes: state => state.qubes.qubes,
        templates: function() {
          return this.qubes.filter(function(qube) {
            return qube.type == "TemplateVM"
          })
        }
        
      }),
    mounted () {
        this.$store.dispatch('pools/loadData'),
        this.$store.dispatch('labels/loadData'),
        this.$store.dispatch('qubes/loadData')
    },
    methods: {
      addQube () {
        this.$store.dispatch('qubes/addQube')
      },
      onSubmit(evt) {
        const payload = {
          label: this.form.label,
          name: this.form.name,
          pool_identifier: this.form.pool_identifier,
          template: this.form.template,
          type: this.form.type
        }
        evt.preventDefault()
        this.$store.dispatch('qubes/addQube', payload)
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.label = null
        this.form.template = null
        this.form.pool = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>