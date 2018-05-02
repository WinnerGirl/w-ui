<template>
  <section class="e-qr-wrapper flex-col col-center">
    <qrcode-vue :value="strVal" :size="size" level="H" v-if="value"></qrcode-vue>
    <div class="e-qr-loading flex-col col-center" v-if="!value">
      <part-loading></part-loading>
    </div>
  </section>
</template>
<style lang="scss">
  @import "../static/styles/color";
  .e-qr-{
    &wrapper{
      padding: 10px;
    }
    &loading{
      height: 254px;
      width: 250px;
      background-color: $c-bg;
    }
  }
</style>
<script>
  import QrcodeVue from 'qrcode.vue';
  export default {
    props: {
      value: {
        type: Object,
      }
    },
    computed: {
      strVal() {
        return this.value ? JSON.stringify(this.value) : '';
      }
    },
    data() {
      return {
        size: 250,
      };
    },
    components: {
      QrcodeVue,
      PartLoading: () => import('./PartLoading.vue'),
    }
  };
</script>
