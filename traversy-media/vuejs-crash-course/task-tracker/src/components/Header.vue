<template>
  <header>
    <h1>{{ title }}</h1>
    <!-- 'B' (not 'b') since it's a component, not a regular HTML tag -->
    <Button 
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')" 
      :text="showAddTask ? 'Close' : 'Add Task'" 
      :color="showAddTask ? 'red' : 'green'" 
    />
  </header>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Header',
  // Custom HTML attributes (props) for our custom HTML tags (components)
  props: {
    title: String,
    showAddTask: Boolean
  },
  components: {
    Button,
  },
  computed: {
    // Hides 'Add Task' button if not on home page
    homePage() { return this.$route.path === '/' ? true : false; }
  }
} 
</script>

<style scoped>
  header { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>