/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Connor Dillon
 * @license MIT
 *
 **/

class EasyHTTP {
  // Makes an HTTP GET Request
  async get(url) {
    const response = await fetch(url)
    const resData = await response.json()
    return resData
  }

  // Makes an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const resData = await response.json()
    return resData
  }

  // Makes an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const resData = await response.json()
    return resData
  }

  // Makes an HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })

    const resData = await 'Resource Deleted...'
    return resData
  }
}

export const http = new EasyHTTP()
