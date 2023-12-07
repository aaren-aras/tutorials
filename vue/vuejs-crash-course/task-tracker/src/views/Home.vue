<template>
  <AddTask 
    v-show="showAddTask" 
    @add-task="addTask" 
  />
  <Tasks 
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask" 
    :tasks="tasks" 
  />
</template>

<script>
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

export default {
  name: 'Home',
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: []
    }
  },
    methods: {
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      });
      const data = await res.json();

      // Copy over all existing tasks and add newly posted task
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      const res = await fetch(`api/tasks/${id}`, {
        method: 'DELETE',
      })

      // If deleted successfully (status code 200)
      // Don't need `data variable` since nothing returned
      res.status === 200 
        // Returns all tasks back except the one with the matching `id`
        ? this.tasks = this.tasks.filter(task => task.id !== id)
        : alert('Error: Cannot delete task');
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};

      const res = await fetch(`api/tasks/${id}`, {
        // `PUT` updates existing resource
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedTask)
      });
      const data = await res.json();

      // If task matches passed `id`, toggle `reminder`; else, don't do anything
      this.tasks = this.tasks.map(task => task.id === id 
        // Copy over all `task` props but override `reminder` 
        ? {...task, reminder: data.reminder} 
        : task
      );
    },
    async fetchTasks() {
      // Works with 'http' but not 'https' (due to CORS policy)
      const res = await fetch('api/tasks');
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      // Works with 'http' but not 'https' (due to CORS policy)
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    }
  },
  // Built-in lifecycle method called synchronously after instance has been initialized
  async created() {
    this.tasks = await this.fetchTasks();
  }
}
</script>
