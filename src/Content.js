import { useEffect, useState } from "react";

//1. useEffect(callback)
//-gọi callback mỗi khi component re-render
//-goọi callback sau khi component sau khi thêm element vào dom

//2. useEffect(callback,[])
//- chỉ gọi callback 1 lần sau khi component được mounted

//3. useEffect(callback,[deps])
//-callback sẽ được gọi lại mỗi khi deps thay đổi

//----------------------
//1.callback luôn được gọi sau khi component mounted
//2.cleanup function luôn được gọi trước khi component unmounted

// const tabs = ["posts", "comments", "albums"];

function Content() {
  //   const [title, setTitle] = useState("");

  //   const [posts, setPosts] = useState([]);

  //   const [type, setType] = useState("posts");

  //   const [showGoToTop, setShowGoToTop] = useState(false);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  //   // console.log("type changed");

  //   // document.title = title;
  // }, [type]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 200) {
  //       setShowGoToTop(true);
  //     } else {
  //       setShowGoToTop(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   //cleanup function
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleReSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleReSize);

    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, []);

  return (
    // <div>
    //   {/* {tabs.map((tab) => (
    //     <button
    //       key={tab}
    //       onClick={() => setType(tab)}
    //       style={type === tab ? { color: "#fff" } : { color: "#333" }}
    //     >
    //       {tab}
    //     </button>
    //   ))}
    //   <hr />
    //   <input value={title} onChange={(e) => setTitle(e.target.value)} />

    //   <ul>
    //     {posts.map((post) => {
    //       return <li key={post.id}>{post.title || post.name}</li>;
    //     })}
    //   </ul>
    //   {showGoToTop && (
    //     <button style={{ position: "fixed", right: 20, bottom: 20 }}>
    //       BTT
    //     </button>
    //   )} */}
    // </div>
    <div>
      <h1>{width}</h1>
    </div>
  );
}

export default Content;
