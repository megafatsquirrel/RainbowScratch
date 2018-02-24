<template>
  <div class="container">
    <section class="section">
      <h1 class="title">Army Builder</h1>
      <div class="columns">
        <div class="column">
          <form>
            <div class="field">
              <label class="label">Pick Nation</label>
              <div class="control">
                <div class="select">
                  <select v-on:change="getNationArmy">
                    <option value="empty"></option>
                    <option value="germany">Germany</option>
                  <select>
                </div>
              </div>
            </div>
            <div>
              <div>
                <label class="checkbox" disabled>
                  <input type="checkbox" disabled>
                  Use theater selection
                </label>
              </div>
              <!-- First select unit type -->
              <div>{{armyData}}</div>
              <div id="armyDataType"></div>
              <div class="column">
                <div v-if="this.$store.state.armyData.length > 0">
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
                <div v-if="this.$store.state.armyData.length > 0">
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
                <div v-if="this.$store.state.armyData.length > 0">
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
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'army-builder-home',
  methods: {
    getNationArmy: function(e) {
      this.$store.dispatch('getNationArmy').then(() => {
        document.getElementById('armyDataType').innerHTML = this.$store.state.armyData[0].type;
      });
    }
  },
  computed: {
    armyData () {
      return this.$store.getters.returnArmyData;
    }
  }
}
</script>

<style scoped>

</style>
