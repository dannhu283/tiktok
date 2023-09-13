import { useEffect, useState } from "react";

//1. useEffect(callback)
//-gọi callback mỗi khi component re-render
//-goọi callback sau khi component sau khi thêm element vào dom

//2. useEffect(callback,[])
//- chỉ gọi callback 1 lần sau khi component được mounted

//3. useEffect(callback,[deps])
//-

//----------------------
//1.callback luôn được gọi sau khi component mounted

function Content() {
  const [title, setTitle] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });

    document.title = title;
  }, []);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Content;
