import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function Details() {
  const { id } = useParams();
  const [detailPost, setDetailPost] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchById() {
      try {
        const detail = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        const response = await detail.json();
        setDetailPost(response);
      } catch (err) {
        console.log(err)
        setError("Failed to load post");
        toast.error("Failed to load post");
      }
    }
    fetchById();
  }, [id]);

  function handleBack() {
    navigate("/home");
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 py-8 px-4">
      {error && (
        <div className="text-red-500 text-center">
          <p>{error}</p>
          <button onClick={handleBack} className="text-sm text-red-600 hover:underline mt-2">
            Go back
          </button>
        </div>
      )}
      {detailPost ? (
        <div className="flex flex-col gap-6 p-8 max-w-2xl w-full bg-white rounded-lg shadow-xl border border-gray-200">
          <button
            onClick={handleBack}
            className="self-start bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition text-sm font-medium"
          >
            Go Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            {detailPost?.title}
          </h1>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700 leading-relaxed text-base">
              {detailPost?.body}
            </p>
          </div>
          <p className="text-xs text-gray-500">Post ID: {detailPost?.id}</p>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Details;
