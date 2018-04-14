<template>
  <div v-if="this.$store.state.isNationLoaded" class="unit-container">
    <h5 class="title is-5 unit-container-header">{{ unitGroupTitle }} - {{ this.$store.state.armyData.germany[0].type }}</h5>
    <div class="columns is-multiline is-mobile unit-container-body">
      <div class="column is-full">
        <div>
          <label class="label capts">{{ unitType }}</label>
          <!-- <div class="control">
            <div class="select">
              <select v-on:change="getUnitExp">
                <option :value="null"></option>
                <option v-for="unit in filteredUnits" v-bind:key="unit" :value="unit.name">{{unit.name}}</option>
              </select>
            </div>
          </div> -->
          <div class="control">
            <div class="" v-for="unit in filteredUnits" v-bind:key="unit">
              <label class="radio">
                <input type="radio" name="baseunit" v-model="pickedUnit" v-on:change="getUnitExp" :value="unit.values[0].value">
                <span class="capts">Unit: {{unit.name}}</span> - Cost: {{unit.values[0].value}}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-half-mobile is-half-desktop">
        <div>

        </div>
      </div>
      <div class="column">
        <div>
          <input class="input" type="number" value="0">
          <!--  Options for each unit - extra men or weapons -->
          <!-- <label class="label">{{ this.$store.state.armyData.germany[0].team }}</label>
          <div class="control">
            <div class="select">
              <select>
                <option v-for="unit in filterOptions" v-bind:key="unit.value">{{ unit.key }}{{ unit.value }}</option>
              </select>
            </div>
          </div> -->
        </div>
      </div>
      <div class="column">
        {{pickedUnit}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'army-builder-unit-select',
  props: ['unitGroupTitle', 'unitType'],
  methods: {
    getUnitExp: function(e) {
      console.log('HELLO');
    }
  },
  computed: {
    filteredUnits() {
      var unit = this.$store.state.armyData.germany.filter(unit => unit.unit === this.unitType);
      return unit[0].cost;
    },
    filterOptions() {
      return unit.options[0].option;
    }
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

  .capts {
    text-transform: capitalize;
  }
</style>
