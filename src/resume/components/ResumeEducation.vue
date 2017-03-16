<template>
  <div class="education">
    <div class="col-sm-1 mid">
      <div class="funicon fa fa-graduation-cap"></div>
    </div>
    <div class="col-sm-11">
      <div class="mid"><h2>Education</h2></div>
    <div class="school" v-for="s in schools">
      <div class="major"><strong>{{ s.major }}</strong></div>
      <div class="gpa">{{ s.gpa }}</div>
      <div class="name">{{ s.name }}</div>
      <div class="graduation">{{ s.graduation }}</div>
      <div class="course"><strong>Advanced courses:</strong> {{ s.courses }}</div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        schools: [{
          major: 'Bachelor of Science in Computer Science',
          name: 'Illinois Institute of Technology, Chicago, IL',
          gpa: 'Cumulative GPA: 3.8/4.0',
          graduation: 'Anticipated Graduation: December 2017',
          courses:
            'Biometrics, Geospatial Vision and Visualization, Data Mining, Introduction to Algorithms, Database Organization, Software Engineering.'
        }]
      }
    }
  }
</script>

