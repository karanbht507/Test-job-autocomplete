import axios from 'axios';

export async function getCharacters(payload) {
  console.log('--------pay', payload)
  const characters = await axios({
    method: 'get',
    url: `character/?name=${payload}`,
    baseURL: `${process.env.REACT_APP_API_URL}`,
  });
  return characters;
}