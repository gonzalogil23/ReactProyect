export const Item = () => {
  const data = [
    {
      id: 1,
      name: "Gaia",
      type: "Malbec",
      winery: "Domaine Bousquet",
      price: 3700,
      img: "../../../img/GaiaMalbec.jpg",
    },
    {
      id: 2,
      name: "2016",
      type: "Malbec",
      winery: "Matias Riccitelli",
      price: 5600,
      img: "../../../img/malbecRiccitelli.jpg",
    },
    {
      id: 3,
      name: "Gran Enemigo",
      type: "Cabernet Franc",
      winery: "Casa Vigil",
      price: 7000,
      img: "../../../img/granEnemigo.jpg",
    },
    {
      id: 4,
      name: "Don Malbec",
      type: "Malbec",
      winery: "Escorihuela Gascón",
      price: 14200,
      img: "../../../img/don-malbec.jpg",
    },
    {
      id: 5,
      name: "Luigi Bosca",
      type: "Cabernet Sauvignon",
      winery: "Luigi Bosca",
      price: 2700,
      img: "../../../img/luigi-bosca-cs.jpg",
    },
  ];

  return new Promise((res, reject) => {
    setTimeout(() => {
      res(data);
    }, 3000);
  });
};
