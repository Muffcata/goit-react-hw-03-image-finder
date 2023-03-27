import { Component } from 'react';
import imageAPI from './services/pixabayAPI';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './SearchBar/Searchbar';
// import Loader from './Loader/Loader';
// import Button from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    isShowModal: false,
    error: null,
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   try {
  //     const values = await imageAPI.fetchImagesWithQuery();
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }
  // handleSubmit = async searchQuery => {
  //   if (searchQuery !== this.state.searchQuery) {
  //     this.setState({ images: [], page: 1, searchQuery });
  //   }
  //   {
  //     this.setState({ searchQuery, isLoading: true });
  //   }
  //   if (values && response.hits.length > 0) {
  //     this.setState(() => {
  //       return {
  //         images: [...this.state.images, ...response.hits],
  //         page: page + 1,
  //         isLoading: false,
  //       };
  //     });
  //   } else {
  //     console.log('Sorry, there are no pictures matching your search');
  //     this.setState({
  //       images: [],
  //     });
  //   }
  // };
  addImg = images => {
    this.setState(oldState => ({
      images: [...oldState.images, ...images],
    }));
  };

  fetchImages = async () => {
    this.setState({ isLoading: true });
    const { searchQuery, page } = this.state;
    try {
      const images = await imageAPI.fetchImagesWithQuery(searchQuery, page);
      this.addImg(images);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // componentDidMount() {
  //   this.fetchImages();
  // }
  componentDidUpdate(prevProps, oldState) {
    const { searchQuery, page } = this.state;
    if (oldState.searchQuery !== searchQuery || prevProps.page !== page) {
      this.fetchImages(searchQuery, page);
    }
  }

  handleFormSubmit = searchQuery => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({ images: [], page: 1, searchQuery });
    }

    {
      this.setState({
        searchQuery,
        isLoading: true,
      });
      this.fetchImages();
      if (searchQuery && searchQuery.hits.length > 0) {
        this.setState(() => {
          return {
            images: [...this.state.images, ...searchQuery.hits],
            page: this.state.page + 1,
            isLoading: false,
          };
        });
      } else {
        console.log('Sorry');
        this.setState({
          imagges: [],
        });
      }
    }
  };
  // handleShowModal = url => {
  //   this.setState({ isShowModal: true });
  // };

  render() {
    const { images } = this.state;
    return (
      <div className="image_App">
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery
          images={images}
          // onShowModal={this.handleShowModal}
        />
      </div>
    );
  }
}
export default App;
