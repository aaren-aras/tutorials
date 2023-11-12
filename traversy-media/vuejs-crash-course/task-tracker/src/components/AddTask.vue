<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <!-- `v-model` creates 2-way binding b/w HTML value and JS variable for FORMS/INPUTS --> 
      <input type="text" v-model="text" name="text" placeholder="Add Task"/>
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input type="text" v-model="day" name="day" placeholder="Add Day & Time"/>
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder"/>
    </div>

    <input type="submit" value="Save Task" class="btn btn-block"/>
  </form>
</template>

<script>
  export default {
    name: 'AddTask',
    data() {
      return {
        // Default states
        text: '',
        day: '',
        reminder: false
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();

        if (!this.text) {
          alert('Please add a task');
          return; 
        }

        const newTask = {
          /* Don't do for actual app since duplicates; id provided by 
          json-server (https://www.npmjs.com/package/json-server) */
          // id: Math.floor(Math.random() * 100000), 
          text: this.text,
          day: this.day,
          reminder: this.reminder
        }

        this.$emit('add-task', newTask);

        this.text = '';
        this.day = '';
        this.reminder = false;
      }
    }
  }
</script>

<style scoped>
  .add-form {
    margin-bottom: 40px;
  }

  .form-control {
    margin: 20px 0;
  }

  .form-control label {
    display: block;
  }

  .form-control input {
    width: 100%;
    height: 40px;
    font-size: 17px;
    padding: 3px 7px;
    margin: 5px;
  }

  .form-control-check {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-control-check label {
    flex: 1;
  }

  .form-control-check input {
    flex: 2;
    height: 20px;
  }
</style>
