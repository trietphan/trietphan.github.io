<template>
  <div class="skills">
    <div class="col-sm-1 mid">
      <div class="funicon fa fa-code"></div>
    </div>
    <div class="col-sm-11">
      <div class="mid"><h2>Language and Technologies</h2></div>
      <div class="skill" v-for="s in skills">
        <div class="language">{{ s.language }}</div>
        <div class="technology">{{ s.technology }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        skills: [{
          language: 'Languages: Python, JavaScript, Swift, Java, and C.',
          technology:
            'Technologies/Frameworks: VueJS, Meteor, Orange, Pandas, Scikit, Matplotlib, OpenCV, PostgreSQL, MongoDB, HTML5, CSS3, Git, Adobe After Effects, and Emacs.'
        }]
      }
    }
  }
</script>
