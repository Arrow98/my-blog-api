import React, { useState, useContext, useEffect } from "react";
import "./addPostPage.css";
import { 
  IoCloudUploadOutline, 
  IoImageOutline, 
  IoListOutline, 
  IoChevronBackOutline,
  IoTextOutline
} from "react-icons/io5";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Components/AppContext";
import BASE_URL from "../../config";
import { toast } from "react-toastify";
import { getCategories, addCategory } from "../../Services/categories";

export function AddPostPage() {
  const navigate = useNavigate();
  const { setIsLoading, user } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    description: ""
  });


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        if (data.data) {
          setCategories(data.data);
          if (data.data.length > 0) {
            setFormData(prev => ({ ...prev, category: data.data[0]._id }));
          }
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories");
      }
    };
    fetchCategories();
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("techblog_token");

    if (!formData.title || formData.title.length < 5) {
      toast.error("Title must be at least 5 characters long!");
      return;
    }

    if (!formData.content) {
      toast.error("Content is required!");
      return;
    }

    setIsLoading(true);
    try {
      if (!formData.category) {
        toast.error("Please select a category!");
        setIsLoading(false);
        return;
      }

      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          author: user ? `${user.firstname} ${user.lastname}` : "Anonymous", // Use real user name
          date: new Date().toISOString(),
          readTime: `${Math.ceil(formData.content.length / 500)} min read`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Post published successfully!");
        navigate("/blog");
      } else {
        toast.error(data.message || "Failed to publish post");
      }
    } catch (error) {
      console.error("Error publishing post:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="add-post-container"
    >
      <div className="add-post-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <IoChevronBackOutline /> Back to Blog
        </button>
        <h1>Create New Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="add-post-content">
        <div className="editor-main-card">
          <div className="input-group">
            <label>Post Title</label>
            <input 
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="title-input-field" 
              placeholder="Enter a catchy title..." 
              required
            />
          </div>
          
          <div className="input-group">
            <label>Short Description</label>
            <input 
              type="text" 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="desc-input-field" 
              placeholder="Brief summary of your post..." 
            />
          </div>

          <div className="input-group flex-grow">
            <label><IoTextOutline /> Content</label>
            <textarea 
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="content-editor" 
              placeholder="Write your story here..."
              required
            ></textarea>
          </div>
        </div>

        <div className="editor-sidebar-card">
          <div className="sidebar-section">
            <h3><IoImageOutline /> Featured Image</h3>
            <input 
              type="text" 
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Paste image URL here..."
              className="sidebar-input"
            />
            {formData.image && (
              <div className="image-preview-box">
                <img src={formData.image} alt="Preview" />
              </div>
            )}
          </div>

          <div className="sidebar-section">
            <h3><IoListOutline /> Category</h3>
            <div className="category-selector">
              {categories.map(cat => (
                <button 
                  key={cat._id}
                  type="button"
                  className={`category-tag ${formData.category === cat._id ? "active" : ""}`}
                  onClick={() => setFormData(prev => ({ ...prev, category: cat._id }))}
                >
                  {cat.title}
                </button>
              ))}
            </div>
            
          </div>

          <div className="publish-section">
            <button type="submit" className="publish-trigger-btn">
              <IoCloudUploadOutline /> Publish Post
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
