import { Box, Button, Card, TextField, TextareaAutosize } from "@mui/material";
import React, {useState} from "react";
import {useDropzone} from 'react-dropzone';
import  ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const FileUploadComponent =()=>{
    const [acceptedFile, setAcceptedFiles] = useState([]);
    const [crop, setCrop] = useState({aspect: 1});
    const [croppedImage, setCroppedImage] = useState(null);

    const onDrop=(accepted)=>{
        setAcceptedFiles(accepted);
    }

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        // Defile accepted file types
        accept:['image/*', 'application/pdf', 'application/msword'],

        // Allow multiple file selection
        multiple:true,
    });
    const handleImageLoad=(image)=>{
        setCrop({
            unit:'%',
            width:100,
            aspect:1,
        });
    };

    const handleImageCrop=(crop) =>{
        setCrop(crop);
    }

    const handleImageCropComplete=(croppedArea, croppedAreaPixels)=>{
        setCroppedImage(croppedArea)
    };

    return(
    <>
    <Navbar />
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box className="document-holder" sx={{ p: 4, textAlign: 'center' }}>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {acceptedFile.length === 0 ? (
              <p>Click or drag a document to upload</p>
            ) : (
              <p>{acceptedFile[0].name} uploaded successfully</p>
            )}
          </div>

          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {acceptedFile.length === 0 ? (
              <p>Upload a copy of your ID</p>
            ) : (
              <p>{acceptedFile[0].name} uploaded successfully</p>
            )}
          </div>
          
          {acceptedFile.length > 0 && (
            <Button variant="contained" color="primary" onClick={() => setAcceptedFiles([])}>
              Clear Document
            </Button>
          )}
        </Box>
      </Box>
      {/* 
      import { Box, Card, Button } from "@mui/material";
import React, { useState } from "react";
import { useDropzone } from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor'; // Import the AvatarEditor component
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FileUploadComponent = () => {
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const [editor, setEditor] = useState(null);
  const [scale, setScale] = useState(1.2); // Initial scale for resizing

  const onDrop = (accepted) => {
    setAcceptedFiles(accepted);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['.jpg'], // Accept only JPG photos
    multiple: false, // Allow only one file at a time
  });

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  };

  const handleSave = () => {
    // You can access the edited image data and send it to your server for submission
    if (editor) {
      const editedImage = editor.getImageScaledToCanvas().toDataURL('image/jpeg');
      // Send the editedImage data to your server or process it as needed
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box className="document-holder" sx={{ p: 4, textAlign: 'center' }}>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Click or drag a JPG photo to upload</p>
            {acceptedFiles.length > 0 && (
              <>
                <AvatarEditor
                  ref={(ref) => setEditor(ref)}
                  image={acceptedFiles[0]}
                  width={200}
                  height={200}
                  border={10}
                  color={[255, 255, 255, 0.6]} // Background color
                  scale={scale}
                />
                <label htmlFor="scale">Scale:</label>
                <input
                  type="range"
                  id="scale"
                  value={scale}
                  min="1"
                  max="2"
                  step="0.01"
                  onChange={handleScaleChange}
                />
                <Button variant="contained" color="primary" onClick={handleSave}>
                  Save Edited Photo
                </Button>
              </>
            )}
          </div>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default FileUploadComponent;

       */}
    
    </>
    );
};
export default FileUploadComponent