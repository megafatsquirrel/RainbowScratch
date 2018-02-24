<template>
  <div v-if="this.$store.state.armyData.length > 0" class="unit-container">
    <h5 class="title is-5 unit-container-header">{{ unitGroupTitle }} - {{ this.$store.state.armyData[0].type }}</h5>
    <div class="columns is-multiline is-mobile unit-container-body">
      <div class="column is-half-mobile is-half-desktop">
        <div>
          <label class="label">{{ this.$store.state.armyData[0].name }}</label>
          <div class="control">
            <div class="select">
              <select>
                <option :value="null"></option>
                <option v-for="unit in this.$store.state.armyData[0].cost" v-bind:key="unit.name">{{ unit.name }}</option>
              <select>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-half-mobile is-half-desktop">
        <div>
          <!-- Second select unit exp level -->
          <!-- This selection will depend on what force was selected -->
          <label class="label">Exp</label>
          <div class="control">
            <div class="select">
              <select>
                <option :value="null"></option>
                <option :value="this.$store.state.armyData[0].cost[0].regular" >Regular: {{ this.$store.state.armyData[0].cost[0].regular }} points</option>
                <option :value="this.$store.state.armyData[0].cost[0].veteran" >Veteran: {{ this.$store.state.armyData[0].cost[0].veteran }} points</option>
              <select>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <!--  Options for each unit - extra men or weapons -->
          <label class="label">{{ this.$store.state.armyData[0].team }}</label>
          <div class="control">
            <div class="select">
              <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
              <select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'army-builder-unit-select',
  props: ['unitGroupTitle'],
  methods: {
    
  },
  computed: {
    
  }
}
</script>

<style scoped>
  .unit-container {
    border: 1px solid;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  .unit-container-header {
    background-color: #e3e3e3;
    padding: 10px;
  }

  .unit-container-body {
    padding: 10px;
  }
</style>
