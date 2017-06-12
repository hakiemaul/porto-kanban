<template lang="html">
  <b-card header="Doing" class="mb-2 card-primary cardhead">
    <b-card v-for="todo in todos" :header="todo.task" :key="todo.id" class="mb-2 cardcontent">
      <p>Score: {{ todo.score }} </p>
      <p>Assigned to: {{ todo.assignee }} </p>
      <b-btn @click="$root.$emit('show::modal',todo.id.toString())"class="btn btn-info btn-sm">Detail</b-btn>
      <b-modal :id="todo.id.toString()" :title="todo.task">
        <form>
          <p>Detail: {{ todo.description }}</p>
          <p>Assigned to: {{ todo.assignee }}</p>
          <div class="flex-container">
            <b-button size="sm" variant="info" @click="becomeTodo(todo)">To Todo</b-button>
            <b-button size="sm" variant="danger" @click="remove(todo)">Remove</b-button>
            <b-button size="sm" variant="success" @click="becomeDone(todo)">To Done</b-button>
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
      return this.$store.getters.doing
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
    },
    becomeDone (todo) {
      this.$store.dispatch('becomeDone', todo)
    }
  }
}
</script>

<style lang="css">
</style>
