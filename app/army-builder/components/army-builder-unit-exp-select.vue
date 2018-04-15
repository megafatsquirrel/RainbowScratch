<template>
  <div>
    <div class="control">
      <div>
          <label class="radio">
          <input type="radio" name="baseunitExp" :value="0">
          <span class="capts">Regular</span> - Cost: 0
          </label>
          <label class="radio">
          <input type="radio" name="baseunitExp" :value="0">
          <span class="capts">Veteran</span> - Cost: 0
          </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'army-builder-unit-exp-select'
}
</script>

<style>

</style>
