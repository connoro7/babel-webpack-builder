import { http } from './http'

function httpGet() {
  http
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(console.log('Project Initialized'))
    .catch((err) => console.log(err))
}

httpGet()
