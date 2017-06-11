<template lang="html">
  <b-card header="Todo" class="mb-2 card-info cardhead">
    <b-card v-for="(todo, index) in todos" :header="todo.task" :key="todo.id" class="mb-2 cardcontent">
      <p>Score: {{ todo.score }} </p>
      <p>Assigned to: {{ todo.assignee }} </p>
      <b-btn @click="$root.$emit('show::modal',todo.id)"class="btn btn-info btn-sm">Detail</b-btn>
      <b-modal :id="todo.id" :title="todo.task">
        <form>
          <p>Detail: {{ todo.detail }}</p>
          <p>Assigned to: {{ todo.assignee }}</p>
          <div class="flex-container">
            <b-button size="sm" variant="warning" @click="becomeBacklog(todo)">To Backlog</b-button>
            <b-button size="sm" variant="danger" @click="remove(todo)">Remove</b-button>
            <b-button size="sm" variant="primary" @click="becomeDoing(todo)">To Doing</b-button>
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
      return this.$store.getters.todo
    }
  },
  methods: {
    remove (todo) {
      if (window.confirm('Do you want to remove this task?')) {
        this.$store.dispatch('removeTodo', todo.id)
      }
    },
    becomeDoing (todo) {
      this.$store.dispatch('becomeDoing', todo)
    },
    becomeBacklog (todo) {
      this.$store.dispatch('becomeBacklog', todo)
    }
  }
}
</script>

<style lang="css">
</style>
