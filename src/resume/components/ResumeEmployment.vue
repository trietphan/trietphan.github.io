<template>
  <div class="experience">
    <h2>Employment</h2>
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
            'Assist professor in answering questions during the laboratory and grade student assignments.',
            'Hold office hours for individual student discussion.'
          ],
        }, {
          title: 'Digital Communications',
          year: 'October 2015 - present',
          company: "Institutional Advancement, Illinois Institute of Technology",
          details: [
            'Report email analysis: the open rate and the click through rate. Utilize Google analytics and social media ' +
            'insights to compile monthly web and Facebook, LinkedIn, and Twitter analytic reports and charts.',
            'Manage the database within the NAS, and data mining initiatives. Migrated the database to external storage, ' +
            'improved the network system’s speed up to 40%.'
          ]
        }]
      }
    }
  }
</script>

<style lang="sass">
  @import "../style.scss";

  @mixin info-md() {
    .title {
    @include left-col();
    }
    .year {
    @include right-col();
    }
    .company {
      @include left-col();
    }
  }

  .experience {
    .job {
      .info {
        @include clearfix();
      .title {
        font-style: italic;
        font-weight: 500;
      }
      @include breakpoint-md() {
        @include info-md();
      }
    }

    ul {
      @include clearfix()
      @include details();
      }
    }
  }
</style>