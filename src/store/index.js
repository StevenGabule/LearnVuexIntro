import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Introduction to Vuex',
    newTodo: '',
    todos: [
      {
        id: 1,
        title: 'Learn Vuex.JS',
        done: false,
      },
      {
        id: 2,
        title: 'Learn ReactJS',
        done: true,
      },
    ],
  },
  mutations: {
    setNewTodo(state, value) {
      state.newTodo = value;
    },

    addTodo({ todos, newTodo }) {
      todos.push({
        title: newTodo,
        done: false,
      });
    },

    setTodoDone(state, index) {
      state.todos[index].done = true;
    },

    setTodoNotDone(state, index) {
      state.todos[index].done = false;
    },

    allDone(state) {
      state.todos.forEach((todo) => {
        // eslint-disable-next-line no-param-reassign
        todo.done = true;
      });
    },
  },
  actions: {
    addTodo({ commit }) {
      commit('addTodo');
      commit('setNewTodo', '');
    },

    toggleTodoDone(context, index) {
      const todo = context.state.todos[index];
      if (todo.done) {
        context.commit('setTodoNotDone', index);
      } else {
        context.commit('setTodoDone', index);
      }
    },
  },
  modules: {},
});
