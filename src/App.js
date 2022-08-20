import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Searchbar from './component/Searchbar';
import countries from './data/Countries';

function App() {
  const [querry, setQuery] = useState('');
  const [suggetions, setsuggetions] = useState([]);

  useEffect(() => {
    if (querry === '') {
      setsuggetions([]);
    } else {
      let newlistofcountries = countries
        .filter((item) =>
          item.country.toLowerCase().indexOf(querry) !== -1 ? true : false
        )
        .map((item) => item.country);
      setsuggetions(newlistofcountries);
    }
  }, [querry]);
  return (
    <div className='App'>
      <h1>search country here</h1>
      <Searchbar
        suggetions={suggetions}
        querry={querry}
        onChange={(val) => setQuery(val)}
      />
    </div>
  );
}

export default App;
