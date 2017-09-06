const getters = {
  items: state => state.items,

  pending: state => Object.keys(state.pending).some(key => state.pending[key]),

  listError: state => state.errors.list,

  removeError: state => state.errors.remove,
}

export default getters
