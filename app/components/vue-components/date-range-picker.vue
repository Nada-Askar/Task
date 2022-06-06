<template>
    <div class="c-date-range-picker__container">
        <div class="c-date-range-picker__picker">
            <label for="start">
                Start date:
            </label>
            <input type="date" v-model="startDate" />
        </div>
        <div class="c-date-range-picker__picker">
            <label for="end">
                End date:
            </label>
            <input type="date" v-model="endDate" @change="changeDate" />
        </div>
    </div>
</template>

<script>

export default {
  name: "DateRangePickerComponent",
  emits: ["updateDates"],
  data() {
    return {
      startDate: "",
      endDate: "",
    };
},
  methods: {
    changeDate() {
      this.$emit('updateDates', this.startDate, this.endDate);
    }
},
};
</script>
