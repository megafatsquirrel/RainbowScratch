<template>
  <div>
    <div class="control">
      <div v-for="(unit, index) in unitCosts.selectedUnitCosts" :key="index">
        <label class="radio">
          <input type="radio" :checked="index === 0" v-on:change="updateUnitExp" name="baseunitExp" :value="unit.value">
          <span class="capts">{{ unit.name }}</span> - Cost: {{ unit.value }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'army-builder-unit-exp-select',
  props: ['unitCosts'],
  methods: {
    updateUnitExp: function() {
      console.log('Helooo!');
    }
  }
}
</script>

<style>

</style>
