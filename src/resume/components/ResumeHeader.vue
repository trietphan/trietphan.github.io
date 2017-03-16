<template>
  <div class="header">
    <div class="col-sm-1"></div>
    <div class="col-sm-11">
      <div class="myname"><h1>{{myinfo.name}}</h1></div>
      <ul class="contact">
        <li v-for="c in contacts">
          <i :class="c.icon"></i> <a :href="c.link">{{ c.content }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myinfo: {
          name: 'Triet Phan',
          link: 'trietphan.me'
        },
        contacts: [
        // {
        //   icon: 'fa fa-mobile',
        //   content: '714-417-5316',
        // },
        {
          icon: 'fa fa-home',
          content: 'trietphan.me',
          link: 'http://trietphan.me/'
        }, {
          icon: 'fa fa-envelope-o',
          content: 'tphan5@hawk.iit.edu',
          link: 'mailto:tphan5@hawk.iit.edu'
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
        }]
      }
    }
  }
</script>

