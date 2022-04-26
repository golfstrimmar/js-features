import {random , uniq } from 'lodash';
import axios from 'axios';
import {
  key,
  cityesUrl as url,
  mapCityes,
  month,
  num
} from './src/constants';


console.log('key >' , key, 'cityesUrl > ' , url, month,num);


axios.get(url)
.then((data) => {
  const cityes = data.data ;
  const mapCitties = mapCityes(cityes)
  console.log(cityes,mapCitties);
});



