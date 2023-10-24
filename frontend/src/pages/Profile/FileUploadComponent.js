import { Box, Card } from "@mui/material";
import React, {useState} from "react";
import {useDropzone} from 'react-dropzone';
import  ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

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
    <Box>
        <div {...getRootProps()} className="dropZone">
            <input {...getInputProps()} />
            <p>Drag and drop files here, or click to select files</p>            
        </div>
        <h4>Accepted Files: </h4>
        <ul>
            {acceptedFile.map((file)=>(
             <li key={file.path}>
                {file.name} - {file.size} bytes
             </li>
            ))}
        </ul>
        {croppedImage &&(
            <Card>
                <h4>Cropped Photo</h4>
                <ReactCrop
                src={croppedImage}
                crop={crop}
                onImageLoaded={handleImageLoad}
                onChange={handleImageCrop}
                onComplete={handleImageCropComplete}
                />
            </Card>
        )}
    </Box>
    </>
    );
};
export default FileUploadComponent