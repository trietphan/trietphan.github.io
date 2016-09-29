<template>
  <div class="projects">
    <div class="col-sm-1 mid">
      <div class="funicon fa fa-code-fork"></div>
    </div>
    <div class="col-sm-11">
      <div class="mid"><h2>Technical Experience</h2></div>
      <div class="technical" v-for="tech in technical">
        <div class="project"><strong>{{ tech.project }}</strong></div>
        <ul>
          <li v-for="d in tech.details">{{ d }}</li>
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
          project: 'Interactive Data Visualization',
          details: [
            'Applied the Python\'s Pandas data analysis library to clean and structure the Mobile User data from Kaggle.',
            'Compiled the static files, transformed the format from Pandas DataFrame to a JSON object to the browser.',
            'Used D3.js, DC.js, and Leaflet.js to construct the interactive chart and geospatial data.'
          ],
        }, {
          project: 'The Internet of Things',
          details: [
            'Used cameras and sensors to monitor the handicap-accessible doors. Collected data about duration of doors opening and evaluated data. Attended the Internet of Things World Forum hosted by Cisco.'
          ]
        }, {
          project:
            'Twitter Streaming App',
          details: [
            'A web application that streams Twitter hashtags in real time. ',
            'Built with Meteor, MongoDB, Twitter streaming API, and used Kadira to optimize the app.',
            'Hosted the application on codingisfun.herokuapp.com'
          ]

        }, {
          project:
            'LC3 Simulator',
          details: [
            'Project for Computer Organization and Assembly Language Programming class, which involved the design and implementation of a simple processor that can perform arithmetic and logic operations based on RISC technology.'
            ]
        }]
      }
    }
  }
</script>