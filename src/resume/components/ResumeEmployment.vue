<template>
  <div class="experience">
    <div class="col-sm-1 mid">
      <div class="funicon fa fa-laptop"></div>
    </div>
    <div class="col-sm-11">
      <div class="mid"><h2>Employment</h2></div>
      <div class="job" v-for="job in jobs">
        <div class="info">
          <div class="title">{{ job.title }}</div>
          <div class="year">{{ job.year }}</div>
          <div class="company">{{ job.company }}</div>
        </div>
        <ul>
          <li v-for="detail in job.details">{{ detail }}</li>
        </ul>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        jobs: [{
          title: 'Teacher Assistant - Accelerated Introduction to Computer Science',
          year: 'August 2016 - present',
          company: 'Computer Science Department, Illinois Institute of Technology',
          details: [
            'Assist the professor in answering questions during the laboratory for a section of 30 students and grade student assignments.',
            'Hold office hours for individual student discussion or explain concepts in a small group setting.'
          ],
        }, {
          title: 'Digital Communications',
          year: 'October 2015 - present',
          company: "Institutional Advancement, Illinois Institute of Technology",
          details: [
            'Data mining initiative compiles alumni lists on LinkedIn based on their region. Clean and structure the data from the Phonathon team to help eliminate wrong alumni information.',
            'Utilize Google analytics and social media insights to compile monthly web and Facebook, LinkedIn, and Twitter analytic reports and charts.',
            'Migrate the database to external storage, improved the system’s speed up to 40%.'
          ]
        }]
      }
    }
  }
</script>

