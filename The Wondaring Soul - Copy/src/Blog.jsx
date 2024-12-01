import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState({
    id: null,
    title: "",
    description: "",
    img: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch blogs from JSON server
  useEffect(() => {
    axios.get("http://localhost:5000/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  // Save or update a blog
  // const handleSaveBlog = () => {
  //   if (isEditing) {
  //     axios
  //       .put(`http://localhost:5000/blogs/${currentBlog.id}`, currentBlog)
  //       .then(() => {
  //         setBlogs((prevBlogs) =>
  //           prevBlogs.map((blog) =>
  //             blog.id === currentBlog.id ? { ...currentBlog } : blog
  //           )
  //         );
  //         setIsEditing(false);
  //         setCurrentBlog({ id: null, title: "", description: "", img: "" });
  //       })
  //       .catch((error) => console.error("Error updating blog:", error));
  //   } else {
  //     axios
  //       .post("http://localhost:5000/blogs", {
  //         ...currentBlog,
  //         img: currentBlog.img || "https://via.placeholder.com/150",
  //       })
  //       .then((response) => {
  //         setBlogs([...blogs, response.data]);
  //         setCurrentBlog({ id: null, title: "", description: "", img: "" });
  //       })
  //       .catch((error) => console.error("Error adding blog:", error));
  //   }
  // };
  const handleSaveBlog = () => {
    if (isEditing) {
      axios
        .put(`http://localhost:5000/blogs/${currentBlog.id}`, currentBlog)
        .then(() => {
          setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
              blog.id === currentBlog.id ? { ...currentBlog } : blog
            )
          );
          setIsEditing(false);
          setCurrentBlog({ id: null, title: "", description: "", img: "" });
        })
        .catch((error) => console.error("Error updating blog:", error));
    } else {
      axios
        .post("http://localhost:5000/blogs", {
          title: currentBlog.title,
          description: currentBlog.description,
          img: currentBlog.img || "https://via.placeholder.com/150",
        })
        .then((response) => {
          setBlogs([...blogs, response.data]);
          setCurrentBlog({ id: null, title: "", description: "", img: "" });
        })
        .catch((error) => console.error("Error adding blog:", error));
    }
  };
  

  // Edit a blog
  const handleEditBlog = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    if (blogToEdit) {
      setCurrentBlog(blogToEdit);
      setIsEditing(true);
    }
  };

  // Delete a blog
  const handleDeleteBlog = (id) => {
    axios
      .delete(`http://localhost:5000/blogs/${id}`)
      .then(() => {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      })
      .catch((error) => console.error("Error deleting blog:", error));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentBlog({ ...currentBlog, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelEdit = () => {
    setCurrentBlog({ id: null, title: "", description: "", img: "" });
    setIsEditing(false);
  };

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <h1 className="text-3xl font-bold">{isEditing ? "Edit Blog" : "Post Blogs"}</h1>
        <div className="flex flex-col mt-4">
          <input
            type="text"
            placeholder="Blog Title"
            value={currentBlog.title}
            onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Blog Description"
            value={currentBlog.description}
            onChange={(e) => setCurrentBlog({ ...currentBlog, description: e.target.value })}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          {currentBlog.img && (
            <img
              src={currentBlog.img}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md"
            />
          )}
          <div className="flex space-x-4">
            <button
              onClick={handleSaveBlog}
              className={`p-2 ${isEditing ? "bg-yellow-500" : "bg-green-500"} text-white rounded`}
            >
              {isEditing ? "Update Blog" : "Add Blog"}
            </button>
            {isEditing && (
              <button
                onClick={handleCancelEdit}
                className="p-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-6 border rounded-md">
              <img
                className="object-cover w-full mb-4 h-48 rounded"
                src={blog.img}
                alt={blog.title}
              />
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleEditBlog(blog.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
