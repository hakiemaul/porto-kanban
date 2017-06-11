<template lang="html">
  <div class="flex-container container">
    <h3>Kanban Board</h3>
    <div class="">
      <b-btn @click="$root.$emit('show::modal','modal1')">Add Task</b-btn>
      <!-- Modal Component -->
      <b-modal id="modal1" title="Submit new task">
        <form>
          <p>Task: </p>
          <b-form-input type="text" placeholder="Enter task name" v-model="task"></b-form-input><br>
          <p>Assigned To: </p>
          <b-form-input type="text" placeholder="Enter task assignee" v-model="assignee"></b-form-input><br>
          <p>Score:</p>
          <b-form-input type="text" placeholder="Enter score, e.g: 10" v-model="score"></b-form-input><br>
          <b-button size="lg" variant="success" @click="addTask">Submit</b-button>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: null,
      assignee: null,
      score: null
    }
  },
  methods: {
    addTask (event) {
      event.preventDefault()
      if (this.task && this.assignee && !isNaN(this.score)) {
        let payload = {
          task: this.task,
          assignee: this.assignee,
          score: this.score,
          status: 'backlog'
        }
        this.task = null
        this.assignee = null
        this.score = null
        this.$store.dispatch('addTodo', payload)
        this.$root.$emit('hide::modal', 'modal1')
      }
    }
  }
}
</script>

<style lang="css">
.flex-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
