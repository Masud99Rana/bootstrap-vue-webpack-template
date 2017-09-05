import * as mutationTypes from './mutation-types'

import { itemService } from '@/services'

const actions = {
  async listItems ({ commit }) {
    commit(mutationTypes.LIST_ITEMS_PENDING, true)
    try {
      const items = await itemService.fetchItems()
      commit(mutationTypes.LIST_ITEMS, items)
      commit(mutationTypes.LIST_ITEMS_SUCCESS)
    } catch (error) {
      commit(mutationTypes.LIST_ITEMS_ERROR)
    }
    commit(mutationTypes.LIST_ITEMS_PENDING, false)
  }
}

export default actions
