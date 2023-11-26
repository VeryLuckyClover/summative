import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Link
import { Link } from "react-router-dom"


const WorkshopPost = () => {
  const baseUrl = import.meta.env.VITE_WP_API_BASEURL;
  const { id } = useParams();
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Current id:', id); // Log the value of id

    // Check if id is defined before making the API request
    if (id) {
      const endpoint = `${baseUrl}/workshop/${id}?_embed`;

      axios
        .get(endpoint)
        .then((res) => {
          setWorkshop(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      setLoading(false); // Set loading to false if id is undefined
    }
  }, [id, baseUrl]);

  if (loading) {
    return <>Loading...</>;
  }

  // Check if service is null before accessing its properties
  if (!workshop) {
    return <>Service not found</>;
  }

  // Extract headings and their respective information from the content
  const htmlContent = workshop.content.rendered;
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const headings = doc.querySelectorAll('strong'); // Assuming headings are wrapped in <strong> tags

  const headingData = {};

  headings.forEach((heading) => {
    const headingText = heading.textContent.trim();
    const nextSibling = heading.nextElementSibling;

    if (nextSibling) {
      headingData[headingText] = nextSibling.textContent.trim();
    }
  });

  return (
    <div className="service-post-container">
      <div className='service-section'>
        <h2>{workshop.title.rendered}</h2>

        <div dangerouslySetInnerHTML={{ __html: workshop.content.rendered }} />

        <Link to={`/contact`}>
          <button className="learn-more-btn">Book Now</button>
        </Link>

      </div>
    </div>
  );
};

export default WorkshopPost;