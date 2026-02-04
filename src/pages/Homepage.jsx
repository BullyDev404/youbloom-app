/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState();
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl flex flex-col gap-6 mx-auto pt-6 px-4">
        <Header search={search} setSearch={setSearch} posts={posts} />
        <hr className="border-gray-200" />
        <Main
          posts={posts}
          setPosts={setPosts}
          search={search}
          error={error}
          setError={setError}
        />
      </div>
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
    <nav className="flex justify-between items-center py-4">
      <p className="font-bold text-3xl text-purple-900">YouBloom</p>

      <div className="flex items-center gap-4">
        <input
          type="text"
          className="bg-white border border-gray-300 rounded-lg h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={handleLogOut}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition"
        >
          Log out
        </button>
      </div>
    </nav>
  );
}

function Main({ posts, setPosts, search, error, setError }) {
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await data.json();
        setPosts(response);
      } catch (err) {
        setError("Failed to load posts");
        toast.error("Failed to load posts");
      }
    }
    fetchData();
  }, []);

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(search?.toLowerCase() || ""),
  );

  return (
    <>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {!error && (
        <>
          <p className="text-sm font-semibold text-green-600">
            {filteredPosts ? filteredPosts.length + " posts found" : "0 posts"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {posts ? (
              filteredPosts.map((post) => {
                return (
                  <div
                    key={post.id}
                    onClick={() => navigate(`/details/${post.id}`)}
                    className="cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-purple-300 transition p-4"
                  >
                    <p className="border-b border-gray-200 text-sm font-semibold text-gray-900 pb-2 mb-3">
                      {post.title.length > 30
                        ? post.title.substring(0, 30).toUpperCase() + "..."
                        : post.title.toUpperCase()}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {post.body.length > 100
                        ? post.body.substring(0, 100) + "..."
                        : post.body}
                    </p>
                  </div>
                );
              })
            ) : !error ? (
              <p className="text-gray-500">Loading...</p>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}