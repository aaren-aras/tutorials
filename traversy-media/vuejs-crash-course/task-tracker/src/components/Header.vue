<template>
  <header>
    <h1>{{ title }}</h1>
    <!-- 'B' (not 'b') since it's a component, not a regular HTML tag -->
    <Button text="Add Task" color="green" />
  </header>
</template>

<script>
import Button from './Button'

export default {
  name: 'Header',
  // Custom HTML attributes (props) for our custom HTML tags (components)
  props: {
    title: {
      type: String,
    }
  },
  components: {
    Button,
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