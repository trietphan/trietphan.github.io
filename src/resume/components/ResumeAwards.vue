<template>
  <div class="awards">
    <div class="col-sm-1 mid">
      <div class="funicon fa fa-trophy"></div>
    </div>
    <div class="col-sm-11">
      <div class="mid"><h2>Honors and Awards</h2></div>
      <ul>
        <li v-for="award in awards">{{ award }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        awards: [
          'Illinois Institute of Technology Presidential Scholarship.',
          'Phi Theta Kappa All-Illinois Academic Team Award.',
          'Salutatorian of Wilbur Wright College for the 2014 - 2015 academic year.'
        ]
      }
    }
  }
</script>