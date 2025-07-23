import React, { useState, type ChangeEvent, useEffect } from "react";

const ImageUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Effect to create and revoke object URL for preview
  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(null);
      return;
    }

    // Create a URL for the selected file
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    // Clean up the object URL when the component unmounts or file changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]); // Re-run when selectedFile changes

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    // In a real application, you would send this 'selectedFile' to your backend server.
    // Example using FormData for sending the file:
    const formData = new FormData();
    formData.append("image", selectedFile); // 'image' is the field name your backend expects

    try {
      // Replace with your actual backend upload endpoint
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
        // When using FormData, Content-Type header is typically set automatically
        // by the browser as 'multipart/form-data', so you don't need to set it manually.
      });

      if (response.ok) {
        const data = await response.json();
        alert(
          "Image uploaded successfully! Server response: " +
            JSON.stringify(data)
        );
        // You might want to update state or show a success message
        setSelectedFile(null); // Clear the selected file after upload
        setPreviewUrl(null);
      } else {
        const errorData = await response.json();
        alert("Image upload failed: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred during upload.");
    }
  };

  return (
    <div>
      <h2>Upload and Display Image</h2>
      <input
        type="file"
        accept="image/*" // Restrict to image files
        onChange={handleFileChange}
      />
      {previewUrl && (
        <div style={{ marginTop: "20px" }}>
          <h3>Image Preview:</h3>
          <img
            src={previewUrl}
            alt="Image Preview"
            style={{
              maxWidth: "300px",
              maxHeight: "300px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={!selectedFile}
        style={{ marginTop: "10px" }}
      >
        Upload Image
      </button>

      {!selectedFile && (
        <p style={{ color: "gray", marginTop: "10px" }}>
          Select an image to see a preview and enable upload.
        </p>
      )}
    </div>
  );
};

export default ImageUploader;
