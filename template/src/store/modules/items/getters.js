const getters = {
  items: state => state.items,

  oldItems: state => state.items.filter(item => item.old),

  listError: state => state.errors.list
}

export default getters
