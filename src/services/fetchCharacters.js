import axios from 'axios';

export async function getCharacters(payload) {
  console.log('--------pay', payload)
  const characters = await axios({
    method: 'get',
    url: `character/?name=${payload}`,
    baseURL: "https://rickandmortyapi.com/api/",
  });
  return characters;
}