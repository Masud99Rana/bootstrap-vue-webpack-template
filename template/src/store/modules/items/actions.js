import * as mutationTypes from './mutation-types'

import { itemService } from '@/services'

const actions = {
  async listItems ({ commit }) {
    commit(mutationTypes.LIST_ITEMS_PENDING, true)
    try {
      const items = await itemService.fetchAll()
      commit(mutationTypes.LIST_ITEMS, items)
      commit(mutationTypes.LIST_ITEMS_SUCCESS)
    } catch (error) {
      commit(mutationTypes.LIST_ITEMS_ERROR)
    }
    commit(mutationTypes.LIST_ITEMS_PENDING, false)
  },

  async removeItem ({ commit, dispatch }, id) {
    commit(mutationTypes.REMOVE_ITEM_PENDING, true)
    try {
      await itemService.remove(id)
      commit(mutationTypes.REMOVE_ITEM_SUCCESS)
      dispatch('listItems')
    } catch (error) {
      commit(mutationTypes.REMOVE_ITEM_ERROR)
    }
    commit(mutationTypes.REMOVE_ITEM_PENDING, false)
  }
}

export default actions
