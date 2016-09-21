<template>
  <div class="skills">
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
            'Twitter Streaming App: Web application that streaming Twitter hashtags in real time. Built with Meteor, MongoDB, Twitter streaming API.  ',
            'Interactive Data Visualization: Applied the Python\'s Pandas to clean and structure dataset from Kaggle. Compiled the static files, transformed the format from Pandas DataFrame to a JSON object to the browser. Used D3.js, DC.js, and Leaflet.js to construct the interactive chart and geospatial data.',
            'The Internet of Things: Used cameras and sensors to monitor the handicap-accessible doors. Collected data about duration of doors opening and evaluated data.',
            'LC3 Simulator: Project for Computer Organization class, which involves the design and implementation of a simple processor' +
            ' that can perform basic arithmetic and logic operations based on RISC technology.'
          ]
        }]
      }
    }
  }
</script>