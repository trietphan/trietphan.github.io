<template>
  <div class="header">
    <h1><a :href="myinfo.link">{{myinfo.name}}</a></h1>
    <ul class="contact">
      <li v-for="c in contacts">
        <i :class="c.icon"></i> <a :href="c.link">{{ c.content }}</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myinfo: {
          name: 'Triet Phan',
          link: 'imphan.me'
        },
        contacts: [{
          icon: 'fa fa-home',
          content: 'imphan.me',
          link: 'http://imphan.me/'
        }, {
          icon: 'fa fa-linkedin',
          content: 'trietphan',
          link: 'https://www.linkedin.com/in/trietphan'
        }, {
          icon: 'fa fa-github',
          content: 'trietphan',
          link: 'https://github.com/trietphan'
        }, {
          icon: 'fa fa-twitter',
          content: '@TrietP',
          link: 'http://twitter.com/trietp'
        }, {
          icon: 'fa fa-facebook',
          content: 'trietphan',
          link: 'https://www.facebook.com/phanminhtriet'
        }, {
          icon: 'fa fa-envelope-o',
          content: 'trietphan85@gmail.com',
          link: 'mailto:trietphan85@gmail.com'
        }]
      }
    }
  }
</script>

<style lang="sass">
  @import "../style.scss";

  $github-color: #800080;
  $linkedin-color: #4875B4;
  $twitter-color: #6faedc;

  .fa-linkedin {
    color: $linkedin-color;
  }
  .fa-github {
    color: $github-color;
  }
  .fa-twitter {
    color: $twitter-color;
  }

  @mixin contacts-li-md() {
  &:nth-child(odd),
  &:nth-child(even) {
     padding: 0 0.3em;
     width: inherit;
     margin: 0;
   }
  }

  @mixin contacts-ul-md() {
    float: right;
  }

  .header {
  @include clearfix();
  @include container();

  h1 {
    font-size: 2em;
    margin: 0;
    color: #757575;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  @include breakpoint-md() {
  @include contacts-ul-md();
  }
  li {
    display: inline;
    float: left;
    margin: 0;
  &:nth-child(odd) {
   @include left-col();
   }
  &:nth-child(even) {
   @include right-col();
   }
  @include breakpoint-md() {
  @include contacts-li-md();
  }
  }
  }
  }

</style>
