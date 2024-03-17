import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";

const Blog = () => {
  const { fileName } = useParams();
  console.log(fileName);
  const filePath = "/markdowns/" + fileName + ".md";

  const [mdContent, setMdContent] = useState("");

  useEffect(() => {
    const fetchMarkdownFile = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Failed to fetch Markdown file");
        }
        const markdownText = await response.text();
        setMdContent(markdownText);
      } catch (error) {
        console.error("Error fetching Markdown file:", error);
      }
    };

    fetchMarkdownFile();

    // Clean-up function
    return () => {
      setMdContent(""); // Clear markdown content on component unmount
    };
  }, [filePath]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{mdContent}</ReactMarkdown>
    </div>
  );
};

export default Blog;
