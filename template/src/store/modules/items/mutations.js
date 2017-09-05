import * as mutationTypes from './mutation-types'

const mutations = {
  [mutationTypes.LIST_ITEMS]: (state, items) => (state.items = items),

  [mutationTypes.LIST_ITEMS_ERROR]: state => (state.errors.list = true),
  [mutationTypes.CREATE_ITEM_ERROR]: state => (state.errors.create = true),
  [mutationTypes.REMOVE_ITEM_ERROR]: state => (state.errors.remove = true),

  [mutationTypes.LIST_ITEMS_SUCCESS]: state => (state.errors.list = false),
  [mutationTypes.CREATE_ITEM_SUCCESS]: state => (state.errors.create = false),
  [mutationTypes.REMOVE_ITEM_SUCCESS]: state => (state.errors.remove = false),

  [mutationTypes.LIST_ITEMS_PENDING]: (state, pending) => (state.pending.list = pending),
  [mutationTypes.CREATE_ITEM_PENDING]: (state, pending) => (state.pending.create = pending),
  [mutationTypes.REMOVE_ITEM_PENDING]: (state, pending) => (state.pending.remove = pending)

}

export default mutations
