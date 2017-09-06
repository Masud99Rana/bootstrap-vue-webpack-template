<template>
  <b-container class="items">
    <b-row>
      <b-col>
        <b-row>
          <b-col>
            <h1>\{{ appTitle }}</h1>
          </b-col>
        </b-row>

        <hr class="my-4">

        <b-row class="mb-3">
          <b-col>
            <b-button :disabled="pending" variant="primary" @click="listItems">List items</b-button>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-alert :show="pending" variant="info">Loading...</b-alert>
            <b-alert :show="listError" variant="danger">Failed to list items</b-alert>
            <b-alert :show="removeError" variant="danger">Failed to delete item</b-alert>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-list-group>
              <b-list-group-item v-for="item in items" :key="item.id">
                <span>\{{ item.name }}</span>
                <i @click="removeItem(item.id)" class="fa fa-close cursor-pointer"></i>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'items',

  created () {
    this.listItems()
  },

  computed: {
    ...mapGetters([ 'appTitle' ]),
    ...mapGetters('items', [ 'items', 'listError', 'removeError', 'pending' ])
  },

  methods: mapActions('items', [ 'listItems', 'removeItem' ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
