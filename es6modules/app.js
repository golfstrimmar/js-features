import {random , uniq } from 'lodash';
import getCityes,{
  key,
  cityesUrl as url,
  mapCityes,
  month,
  num
} from './src/constants';


getCityes().then(
  (cityes) =>{
    const mapCitties = mapCityes(cityes);
    console.log('cityes>>>>',cityes, mapCitties);

  }
)



