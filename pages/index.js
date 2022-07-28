import Head from 'next/head'
// // import { Provider } from 'react-redux';
// // import styles from '../styles/Home.module.css';
// // import Firstpage from './Firstpage'
// // import ActiveLink from './Link'
// // import Welcome from './Welcome';
// // import logo from './logo.jpg'
// // import GET from './Integration/Get';
// // import Post from './Integration/Post';
// // import Homepage from './Header&footer';
// // import Startpage from './Welcome/Startpage';
// // import All from './Welcome/All';
// // import { createStore, applyMiddleware} from "redux";
// // import thunk from "redux-thunk";
// // import {Registerreducer} from './Routing/Registerreducer';
import Begin from './Routing/Begin';
// // const AppWrapper = () => {
// //   const store = createStore(Registerreducer);
// // import Register from './illumenese/Register'
// import Forgetpassword from  './illumenese/Forgetpassword'
// import Emailverfication from './illumenese/Emailverfication'
// import providerregistration from './illumenese/providerregistration'
// import MyDocument from './_document.js'


// // const store = applyMiddleware(thunk)(createStore)(Registerreducer); 

export default function Home() {

  return (
  <div>
    {/* <Provider store={store}> */}
    {/* <h1>gyfdhgdahguy</h1> */}
    {/* <Firstpage/> */}
    {/* <ActiveLink  children='ggg'/> */}
    {/* <Welcome/> */}
    {/* <GET/> */}
    {/* <Post/> */}
    {/* <Homepage/> */}
    {/* <Startpage/> */}
    {/* <All/> */}
    <Begin/>
    {/* <Register/> */}
    {/* <Head>
<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
	<meta name="theme-color" content="#000000"/>

	<link rel="manifest" href="/manifest.json"/>
	<link rel="stylesheet" href="css/font-awesome.css"/>
	<link rel="stylesheet" href="css/bootstrap.css" />
	<link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="css/responsive.css" />
	<title>FORGOT PASSWORD - ILLUME SENSE</title>

 </Head> */}
    {/* <Forgetpassword/> */}
    {/* <Emailverfication/> */}
    {/* <providerregistration/>
    <script src="js/jquery.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/fontawesome.js"></script>
	<script>

	</script> */}
   
  </div>
  )
}

