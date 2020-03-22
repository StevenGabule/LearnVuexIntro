<template>
  <div id="app">
    <h2>{{title}}</h2>
    <form @submit.prevent="addTodo">
      <label for="newTodo">New Todo</label>
      <input type="text" id="newTodo" name="newTodo" v-model="newTodo">
      <button type="submit" name="button">Add</button>
    </form>
    <button @click="allDone" type="button" name="button">Add Done</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input @click="toggleTodoDone(index)" type="checkbox" :checked="todo.done">
        <span :class="{done: todo.done}">{{todo.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'App',
  computed: {
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(value) {
        this.$store.commit('setNewTodo', value);
      },
    },
    ...mapState(['todos', 'title']),
  },
  methods: {
    ...mapMutations(['allDone']),
    ...mapActions(['addTodo', 'toggleTodoDone']),
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin-top: 60px
  }
  .done {
    text-decoration: line-through;
  }
</style>
