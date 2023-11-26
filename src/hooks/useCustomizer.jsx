import {useState, useEffect} from 'react'
import axios from 'axios'

const useCustomizer = () => {
    // variable for each setting from the customiser
    const [backgroundColor, setBackgroundColor] = useState('');
    const [fontFamily, setFontFamily] = useState('');
    // Add extra state for extra settings
    const [navbarColor, setNavbarColor] = useState('');

    const baseUrl = import.meta.env.VITE_WP_BASEURL

    // Full customiser API Endpoint:
    // http://localhost/summative/wp-json/custom-theme/v1/customizer-settings

    useEffect(() => {
        axios.get(`${baseUrl}wp-json/custom-theme/v1/customizer-settings`)
        .then((response) => {
            const {backgroundColor, fontFamily, navbarColor} = response.data // add to the destructure
            setBackgroundColor(backgroundColor)
            setFontFamily(fontFamily)
            setNavbarColor(navbarColor)
            // change the state to the destructure
        })
        .catch((error) => {
            console.error('Error fetching customizer settings:', error)
        })

    }, [baseUrl])

  return {backgroundColor, fontFamily, navbarColor} // add to retrun object
}

export default useCustomizer