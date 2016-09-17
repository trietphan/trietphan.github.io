<template>
  <div class="resume">
    <resume-header></resume-header>
    <resume-divider></resume-divider>

    <resume-employment></resume-employment>
  </div>
</template>

<script>
  import ResumeHeader from './components/ResumeHeader.vue'
  import ResumeDivider from './components/ResumeDivider.vue'
  import ResumeEmployment from './components/ResumeEmployment.vue'
  export default {
    components: {
      ResumeHeader,
      ResumeDivider,
      ResumeEmployment
    }
  }
</script>

<style lang="sass">
  @import "./style.scss";

  @mixin resume-md() {
    font-size: 14px;
  }

  body {
    background: #DBD1C7;
    color: #757575;
    font-family: 'Alegreya Sans', sans-serif;
  }

  .resume {
     @include breakpoint-md() {
       @include resume-md();
       padding: 72px 81px;
       margin: 54px 36px;
       border: 1px solid #ccc;
       letter-spacing: 1.1px;
       box-shadow: 2px 2px 4px #aaa;
       -webkit-box-shadow: 2px 2px 4px #aaa;
    }
    background: #fff;
    padding: 15px;
    margin: 15px 6px;
    letter-spacing: 1px;
    font-size: 10px;

  a {
      text-decoration: none;
      color: #111;
    }
    h1, h2 {
    @include header();
    }
  }

  @media print {
    div.resume {
    @include resume-md();
      max-width: 600px;
      padding: 30px 0;
      border: 0;
      background: #DBD1C7;
      box-shadow: none;
      -webkit-box-shadow: none;
    }
  }
</style>