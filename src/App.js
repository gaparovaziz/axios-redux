import { useEffect } from "react";
import { loadUsers } from "./components/userSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { loadPosts } from "./components/postSlice";


function App() {

  const dispatch = useDispatch()
  const users = useSelector(store => store.users.users)

  const posts = useSelector(store => store.posts.posts)

  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch])
  
  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  let output = users.map(user => <li key={user.id}>{user.name}</li>)

  let outputPosts = posts.map(post => <li key={post.id}>{post.title}</li>)
  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Users:</h3>
      <ul style={{textAlign: 'center'}}>
        {output}
      </ul>
      <h3 style={{textAlign: 'center'}}>Post's title</h3>
      <ul style={{textAlign: 'center'}}>
        {outputPosts}
      </ul>
    </div>
  );
}

export default App;
