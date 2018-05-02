<template>
  <button
    @click="$emit('click')"
    class="e__button"
    :disabled="disabled"
    :style="{'width': width, 'height': height, 'border-radius': round}"
    :class="[
    'e__button--'+type,
    {'is-disabled': disabled}
    ]"
  >
    <slot></slot>
    <inline-loading v-if="loading"></inline-loading>
  </button>
</template>
<script>
  import InlineLoading from './InlineLoading.vue';
  export default{
    props: {
      type: {
        type: String,
        default: 'default'
      },
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      },
      round: {
        type: String,
        default: '4px'
      },
      loading: Boolean,
      disabled: Boolean
    },
    components: {
      InlineLoading
    },
    data () {
      return {
        msg: 'button'
      };
    }
  };
</script>

<style lang="scss">
  @import "../static/styles/color";
  .e__button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    border-radius: 4px;
    padding: 15px 20px;
    font-size: 16px;
    &.is-round {
      border-radius: 20px;
    }
  }

  .e__button--size-medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

  .e__button--size-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  .e__button--default {
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    &:focus, &:hover {
      background: rgba(63, 170, 245, 0.05);
      border-color: rgba(63, 170, 245, 0.8);
      color: #3FAAF5;
    }
    &:disabled {
      opacity: .3;
      background: #fff;
      border: 1px solid #bfcbd9;
      color: #1f2d3d;
    }
    &:active {
      background: #fff;
      outline: 0;
    }
    &.is-plain {
      border: 1px solid #3FAAF5;
      &:focus, &:hover {
        background: #fff;
        border-color: rgba(63, 170, 245, 0.8);
        color: #3FAAF5;
      }
      &:disabled {
        background: #fff;
        border: 1px solid #3FAAF5;
        color: #1f2d3d;
      }
    }
  }

  .e__button--primary {
    background: $c-main;
    border: 1px solid $c-main;
    color: #fff;
    &:focus, &:hover {
      opacity: .7;
    }
    &:disabled {
      opacity: .3;
    }
    &.is-plain {
      background: rgba(63, 170, 245, 0.05);
      border-color: rgba(63, 170, 245, 0.8);
      color: #3FAAF5;
      &:focus, &:hover {
        opacity: 1;
        background: #3FAAF5;
        border: 1px solid #3FAAF5;
        color: #fff;
      }
      &:disabled {
        opacity: .3;
        background: rgba(63, 170, 245, 0.05);
        border-color: rgba(63, 170, 245, 0.8);
        color: #3FAAF5;
      }
    }
  }

  .e__button--success {
    background: #13ce66;
    border: 1px solid #13ce66;
    color: #fff;
    &:focus, &:hover {
      opacity: .7;
    }
    &:disabled {
      opacity: .3;
    }
    &.is-plain {
      background: rgba(19, 206, 102, 0.05);
      border-color: rgba(19, 206, 102, 0.8);
      color: #13ce66;
      &:focus, &:hover {
        opacity: 1;
        background: #13ce66;
        border: 1px solid #13ce66;
        color: #fff;
      }
      &:disabled {
        opacity: .3;
        background: rgba(19, 206, 102, 0.05);
        border-color: rgba(19, 206, 102, 0.8);
        color: #13ce66;
      }
    }
  }

  .e__button--info {
    background: #50bfff;
    border: 1px solid #50bfff;
    color: #fff;
    &:focus, &:hover {
      opacity: .7;
    }
    &:disabled {
      opacity: .3;
    }
    &.is-plain {
      background: rgba(80, 191, 255, 0.05);
      border-color: rgba(80, 191, 255, 0.8);
      color: #50bfff;
      &:focus, &:hover {
        opacity: 1;
        background: #50bfff;
        border: 1px solid #50bfff;
        color: #fff;
      }
      &:disabled {
        opacity: .3;
        background: rgba(80, 191, 255, 0.05);
        border-color: rgba(80, 191, 255, 0.8);
        color: #50bfff;
      }
    }
  }
  .e__button--warning {
    background: #f7ba2a;
    border: 1px solid #f7ba2a;
    color: #fff;
    &:focus, &:hover {
      opacity: .7;
    }
    &:disabled {
      opacity: .3;
    }
    &.is-plain {
      background: rgba(247, 186, 42, 0.05);
      border-color: rgba(247, 186, 42, 0.8);
      color: #f7ba2a;
      &:focus, &:hover {
        opacity: 1;
        background: #f7ba2a;
        border: 1px solid #f7ba2a;
        color: #fff;
      }
      &:disabled {
        opacity: .3;
        background: rgba(247, 186, 42, 0.05);
        border-color: rgba(247, 186, 42, 0.8);
        color: #f7ba2a;
      }
    }
  }

  .e__button--danger {
    background: $c-red;
    border: 1px solid $c-red;
    color: #fff;
    &:focus, &:hover {
      opacity: .7;
    }
    &:disabled {
      opacity: .3;
    }
    &.is-plain {
      background: rgba(255, 73, 73, 0.05);
      border-color: rgba(255, 73, 73, 0.8);
      color: #ff4949;
      &:focus, &:hover {
        opacity: 1;
        background: #ff4949;
        border: 1px solid #ff4949;
        color: #fff;
      }
      &:disabled {
        opacity: .3;
        background: rgba(255, 73, 73, 0.05);
        border-color: rgba(255, 73, 73, 0.8);
        color: #ff4949;
      }
    }
  }
</style>
