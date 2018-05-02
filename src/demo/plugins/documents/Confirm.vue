<template>
  <div>
    <p>运行例子</p>
    <div @click="testConfirm" style="text-align: center; padding-top: 20px; font-size: 18px;">点击我，就弹个框给你</div>
    <p>Js 用法</p>
    <e-highlight
      code="// 里面接受参数比较多， tips 接受标签或者文本
 this.$confirm.show({
    tips: [
      `<div style='background-color: #F9F9F9' class='flex-col col-center pt25 pb15'><i class='icon icon-ok'></i> <span class='text-gray fs12 pt4 pb4'>关注职位</span> <strong class='fs14'>UI 设计师</strong></div>`,
      `<div class='flex-col col-center pb30'><p>通过该APP录制视频回答将有机会</p><strong class='text-red'>获得面试邀请</strong> <strong class='text-red'>大幅提升面试成功率</strong></div>`
    ],
    options: {
      // 最外边样式,可以不传
      wrapperStyle: {
        padding: 0,
        margin: 0,
      },
      // 内容边样式,可以不传
      contentStyle: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      // 隐藏取消按钮， 默认是显示。cancelValue 也可以设置，当cancelHide是false的时候
      cancelHide: true,
      // 隐藏右上角删除按钮， 默认是显示
      timesHide: true,
      // 确定文字，默认是“确定”。 confirmHide也可以设置为true, 那么确定按钮不显示
      confirmValue: '知道了',
     }
    }).then((status) => {
      if (status === 'ok') {
        console.log('点击确定');
      }
      if (status === 'cancel') {
        console.log('点击取消');
      }
  });
    "/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      };
    },
    computed: {
    },
    methods: {
      testConfirm () {
        this.$confirm.show({
          tips: [
            `<div style="background-color: #F9F9F9" class="flex-col col-center pt25 pb15"><i class="icon icon-ok"></i> <span class="text-gray fs12 pt4 pb4">关注职位</span> <strong class="fs14">UI 设计师</strong></div>`,
            `<div class="flex-col col-center pb30"><p>通过该APP录制视频回答将有机会</p><strong class="text-red">获得面试邀请</strong> <strong class="text-red">大幅提升面试成功率</strong></div>`
          ],
          options: {
            wrapperStyle: {
              padding: 0,
              margin: 0,
            },
            contentStyle: {
              paddingLeft: 0,
              paddingRight: 0,
            },
            cancelHide: true,
            timesHide: true,
            confirmValue: '知道了',
          }
        }).then((status) => {
          if (status === 'ok') {
            console.log('点击确定');
          }
          if (status === 'cancel') {
            console.log('点击取消');
          }
        });
      },
    }
  };
</script>
<style lang="scss">
</style>
