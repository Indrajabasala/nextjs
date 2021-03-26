import {useEffect,useState} from 'react';
import axios from 'axios';
function Post() {
    const [text, setText] = useState([]);
  useEffect(() => {
      getList(),
      postList()
  }, [])

  const user = {
    email: "indhu@april.biz",
    id: 1,
    name: "Indraja",
    phone: "1-770-736-8031 x56442",
    username: "Indhuu",
    website: "fghjhyjgy.org"
  }

   const  getList = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log('tttttttt', res.data)

          const persons = res.data;
          setText({ persons });
        })
      }
      const postList = () => {
        axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
        .then(res => {
            console.log('dddddddddd', res.data)
         getList()
        })
      }
    return (
      <div>
        {
          text.map((each) => {
            return (
              <li> {each.username + "--" + each.name}</li>
            )
          }
          )
        }
        
      </div>
    );
  }
  export default Post