import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // SET DATA
// database.ref().set({
//     name: 'Diego Cuenca Ramos',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Madrid',
//         country: 'Spain'
//     }
// });

// // database.ref('attributes').set({
// //     height: '1.90m',
// //     weight: '70Kg'
// // }).then(() => {
// //     console.log('Data is saved!');
// // }).catch((e) => {
// //     console.log('Error:', e);
// // });

// // REMOVE DATA
// // database.ref('isSingle').remove()
// //     .then(() => {
// //         console.log('Remove succeeded.');
// //     })
// //     .catch((e) => {
// //         console.log('Remove failed: ', e.message);
// //     });

// // UPDATE DATA
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Barcelona'
// });

// // FETCH DATA
// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
//     console.log('Fetch data failed: ', e);
// });

// // PUSH ARRAY DATA
// database.ref('expenses').push({
//     description: 'Food',
//     note: 'This is my food expense per month',
//     amount: 200.00,
//     createdAt: 0,
// });

// database.ref('expenses').push({
//     description: 'English',
//     note: 'This is my english expense per month',
//     amount: 85.00,
//     createdAt: 1000,
// });

// database.ref('expenses').push({
//     description: 'Drugs',
//     note: 'This is my drugs expense per month',
//     amount: 100,
//     createdAt: 1000000,
// });

// // GET ARRAY DATA - EVENTS
// // VALUE
// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });

//         console.log(expenses);
//     }, (e) => {
//         console.log('Fetch array data failed: ', e);
//     });

// // CHILD REMOVED
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // CHILD CHANGED
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // CHILD ADDED
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
