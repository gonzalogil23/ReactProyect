import { dataBase } from "../firebase/firebase";

export const getAllItems = async () => {
  const firestore = dataBase();
  const collection = firestore.collection("products");
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

export const getByCategory = async (category) => {
  const db = dataBase().collection("products");
  const categories = await db.where("category", "==", category).get();
  return categories.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};
// await db
//   .collection("cards")
//   .where("pack", ">=", invoice + "_")
//   .where("pack", "<", invoice + "`")
//   .get();

// useEffect(() =>{
//     const firestore = dataBase();
//     const collection = firestore.collection('products');
//     const query = collection.get();
//     //const condicion = collection.where('','','')
//     query.then((snapshot) => {
//         return snapshot.docs.map((doc) =>{ setWines(doc.data);
//              console.log(doc.data)})

//     //   result.forEach(doc => {setWines(doc.data)})

//   }, []);})

// await dataBase.collection('wines')
// .get()
// .then((snapshot: any) => {
//   return snapshot.docs.map((doc: any) => {
//     return {
//       // todas las properties de wines
//     }
//   })
// })
