import { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState();

  return (
    <div className="max-w-7xl flex flex-col gap-5 mx-auto pt-3">
      <Header search={search} setSearch={setSearch} posts={posts} />
      <hr />
      <p className="text-xs font-bold pl-10">{posts?.length} posts found</p>
      <Main posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default Homepage;

function Header({ search, setSearch, posts }) {
  return (
    <nav className="flex justify-between items-center lg:px-30 py-2">
      <p className="font-bold text-3xl">YouBloom</p>

      <div className="flex items-center space-x-2">
        
        <input
          type="text"
          className="bg-purple-200/20 rounded-lg h-9 px-3"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
}

function Main({ posts, setPosts }) {
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await data.json();
      console.log(response);
      setPosts(response);
    }
    fetchData();
  }, []);

  return (
    // Posts container
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 space-x-3 space-y-3 px-5">
      {/* Post items */}
      {posts ? (
        posts.map((post) => {
          return (
            <div className="border rounded-2xl shadow-md hover:shadow-xl p-3">
              <p className="border-b text-sm font-semibold pl-1">
                {post.title.length > 30
                  ? post.title.substring(0, 30).toUpperCase() + "..."
                  : post.title.toUpperCase()}
              </p>
              <p className="text-xs font-light">
                {post.body.length > 100
                  ? post.body.substring(0, 100) + "..."
                  : post.body}
              </p>

              <p></p>
            </div>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
