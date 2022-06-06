<template>
  <div class="c-sales_filter">
    <input
      type="search"
      v-model="searchValue"
      placeholder="Search"
      class="c-sales__input"
      @input="changeSearchVal"
    />
    <button class="c-sales-filter__button" @click="clearSearchVal">Clear</button>
  </div>
</template>

<script>
export default {
  name: "SalesTeamFilterComponent",
  emits: ["updateSearchVal"],
  
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
   changeSearchVal() {
      this.$emit("updateSearchVal", this.searchValue);
      let url = new URL(window.location);
      url.search = "filter=" + this.searchValue;
      window.history.pushState({}, '', url);
    },
    clearSearchVal(){
      this.searchValue = "";
      this.$emit("updateSearchVal", this.searchValue);
      let url = new URL(window.location);
      url.search = '';
      window.history.pushState({}, '', url);
    },
  },
};
</script>
