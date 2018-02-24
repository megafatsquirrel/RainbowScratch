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
              <div v-if="this.$store.state.armyData.length > 0">
                <label class="label">Officer</label>
                <div class="control">
                  <div class="select">
                    <select>
                      <option></option>
                      <option>Second Lieutenant</option>
                      <option>First Lieutenant</option>
                    <select>
                  </div>
                </div>
              </div>
              <div v-if="this.$store.state.armyData.length > 0">
                <!-- Second select unit exp level -->
                <!-- This selection will depend on what force was selected -->
                <label class="label">Exp</label>
                <div class="control">
                  <div class="select">
                    <select>
                      <option></option>
                      <option>Regular - 50pts</option>
                      <option>Experienced - 65pts</option>
                    <select>
                  </div>
                </div>
              </div>
              <div v-if="this.$store.state.armyData.length > 0">
                <!--  Options for each unit - extra men or weapons -->
                <label>Extra Men</label>
                <select>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                <select>
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
