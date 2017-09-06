<template>
  <div class="items">
    <h1>\{{ appTitle }}</h1>

    <b-button variant="primary" @click="listItems">List items</b-button>

    <b-alert :show="listError" variant="danger">Failed to list items</b-alert>

    <b-list-group>
      <b-list-group-item v-for="item in items" :key="item.id">
        <span>\{{ item.name }}</span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'items',

  computed: {
    ...mapGetters([ 'appTitle' ]),
    ...mapGetters('items', [ 'items', 'listError' ])
  },

  methods: mapActions('items', [ 'listItems' ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
