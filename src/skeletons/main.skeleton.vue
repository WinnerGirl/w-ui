<template>
   <div class="main-skeleton">
     <div class="panel" v-for="i in [1,2,3,4]" :key="i">
       <div class="flex-row">
         <w-skeleton height="19px" width="45%"></w-skeleton>
         <w-skeleton height="19px" width="45%"></w-skeleton>
       </div>
       <div class="title"><w-skeleton height="19px" width="35%"></w-skeleton></div>
       <div class="text"><w-skeleton height="19px" width="80%"></w-skeleton></div>
     </div>
   </div>

</template>

<script>
  import WSkeleton from '../components/Skeleton.vue';

  export default {
    data() {
      return {
      };
    },
    components: {
      WSkeleton
    }
  };
</script>

<style scoped>
 .main-skeleton{
     padding: 15px;
   }
 .inner-panel{
   background: #fff;
   padding: 15px;
   margin-top: -15px;
 }
 .panel{
   background: #fff;
   padding: 15px;
   /*border-bottom: 1px solid #f1f1f1;*/
 }
 .text{
   margin-top: 10px;
 }
 .title{
   margin-top: 20px;
 }

</style>

