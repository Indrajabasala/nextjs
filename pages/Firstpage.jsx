import Link from 'next/Link';
import Welcome from './Wpage';
// import logo from '../public/images/logo.jpg';
import {header} from './container.module.css';
// import styles from './Home.module.css'
// import header from 

function Firstpage() {

    return(
        <div className={header}>
            <h2> this is first page</h2>
            {/* <Welcome/> */}
            <Link href="/Welcome"> 
                <button>home</button> 
              </Link>
              <img src="images/logo.jpg" alt="TutorialsPoint Logo" />      
        </div>
    )
}

export default Firstpage