import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState();

  return (
    <div className="max-w-7xl flex flex-col gap-5 mx-auto pt-3">
      <Header search={search} setSearch={setSearch} posts={posts} />
      <hr />
      <Main posts={posts} setPosts={setPosts} search={search} />
    </div>
  );
}
export default Homepage;

function Header({ search, setSearch }) {
  const { logout } = useAuth();

  function handleLogOut() {
    logout();
    toast.success("You've been logged out");
  }

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

        <button
          onClick={handleLogOut}
          className="bg-purple-600/50 px-3 py-2 rounded-2xl text-white"
        >
          Log out{" "}
        </button>
      </div>
    </nav>
  );
}

function Main({ posts, setPosts, search }) {
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await data.json();
      console.log(response);
      setPosts(response);
    }
    fetchData();
  }, []);

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(search?.toLowerCase() || ""),
  );

  return (
    // Posts container
    <>
      <p className="text-xs font-bold pl-10">
        {filteredPosts ? filteredPosts.length + " posts found" : <p></p>}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 space-x-3 space-y-3 px-5">
        {/* Post items */}
        {posts ? (
          filteredPosts.map((post) => {
            return (
              <div
                onClick={() => navigate(`/details/${post.id}`)}
                className=" cursor-pointer border rounded-2xl shadow-md hover:shadow-xl p-3"
              >
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
    </>
  );
}
