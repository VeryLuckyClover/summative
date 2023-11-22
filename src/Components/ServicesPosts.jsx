import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ServicesPosts = () => {
  const baseUrl = import.meta.env.VITE_WP_API_BASEURL;
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Current id:', id); // Log the value of id

    // Check if id is defined before making the API request
    if (id) {
      const endpoint = `${baseUrl}/services/${id}?_embed`;

      axios
        .get(endpoint)
        .then((res) => {
          setService(res.data);
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
  if (!service) {
    return <>Service not found</>;
  }

  // Extract headings and their respective information from the content
  const htmlContent = service.content.rendered;
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
        <h2>{service.title.rendered}</h2>

        {/* Displaying extracted headings and information */}
        {/* {Object.entries(headingData).map(([heading, information]) => (
          <div key={heading}>
            <h4>{heading}</h4>
            <p>{information}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ServicesPosts;


