export const Wines = () => {

    const data = [
        {id: 1, name: 'Gaia', type:'Malbec', winery:'Domaine Bousquet', price: 3700},
        {id: 2, name: '2016', type:'Malbec', winery:'Matias Riccitelli', price: 5600},
        {id: 3, name: 'Gran Enemigo', type:'Cabernet Franc', winery:'Casa Vigil', price: 7000},
        {id: 4, name: 'Don Malbec', type:'Malbec', winery:'Escorihuela Gascón', price: 14200},
        {id: 5, name: 'Luigi Bosca', type:'Cabernet Sauvignon', winery:'Luigi Bosca', price: 2700}
    ];

   return new Promise ((res,reject) => {
    setTimeout(() => {
        res(data);
      }, 3000);
   })};
