export const getItem = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data[id - 1]);
    }, 2000);
  });
};

export const getMockedItems = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000);
  });
};

export const getItemByCategory = (category) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data.filter((item) => item.category === category));
    }, 2000);
  });
};

export const getItemDetail = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data.find((item) => item.id === parseInt(id)));
    }, 2000);
  });
};

export const data = [
  {
    id: 1,
    name: "Gaia",
    type: "Malbec",
    winery: "Domaine Bousquet",
    price: 3700,
    img: "../../../img/GaiaMalbec.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Malbec",
  },
  {
    id: 2,
    name: "2016",
    type: "Malbec",
    winery: "Matias Riccitelli",
    price: 5600,
    img: "../../../img/malbecRiccitelli.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Malbec",
  },
  {
    id: 3,
    name: "Gran Enemigo",
    type: "Cabernet Franc",
    winery: "Casa Vigil",
    price: 7000,
    img: "../../../img/granEnemigo.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "CabernetSauvignon",
  },
  {
    id: 4,
    name: "Don Malbec",
    type: "Malbec",
    winery: "Escorihuela Gascón",
    price: 8200,
    img: "../../../img/don-malbec.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Malbec",
  },
  {
    id: 5,
    name: "Luigi Bosca",
    type: "Cabernet Sauvignon",
    winery: "Luigi Bosca",
    price: 2700,
    img: "../../../img/luigi-bosca-cs.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "CabernetSauvignon",
  },
  {
    id: 6,
    name: "Mirador",
    type: "Malbec",
    winery: "Achaval Ferrer",
    price: 5800,
    img: "../../../img/achavalFerrerMiradorMalbec.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Malbec",
  },
  {
    id: 7,
    name: "Semillón",
    type: "Blanco (Edición Limitada)",
    winery: "Andeluna",
    price: 3900,
    img: "../../../img/andelunaBlanco.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Blanco",
  },
  {
    id: 8,
    name: "Blanc de Franc",
    type: "Rosé",
    winery: "Andeluna",
    price: 4500,
    img: "../../../img/andeluna-blancdefranc-rose.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Rosé",
  },
  {
    id: 9,
    name: "Angélica Zapata",
    type: "Chardonnay",
    winery: "Catena Zapata",
    price: 8200,
    img: "../../../img/angelica-zapata-chardonnay-alta.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Blanco",
  },
  {
    id: 10,
    name: "2016",
    type: "Cabernet Sauvignon",
    winery: "Matías Riccitelli",
    price: 3400,
    img: "../../../img/cabernet-riccitelli.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "CavernetSauvignon",
  },
  {
    id: 11,
    name: "Gaia Red Blend",
    type: "Blend",
    winery: "Domaine Bousquet",
    price: 2900,
    img: "../../../img/GaiaRedBlend.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Blend",
  },
  {
    id: 12,
    name: "Luigi Bosca Rosé",
    type: "Rosé",
    winery: "Luigi Bosca",
    price: 2200,
    img: "../../../img/luigi-bosca-rose.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Rosé",
  },
  {
    id: 13,
    name: "MEG",
    type: "Blend",
    winery: "Escorihuela Gascón",
    price: 4100,
    img: "../../../img/megBlend.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Blend",
  },
  {
    id: 14,
    name: "Nicolas Catena Zapata",
    type: "Blend",
    winery: "Catena Zapata",
    price: 5600,
    img: "../../../img/nicolasCZ.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Blend",
  },
  {
    id: 15,
    name: "Reserve",
    type: "Chardonnay",
    winery: "Domaine Bousquet",
    price: 2500,
    img: "../../../img/Reserve-Chardonnay.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Blanco",
  },
  {
    id: 16,
    name: "Sauvignon Blanc",
    type: "Sauvignon Blanc",
    winery: "Domaine Bousquet",
    price: 2000,
    img: "../../../img/Sauvignon-BlancDM.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Blanco",
  },
  {
    id: 17,
    name: "Pack Rosé (x6)",
    type: "Rosé",
    winery: "",
    price: 6200,
    img: "../../../img/rosex6.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Pack",
  },
  {
    id: 18,
    name: "Don Malbec x4",
    type: "Malbec",
    winery: "Escorihuela Gascón",
    price: 18700,
    img: "../../../img/don-malbecx4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Pack",
  },
  {
    id: 19,
    name: "Gran Enemigo x6",
    type: "Malbec",
    winery: "Casa Vigil",
    price: 30000,
    img: "../../../img/gran-enemigox6.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Pack",
  },
  {
    id: 20,
    name: "Hey Rosé",
    type: "Rosé",
    winery: "Matías Riccitelli",
    price: 2400,
    img: "../../../img/rose-riccitelli.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "Rosé",
  },
  {
    id: 21,
    name: "Pequeñas Producciones",
    type: "Cabernet Sauvignon",
    winery: "Escorihuela Gascón",
    price: 3900,
    img: "../../../img/escorihuela-cs.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae",
    category: "CavernetSauvignon",
  },
];
