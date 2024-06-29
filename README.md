# Image Search Gallery

A React-based application that provides a user interface for searching images by keyword. Each image displays metadata including the photographer's name, views, downloads, and likes.

- [Project Demo](https://image-gallery-react-tailwindcss.onrender.com)
- [Portfolio](https://charlie-nourrcier-dev-portfolio.onrender.com)

![Project Demo](https://res.cloudinary.com/dwguf4w1t/image/upload/v1719695190/Portfolio%20Projects/imagesearchgallery_ibw6wi.gif)

## ImageSearch Component:

- Purpose: 
    - Provides a user interface for searching images by a keyword.

- Functionality:
    - Uses a controlled input to capture and update the search term.
    - On form submission, it triggers the searchTerm function with the entered text and then clears the input.

- Design: Features a responsive search bar styled with Tailwind CSS classes for an intuitive user experience.

## ImageCard Component:

- Purpose: 
    - Displays individual image details and associated tags.

- Functionality:
    - Shows an image with a link to the full-sized version.
    - Displays image metadata including the photographer's name, views, downloads, and likes.
    - Renders tags as clickable buttons that trigger new searches based on the selected tag.

- Design: Utilizes Tailwind CSS for a clean, modern appearance with hover effects for interactivity.

