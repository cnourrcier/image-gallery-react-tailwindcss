import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);
        const data = await response.json();
        setImages(data.hits);
        setIsLoading(false);
        resetText();
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [term])

  return (
    <div className="container mx-auto px-4">
      <ImageSearch searchTerm={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">
        No Images Found
      </h1>}
      {isLoading ?
        <h1 className="text-5xl text-center mx-auto mt-32">
          Loading...
        </h1> :
        <div className="flex flex-wrap gap-4 justify-center">
          {images.map(image => (
            <ImageCard key={image.id} image={image} searchTerm={(text) => setTerm(text)} />
          ))}
        </div>}
      {/* <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image} searchTerm={(text) => setTerm(text)} />
          ))}
        </div>} */}
    </div>
  )

}

export default App
