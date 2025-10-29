// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getDoc, query, where, addDoc, getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FS_APIKEY,
    authDomain: "react-coder-entregafinal.firebaseapp.com",
    // projectId: import.meta.env.VITE_FS_PROJECT_ID,
    projectId: 'react-coder-entregafinal',
    // projectId: import.meta.env.VITE_FS_PROJECT_ID,
    storageBucket: "react-coder-entregafinal.appspot.com", // 🔹 corregido: era .firebasestorage.app
    messagingSenderId: "341812011083",
    appId: import.meta.env.VITE_FS_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default app;

export async function getProducts() {
    const productsRef = collection(db, 'products')
    const productsSnapshot = await getDocs(productsRef)

    const documents = productsSnapshot.docs;

    const dataDocs = documents.map((item) => {
        return { id: item.id, ...item.data() }
    })

    return dataDocs
}

export async function getProductById(idParam) {
    const docRef = doc(db, 'products', idParam);
    const docSnapshot = await getDoc(docRef)
    const docData = docSnapshot.data();
    docData.id = docSnapshot.id

    return docData

}

export async function getProductsByCategory(type) {
    const productsRef = collection(db, 'products')

    const queryCategory = query(productsRef, where('type', "==", type))

    const productsSnapshot = await getDocs(queryCategory)

    const documents = productsSnapshot.docs;

    const dataDocs = documents.map((item) => {

        return { id: item.id, ...item.data() }
    })

    return dataDocs
}

export async function createOrder(orderData) {
    const ordersRef = collection(db, 'orders')
    const newDoc = await addDoc(ordersRef, orderData)

    return newDoc
}

// export async function exportData() {
//     const productsRef = collection(db, 'products');

//     for (let item of products) {
//         const { id, ...productData } = item; // sacamos id pero sin mutar el original
//         await addDoc(productsRef, productData);
//     }

//     console.log("✅ Productos exportados a Firestore");
// }
