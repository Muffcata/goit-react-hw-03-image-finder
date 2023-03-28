import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImagesWithQuery = async (searchQuery, page = 1) => {
  const response = await axios.get(`/?q=${searchQuery}&page=${page}`, {
    params: {
      key: '33110181-05f7c31bd0648b87ed812e30c',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 12,
    },
  });

  return response.data.hits;
};

const imageAPI = {
  fetchImagesWithQuery,
};

export default imageAPI;
