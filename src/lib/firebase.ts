import { initializeApp } from 'firebase/app'
import type { FirebaseApp, FirebaseOptions } from 'firebase/app'
import { getFunctions, httpsCallable } from 'firebase/functions'
import type { SteamApiResponse } from '../features/steam/steam-response.model'

//Prandell portfolio Web App Configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCp6x58mB4Fs7BY_yjNfiCiyhF-QtQXWIg',
  authDomain: 'prandell-portfolio.firebaseapp.com',
  projectId: 'prandell-portfolio',
  storageBucket: 'prandell-portfolio.appspot.com',
  messagingSenderId: '618855427466',
  appId: '1:618855427466:web:0d2026f82802e969f3ec73',
  measurementId: 'G-RXD896W0QP'
}
// Initialize Firebase Application and Functions
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)
const functions = getFunctions(firebaseApp)
export const getRecentGames = httpsCallable<void, SteamApiResponse>(
  functions,
  'getRecentGames'
)
export const askPatQuestion = httpsCallable<{ text: string }, { data: string }>(
  functions,
  'askPatQuestion'
)
