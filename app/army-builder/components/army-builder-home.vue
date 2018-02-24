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
              <ABUnitSelect></ABUnitSelect>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ABUnitSelect from './army-builder-unit-select.vue';

export default {
  name: 'army-builder-home',
  components: {
    ABUnitSelect
  },
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
