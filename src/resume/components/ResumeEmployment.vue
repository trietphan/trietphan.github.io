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
          title: 'Teacher Assistant',
          // (Accelerated Introduction to Computer Science, Object-Oriented Programming II)
          year: 'August 2016 - present',
          company: 'Computer Science Department, Illinois Institute of Technology',
          details: [
            'Assist the professor in answering questions during the laboratory and grade student assignments.',
            'Hold office hours for student discussions and encourage students to explore concepts in a small group setting.'
          ],
        }, {
          title: 'Digital Communications',
          year: 'October 2015 - present',
          company: "Office of Institutional Advancement, Illinois Institute of Technology",
          details: [
            'Administered the IIT Alumni and the Mies Van der Rohe Society websites.',
            'Organize and systematize the photos and videos database.',
            'Helped the Phonathon team to categorize over 1000 alumni data and clean up the incorrect information.',
            'Produced the Illinois Tech Giving Day 2016 Results video and compiled the social media analytic reports.',
          ]
        }]
      }
    }
  }
</script>

