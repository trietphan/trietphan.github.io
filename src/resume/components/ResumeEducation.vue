<template>
  <div class="education">
    <div class="col-sm-1 mid">
      <div class="funicon fa fa-graduation-cap"></div>
    </div>
    <div class="col-sm-11">
      <div class="mid"><h2>Education</h2></div>
    <div class="school" v-for="s in schools">
      <div class="major">{{ s.major }}</div>
      <div class="gpa">{{ s.gpa }}</div>
      <div class="name">{{ s.name }}</div>
      <div class="graduation">{{ s.graduation }}</div>
      <div class="course"><strong>Advanced courses: </strong>{{ s.courses }}</div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        schools: [{
          major: 'Co-Terminal B.Sc. in Computer Science / Master of Data Science',
          name: 'Illinois Institute of Technology',
          gpa: 'Cumulative GPA: 3.8/4.0',
          graduation: 'Anticipated Graduation: December 2018',
          courses: 'Discrete Structures, Data Structures and Algorithm, Database Organization, Biometrics'
        }]
      }
    }
  }
</script>

