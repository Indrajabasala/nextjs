import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Registerreducer} from './Routing/Registerreducer';
import '../styles/globals.css'

const store = applyMiddleware(thunk)(createStore)(Registerreducer); 

export default function Home({ Component, pageProps }) {
  return (
  <div>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  </div>
  )
}
// const User = (data) => {

//   return data.id ? <AComponent /> : <Error />
// }

// User.getInitialProps = async (ctx) => {
//   const res = await fetch(...data) // list of items = []
//   const data = await res.json()

//   return data;
// }
