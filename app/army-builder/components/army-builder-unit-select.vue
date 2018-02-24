<template>
  <div v-if="this.$store.state.armyData.length > 0">
    <h3 class="title is-4">{{ unitGroupTitle }}</h3>
    <div class="columns is-mobile">
      <div class="column">
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
      <div class="column">
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
          <select>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          <select>
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

</style>
