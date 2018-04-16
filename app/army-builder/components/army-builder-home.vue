<template>
  <div class="container">
    <section class="section">
      <h1 class="title">Army Builder</h1>
      <form>
        <div class="field">
          <label class="label">Pick Nation</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select v-on:change="getNationArmy">
                <option value="empty"></option>
                <option value="germany">Germany</option>
              </select>
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
          <ABUnitSelect v-if="armyData.length > 0" unit-group-title="Headquarters" unit-type="officer" unit-group="hq"></ABUnitSelect>
          <!-- <ABUnitSelect unit-group-title="First Squad"></ABUnitSelect>
          <ABUnitSelect unit-group-title="Second Squad"></ABUnitSelect> -->
        </div>
      </form>
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
      if (e.target.value === 'germany') {
        this.$store.dispatch('getGermanArmy').then(() => {
          this.$store.commit('updateIsNationLoaded', true);
        });
      }
    }
  },
  computed: {
    armyData () {
      return this.$store.getters.returnGermanArmyData;
    }
  }
}
</script>

<style scoped>

</style>
