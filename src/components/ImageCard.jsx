
const ImageCard = ({ image, searchTerm }) => {
    const tags = image.tags.split(',');

    return (
        < div className="max-w-sm rounded overflow-hidden shadow-lg" >
            <a href={image.webformatURL} target="_blank">
                {/* sets the width of an element to 100% of its parent container's width. */}
                < img className="w-full duration-500 hover:scale-105 hover:shadow-xl" src={image.webformatURL} alt="" />
            </a>
            <div className="px-6 py-4">
                <div className="font-bold text-blue-500 text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul>
                    <li><strong>Views: </strong>{image.views}</li>
                    <li><strong>Downloads: </strong>{image.downloads}</li>
                    <li><strong>Likes: </strong>{image.likes}</li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <button onClick={() => searchTerm(tag)} type="button" key={index} className="inline-block bg-green-400 rounded-3xl px-3 py-1 text-sm font-semibold text-white m-2 duration-500 hover:scale-105 hover:shadow-xl">#{tag}</button>
                ))}
            </div>
        </div >

    )
}

export default ImageCard;


// overflow-hidden prevents it from being displayed outside of its parent container's visible area
// duration-500 hover:scale-105 hover:shadow-xl
