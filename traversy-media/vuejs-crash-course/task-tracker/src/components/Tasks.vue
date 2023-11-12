<template>
  <!-- Need `:key' so that each rendered element is given a unique identifier -->
  <div :key="task.id" v-for="task in tasks">
    <!-- Send data `id` data up another level (App.vue) -->
    <Task 
      @toggle-reminder="$emit('toggle-reminder', task.id)" 
      @delete-task="$emit('delete-task', task.id)" 
      :task="task" 
    />
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  name: 'Tasks',
  props: {
    tasks: Array
  },
  emits: ['delete-task', 'toggle-reminder'],
  components: {
    Task
  },
}
</script>

