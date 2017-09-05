const getters = {
  items: state => state.items,

  oldItems: state => state.items.filter(item => item.old)
}

export default getters
