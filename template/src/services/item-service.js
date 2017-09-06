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

export function fetchAll () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(JSON.stringify(items.map(normalizeResponse))))
    }, 1000)
  })
}

export function fetchOne (id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Object.assign({}, new Item(items.find(item => item.id === id))))
    }, 1000)
  })
}

export function create (data) {
  data.id = Math.random() * Number.MAX_SAFE_INTEGER
  const item = normalizeRequest(data)
  items.push(item)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(item)
    }, 1000)
  })
}

export function remove (id) {
  const item = items.find(item => item.id === id)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!item) {
        reject(new Error('Item not found'))
      }
      items = items.filter(item => item.id !== id)
      resolve(item)
    }, 1000)
  })
}
