const BASE_URL = 'https://swapi.co/api/'

export function getAllStarships() {
  return fetch(`${BASE_URL}starships/?page=`,{mode: "cors"}).then(res => res.json())
}