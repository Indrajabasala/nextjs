import Link from 'next/link';
import Firstpage from './Firstpage'

    function Welcome() {
        return (
          <ul>
            <li>
              <h2> this is  home page</h2>
             {/* < Link href="/"> 
                <button>home</button>
              </Link> */}
              <Link href="/Firstpage"> 
                <button>Firstpage</button>
              </Link>
            </li>
            
          </ul>
        )
      }
      
      export default Welcome