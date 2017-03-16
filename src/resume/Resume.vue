<template>
  <div class="resume">
    <resume-header></resume-header>
    <hr>

    <resume-education></resume-education>
    <hr>

    <resume-skills></resume-skills>
    <hr>

    <resume-employment></resume-employment>
    <hr>

    <resume-projects></resume-projects>
    <hr>

    <resume-leadership></resume-leadership>
    <hr>

    <resume-awards></resume-awards>
  </div>
</template>

<script>
  import ResumeHeader from './components/ResumeHeader.vue'
  import ResumeEmployment from './components/ResumeEmployment.vue'
  import ResumeEducation from './components/ResumeEducation.vue'
  import ResumeProjects from './components/ResumeProjects.vue'
  import ResumeSkills from './components/ResumeSkills.vue'
  import ResumeAwards from './components/ResumeAwards.vue'
  import ResumeLeadership from './components/ResumeLeadership.vue'
  export default {
    components: {
      ResumeHeader,
      ResumeEmployment,
      ResumeEducation,
      ResumeProjects,
      ResumeSkills,
      ResumeAwards,
      ResumeLeadership
    }
  }
</script>

<style lang="css" scoped>
  @import "./css/style.css";
  @import "./css/responsive.css";
  @import "./css/print.css";
</style>