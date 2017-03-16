<template>
  <div class="leader">
    <div class="col-sm-1 mid">
      <div class="funicon fa fa-users"></div>
    </div>
    <div class="col-sm-11">
      <div class="mid"><h2>Leadership Experience</h2></div>
      <ul>
        <li v-for="ld in leaders">{{ ld }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        leaders: [
          'Co-Vice President of Leadership of Phi Theta Kappa Honor Society.',
          'President of the International Club.',
          'Vice President of the Programming Club.'
        ]
      }
    }
  }
</script>