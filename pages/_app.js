
// function MyApp({ Component, pageProps }) {
//   return 
// }

// export default MyApp
import Head from 'next/head'
import { Provider } from 'react-redux';
// import styles from '../styles/Home.module.css';
// import Firstpage from './Firstpage'
// import ActiveLink from './Link'
// import Welcome from './Welcome';
// import logo from './logo.jpg'
// import GET from './Integration/Get';
// import Post from './Integration/Post';
// import Homepage from './Header&footer';
// import Startpage from './Welcome/Startpage';
// import All from './Welcome/All';
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Registerreducer} from './Routing/Registerreducer';
import Begin from './Routing/Begin';
import '../styles/globals.css'

// const AppWrapper = () => {
//   const store = createStore(Registerreducer);


const store = applyMiddleware(thunk)(createStore)(Registerreducer); 

export default function Home({ Component, pageProps }) {
  return (
  <div>
    <Provider store={store}>
    {/* <h1>gyfdhgdahguy</h1> */}
    {/* <Firstpage/> */}
    {/* <ActiveLink  children='ggg'/> */}
    {/* <Welcome/> */}
    {/* <GET/> */}
    {/* <Post/> */}
    {/* <Homepage/> */}
    {/* <Startpage/> */}
    {/* <All/> */}
    <Component {...pageProps} />
    
    {/* <img src={logo} alt="logo"/> */}
    {/* <Firstpage/> */}
    </Provider>
  </div>
  )
}
