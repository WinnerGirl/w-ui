<template>
  <div>
    <div @click="openDatePicker">{{selectedDate}}</div>
    <e-date-picker
      v-if="showDatePicker"
      :date="date"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      @cancel="cancel"
    ></e-date-picker>

    <div>
      <p>HTML 写法</p>
      <e-highlight type="html" code='<e-date-picker
      v-if="showDatePicker"
      :date="date"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      @cancel="cancel"
    ></e-date-picker>'/>
      <p>参数说明</p>
      <e-highlight
        code='// 是否创建日历
      v-if="showDatePicker"
      // 日历原始数据（默认值）
      :date="date"
       // 日历最小值
      :min-date="minDate"
      // 日历最大值
      :max-date="maxDate"
      // 确定回调 回调参数是一个json，里面包含选择的详细信息
      @confirm="confirm"
      // 取消回调
      @cancel="cancel"'/>
      <p>JS 写法</p>
      <e-highlight
        code="
    import EDatePicker from '../../../components/EDatePicker.vue';

    export default {
      data() {
        return {
          date: '2017-09-11',
          minDate: '2000-09-11',
          maxDate: '2020-09-11',
          showDatePicker: false,
          selectedDate: '点击选择日期',
        };
      },
      methods: {
        openDatePicker() {
          this.showDatePicker = true;
        },
        confirm(value) {
          this.showDatePicker = false;
          this.selectedDate = value;
        },
        cancel() {
          this.showDatePicker = false;
        },
      },
      components: {
        EDatePicker
      }
    };"/>
    </div>
  </div>
</template>

<script>
  import EDatePicker from '../../../components/EDatePicker.vue';

  export default {
    data() {
      return {
        date: '2017-09-11',
        minDate: '2000-09-11',
        maxDate: '2020-09-11',
        showDatePicker: false,
        selectedDate: '点击选择日期',
      };
    },
    methods: {
      openDatePicker() {
        this.showDatePicker = true;
      },
      confirm(value) {
        this.showDatePicker = false;
        this.selectedDate = value;
        this.date = value.date;
      },
      cancel() {
        this.showDatePicker = false;
      },
    },
    components: {
      EDatePicker
    }
  };
</script>
<style lang="scss">

</style>
