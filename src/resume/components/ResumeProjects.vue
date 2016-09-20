<template>
  <div class="technical-experience">
    <div class="col-sm-1 mid">
      <div class="funicon fa fa-code-fork"></div>
    </div>
    <div class="col-sm-11">
      <div class="mid"><h2>Technical Experience</h2></div>
      <h3>Projects: </h3>
      <div class="technical" v-for="tech in technical">
        <ul>
          <li v-for="p in tech.projects">{{ p }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        technical: [{
          projects: [
            'Streaming Twitter: Meteor, MongoDB, Twitter streaming API',
            'LC3 Simulator: Project for Computer Organization class, which involves the design and implementation of a simple processor' +
            ' that can perform basic arithmetic and logic operations based on RISC technology.'
          ]
        }]
      }
    }
  }
</script>