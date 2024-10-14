import openCage from 'opencage-api-client';

export const getCoordinates = async (city) => {
    if (!city) {
        console.error('No city provided for geocoding');
        return null;
    }

    const apiKey = 'b7f8541c51694e5b89a1e358988ca9d4'; // Replace with your actual API key
    try {
        const response = await openCage.geocode({ q: city, key: apiKey });
        if (response.results.length > 0) {
            return {
                lat: response.results[0].geometry.lat,
                lng: response.results[0].geometry.lng,
            };
        } else {
            console.error('No results found for the given city:', city);
            return null;
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
    }
};
