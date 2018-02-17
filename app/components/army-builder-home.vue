<template>
  <div>
    <section class="section">
      <h1 class="title">Army Builder</h1>
      <form>
        <div class="field">
          <label class="label">Pick Nation</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Germany</option>
              <select>
            </div>
          </div>
        </div>
        <div>
          <label>Use theater selection</label>
          <input type="checkbox"/>
        </div>
        <div>
          <div>
            <label>Officer</label>
            <select>
              <option></option>
              <option>Second Lt. - 40pts</option>
              <option>First Lt. - 50pts</option>
            <select>
          </div>
          <div>
            <label>Exp.</label>
            <select>
              <option></option>
              <option>Regular - 40pts</option>
              <option>Experienced - 50pts</option>
            <select>
          </div>
          <div>
            <label>Extra Men</label>
            <select>
              <option>0</option>
              <option>1</option>
              <option>2</option>
            <select>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'army-builder-home'
}
</script>

<style scoped>

</style>
