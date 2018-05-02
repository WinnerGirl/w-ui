<template>
  <div>
    <p>运行例子</p>
    <e-button loading>默认按钮</e-button>
    <e-button type="primary" loading>主要按钮</e-button>
    <e-button type="success" width="100px" height="50px">成功按钮</e-button>
    <e-button type="info" round="20px">信息按钮</e-button>
    <e-button type="warning">警告按钮</e-button>
    <div><e-button type="danger" width="100%" disabled>危险按钮（禁用）</e-button></div>
    <p>HTML 写法</p>
    <e-highlight type="html" code='<e-button loading>默认按钮</e-button>
      <e-button type="primary" loading>主要按钮</e-button>
      <e-button type="success" width="100px" height="50px">成功按钮</e-button>
      <e-button type="info" round="20px">信息按钮</e-button>
      <e-button type="warning">警告按钮</e-button>
      <div><e-button type="danger" width="100%" disabled>危险按钮（禁用）</e-button></div>'/>
    <p>JS 写法</p>
    <e-highlight
      code="
      /**
       * 参数说明
       * 参数     说明            类型           可选值                    默认值
       * type     类型           string  primary,success,warning,danger,info —
       * width    长度           string          -                           —
       * height   高度           string          -                           —
       * round    圆角           string          -                           4px
       * disabled 是否禁用状态   boolean         —                          false
       * loading  提交状态       boolean          —                         false
   */
    import EButton from '../../../components/EButton.vue';
      export default {
        components: {
          EButton // 引入组件
        }
      };"/>
  </div>
</template>

<script>
  /**
   * 参数说明
   * 参数     说明            类型           可选值                    默认值
   * type     类型           string  primary,success,warning,danger,info —
   * width    长度           string          -                           —
   * height   高度           string          -                           —
   * round    圆角           string          -                           4px
   * disabled 是否禁用状态   boolean         —                          false
   * loading  提交状态       boolean          —                         false
   */
  import EButton from '../../../components/EButton.vue';

  export default {
    components: {
      EButton
    }
  };
</script>
