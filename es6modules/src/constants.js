export const key ="12345test";
// export default key;
const month = "june";
const number = 6;
export  {month,number as num};
export const cityesUrl = "https://gist.githubusercontent.com/VasilyMur/8b679b5482499a97c08cca9b6dffef03/raw/4dfd59daa4ac0a6ebd7d2f144b860d62054b4576/uscities.json"

export function mapCityes(cityes){
  return cityes.map((responce )=>{
const {city, latitude} = responce;
return {city, latitude};
  })

}

