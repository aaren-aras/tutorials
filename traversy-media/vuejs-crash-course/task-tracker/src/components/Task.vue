<template>
  <!-- Add `reminder` class if it exists, but always add `task` class -->
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
      </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  },
  methods: {
    onDelete(id) {
      // Create custom event to send `id` data to parent component (Tasks.vue)
      this.$emit('delete-task', id); // Kebab case is conventional for event name
    }
  }
}
</script>

<style scoped>
  .task {
    background: #f4f4f4;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
  }

  .task.reminder {
    border-left: 5px solid green;
  }

  .task h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .fas { 
    color: red;
  }
</style>