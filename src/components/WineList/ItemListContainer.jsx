import React from 'react';
import ItemList from  './ItemList';
import {useState, useEffect} from 'react';
import { Wines } from './Item';

function ItemListContainer() {

        const [wines, setWines] = useState([]);
      
        useEffect(() => {
          Wines().then(res => setWines(res));
        }, []);

    return (
        <div className="wineList" > 
            <ItemList wines= { wines } />
        </div>
    )
}

export default ItemListContainer
