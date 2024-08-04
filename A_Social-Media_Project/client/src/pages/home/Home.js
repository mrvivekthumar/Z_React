import React, { useEffect, useState } from "react";
import axiosClient from "../../utils/axiosClient";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axiosClient.get("/posts/all");
      setPosts(response.data); // Assuming response.data contains the array of posts
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  }

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error message if fetch fails
  }

  return (
    <div>
      <h2>Home</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
