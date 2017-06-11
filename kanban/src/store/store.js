import * as firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const config = {
  apiKey: 'AIzaSyA1_GmSaCxf1gxPRC-11NmW5niDIaaO3KE',
  databaseURL: 'https://fir-lecture-77a47.firebaseio.com',
  projectId: 'fir-lecture-77a47'
}
const db = firebase.initializeApp(config).database()
var todosRef = db.ref('todos')

export const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    getTodos: function (state) {
      todosRef.on('value', snapshot => {
        state.todos = []
        for (var prop in snapshot.val()) {
          state.todos.push(snapshot.val()[prop])
        }
      })
    }
  },
  actions: {
    addTodo (store, context) {
      let idx = store.state.todos[store.state.todos.length - 1].id + 1
      db.ref(`todos/${idx}`).set({
        id: idx,
        task: context.task,
        assignee: context.assignee,
        score: context.score,
        status: context.status
      })
    },
    removeTodo (state, context) {
      db.ref(`todos/${context}`).remove()
    },
    becomeBacklog (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        assignee: context.assignee,
        score: context.score,
        status: 'backlog'
      })
    },
    becomeTodo (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        assignee: context.assignee,
        score: context.score,
        status: 'todo'
      })
    },
    becomeDoing (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        assignee: context.assignee,
        score: context.score,
        status: 'doing'
      })
    },
    becomeDone (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        assignee: context.assignee,
        score: context.score,
        status: 'done'
      })
    }
  },
  getters: {
    backlog (state) {
      return state.todos.filter(todo => {
        return todo.status === 'backlog'
      })
    },
    todo (state) {
      return state.todos.filter(todo => {
        return todo.status === 'todo'
      })
    },
    doing (state) {
      return state.todos.filter(todo => {
        return todo.status === 'doing'
      })
    },
    done (state) {
      return state.todos.filter(todo => {
        return todo.status === 'done'
      })
    }
  }
})
