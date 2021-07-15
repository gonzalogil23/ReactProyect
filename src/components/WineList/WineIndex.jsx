import React from 'react';
import List from  './List';
import {useState, useEffect} from 'react';
import { Wines } from './Wines';

function WineIndex() {

        const [wines, setWines] = useState([]);
      
        useEffect(() => {
          Wines().then(res => setWines(res));
        }, []);

    return (
        <div className="wineList" > 
            <List wines= { wines } />
        </div>
    )
}

export default WineIndex
