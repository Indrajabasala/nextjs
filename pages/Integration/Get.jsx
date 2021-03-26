import {useEffect,useState} from 'react';
import axios from 'axios';
function GET() {
    const [text, setText] = useState([]);
    
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        const text = res.data;
        setText([...res.data])
      })
    }, [])
  
    return (
      <div>
        {
          text.map((each) => {
            return (
              <li> {each.name +'--'+ each.username}</li>
            )
          }
          )
        }
      </div>
    );
  }
  export default GET