import Item from '@/models/Item'

let items = [
  { id: 1, name: 'item1', old: true },
  { id: 2, name: 'item2', old: false },
  { id: 3, name: 'item3', old: false },
  { id: 4, name: 'item4', old: true }
]

function normalizeResponse (response) {
  return new Item(response)
}

function normalizeRequest (request) {
  return new Item(request)
}

export function fetchItems () {
  return Promise.resolve(JSON.parse(JSON.stringify(items.map(normalizeResponse))))
}

export function fetchItem (id) {
  return Promise.resolve(Object.assign({}, new Item(items.find(item => item.id === id))))
}

export function createItem (data) {
  data.id = Math.random() * Number.MAX_SAFE_INTEGER
  items.push(normalizeRequest(data))
  return Promise.resolve()
}

export function deleteItem (id) {
  const item = items.find(item => { item.id = id })
  if (!item) {
    return Promise.reject(new Error('Item not found'))
  }
  items = items.filter(item => item.id !== id)
  return Promise.resolve(item)
}
