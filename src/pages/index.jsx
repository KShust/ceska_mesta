import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../components/City/City';
import { cities } from './cz.cities';

document.querySelector('#root').innerHTML = render(
  <>
    {cities.map((mesto) => (
      <div key={mesto.name}>
        <City name={mesto.name} population={mesto.population} area={mesto.area} 
        okres={mesto.district} foto={mesto.photo}/>
      </div>
    ))}
  </>
);
