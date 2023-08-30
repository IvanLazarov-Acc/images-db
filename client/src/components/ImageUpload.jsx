import axios from 'axios';
import { useState } from 'react';
import "./styles/imageUpload.css";

export default function ImageUpload() {

    const [imageUrl, setImageUrl] = useState(null);
    const [description, setDescription] = useState("");
    const [uploadTriggered, setUploadTriggered] = useState(true);

    const handleImageUpload = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            // Set the imageUrl in state for rendering the preview.
            console.log(imageUrl);
            setImageUrl(imageUrl);
        }
    };
    const handleImageSubmit = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('description', description);

            try {
                const response = await axios.post('http://localhost:5000/images/upload-image', formData);
                console.log('Image uploaded:', response.data);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };
    return (
        <>
            <button className='imageUpload' onClick={() => {
                setUploadTriggered(!uploadTriggered)
                setImageUrl(null);
            }}>Upload Image</button>

            {uploadTriggered ? <div className='image-card'>
                <div>ImageUpload</div>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {imageUrl && (
                    <div className='imageContainer'>
                        <h2>Image Preview:</h2>
                        <textarea placeholder='Description...' onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                        <img src={imageUrl} width='500' height='600' alt="Preview" />
                        <button className='saveButton' value="Submit" onSubmit={handleImageSubmit} type='submin'>Save Image</button>
                    </div>

                )}

            </div> : null}

        </>

    );
}
