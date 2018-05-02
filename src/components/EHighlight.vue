<template>
  <pre class="e_high-light-wrapper">
    <code :class="type">
      {{code}}
    </code>
  </pre>
</template>
<script>
  import Hljs from 'highlight.js';
  import 'highlight.js/styles/zenburn.css';
  export default{
    props: {
      code: {
        default: 'hello world'
      },
      type: {
        default: 'javascript'
      }
    },
    data () {
      return {
      };
    },
    mounted() {
      let blocks = this.$el.querySelectorAll('code');
      blocks.forEach((block) => {
        Hljs.highlightBlock(block);
      });
    },
  };
</script>

<style lang="scss">
  .e_high-light-wrapper{
    padding: 0;
    line-height: 20px;
    white-space: nowrap;
    code{
      padding: 0;
      border-radius: 6px;
      word-wrap: break-word;
      word-break: break-all;
      white-space: pre-wrap;
      width: 100%;
    }
  }
</style>
