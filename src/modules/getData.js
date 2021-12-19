const getData = (str) => {
  return fetch(`https://ozone-glo-default-rtdb.firebaseio.com/goods.json`)
    .then((response) => {
      return response.json()
    })
}

export default getData;