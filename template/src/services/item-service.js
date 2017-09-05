const items = [
  { id: 1, name: 'item1', old: true },
  { id: 2, name: 'item2', old: false },
  { id: 3, name: 'item3', old: false },
  { id: 4, name: 'item4', old: true }
]

export function fetchItems () {
  return Promise.resolve(JSON.parse(JSON.stringify(items)))
}

export function fetchItem (id) {
  return Promise.resolve(Object.assign({}, items.find(_item => _item.id === id)))
}
