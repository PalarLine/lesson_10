<template >
  <div class="container_wrapper">
    <task-manager />
  </div> 
</template>

<script>
import TaskManager from "./components/TaskManager.vue";

export default {
  name: "App",
  components: {
    TaskManager,
  },
};
</script>

<style lang="scss">
@import './assets/style'

</style>
