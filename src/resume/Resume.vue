<template>
  <div class="resume">
    <resume-header></resume-header>
    <hr>

    <resume-employment></resume-employment>
    <hr>

    <resume-education></resume-education>
    <hr>

    <resume-projects></resume-projects>
    <hr>

    <resume-skills></resume-skills>
  </div>
</template>

<script>
  import ResumeHeader from './components/ResumeHeader.vue'
  import ResumeEmployment from './components/ResumeEmployment.vue'
  import ResumeEducation from './components/ResumeEducation.vue'
  import ResumeProjects from './components/ResumeProjects.vue'
  import ResumeSkills from './components/ResumeSkills.vue'
  export default {
    components: {
      ResumeHeader,
      ResumeEmployment,
      ResumeEducation,
      ResumeProjects,
      ResumeSkills
    }
  }
</script>

<style lang="css">
  @import "./css/style.css";
  @import "./css/responsive.css";
</style>