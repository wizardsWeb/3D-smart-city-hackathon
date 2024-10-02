import React, { useState } from 'react';
import Rocket from '../models/Rocket';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

function Feedback() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [issueTitle, setIssueTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const uploadImage = () => {
    if (!imageUpload) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload)
      .then(() => {
        alert("Image uploaded successfully");
        getDownloadURL(imageRef).then((url) => {
          setImageURL(url);
        }).catch((err) => console.log(err));
      })
      .catch((err) => console.log('Error uploading image:', err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportData = {
      issueTitle,
      description,
      location,
      category,
      imageURL,
      contactInfo,
    };
  };

  return (
    <div className='h-[90vh] flex justify-center items-center '>
      <div className='flex w-full max-w-7xl'>
        <div className='w-1/2 flex justify-center items-center'>
          <div className=' p-8'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Feedback Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor="issueTitle">Issue Title</label>
                <input 
                  id="issueTitle"
                  type="text" 
                  placeholder="Enter the issue title" 
                  value={issueTitle}
                  onChange={(e) => setIssueTitle(e.target.value)}
                  required 
                  className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor="description">Description</label>
                <textarea 
                  id="description"
                  placeholder="Describe the issue" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required 
                  className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor="location">Location</label>
                <input 
                  id="location"
                  type="text" 
                  placeholder="Enter the location" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required 
                  className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor="category">Category</label>
                <select 
                  id="category"
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)} 
                  required
                  className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value="">Select Category</option>
                  <option value="pothole">Pothole</option>
                  <option value="streetlight">Streetlight</option>
                  <option value="garbage">Garbage</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor="imageUpload">Upload Image</label>
                <input 
                  id="imageUpload"
                  type="file" 
                  onChange={(e) => setImageUpload(e.target.files[0])} 
                  className='mb-4 '
                />
                <button 
                  type="button" 
                  onClick={uploadImage}
                  className='w-full bg-custom-gradient text-white font-semibold p-2 py-3 rounded hover:scale-110 hover:duration-300 hover:transition-all'
                >
                  Upload Image
                </button>
              </div>
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor="contactInfo">Your Contact Info (optional)</label>
                <input 
                  id="contactInfo"
                  type="text" 
                  placeholder="Enter your contact info" 
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)} 
                  className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <button 
                type="submit" 
                className='w-full bg-green-500 text-white font-semibold p-2 rounded hover:bg-green-600 hover:scale-110 hover:duration-300 hover:transition-all'
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <Canvas>
            <PerspectiveCamera position={[0, 10, 50]} fov={35} />
            <ambientLight intensity={0.7} color={0xffffff} />
            <directionalLight position={[5, 10, 5]} intensity={1} />
            <Rocket />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
