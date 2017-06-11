<template lang="html">
  <b-card header="Backlog" class="mb-2 card-warning cardhead">
    <b-card v-for="(todo, index) in todos" :header="todo.task" :key="todo.id" class="mb-2 cardcontent">
      <p>Score: {{ todo.score }} </p>
      <p>Assigned to: {{ todo.assignee }} </p>
      <b-btn @click="$root.$emit('show::modal',todo.id)"class="btn btn-info btn-sm">Detail</b-btn>
      <b-modal :id="todo.id" :title="todo.task">
        <form>
          <p>Detail: {{ todo.detail }}</p>
          <p>Assigned to: {{ todo.assignee }}</p>
          <div class="flex-container">
            <b-button size="sm" variant="danger" @click="remove(todo)">Remove</b-button>
            <b-button size="sm" variant="info" @click="becomeTodo(todo)">To Todo</b-button>
          </div>
        </form>
      </b-modal>
    </b-card>
  </b-card>
</template>

<script>
export default {
  computed: {
    todos () {
      return this.$store.getters.backlog
    }
  },
  methods: {
    remove (todo) {
      if (window.confirm('Do you want to remove this task?')) {
        this.$store.dispatch('removeTodo', todo.id)
      }
    },
    becomeTodo (todo) {
      this.$store.dispatch('becomeTodo', todo)
    }
  }
}
</script>

<style lang="css">
</style>
