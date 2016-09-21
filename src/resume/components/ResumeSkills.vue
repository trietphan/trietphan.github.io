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
          language: 'Languages: Python, JavaScript, Java, C, Swift',
          technology:
            'Technologies/Frameworks: Meteor, Kadira, AngularJS, Vue, PostgreSQL, MongoDB, Pandas HTML5, CSS3, Bootstrap, Adobe After Effects, Git, zsh, Emacs'
        }]
      }
    }
  }
</script>
