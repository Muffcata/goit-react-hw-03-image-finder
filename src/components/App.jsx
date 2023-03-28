import { Component } from 'react';
import imageAPI from './services/pixabayAPI';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    isShowModal: false,
    error: null,
    largeImageURL: '',
  };

  addImg = images => {
    this.setState(oldState => ({
      images: [...oldState.images, ...images],
    }));
  };

  fetchImages = async (searchQuery, page) => {
    this.setState({ isLoading: true });
    try {
      const images = await imageAPI.fetchImagesWithQuery(searchQuery, page);
      this.addImg(images);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleLoadMore = e => {
    const { searchQuery, page, images } = this.state;
    e.preventDefault();
    this.fetchImages(searchQuery, page);
    this.setState({
      images: [...this.state.images, ...images],
      page: page + 1,
    });
  };

  handleFormSubmit = searchQuery => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({ images: [], page: 1, searchQuery });
    }
    this.fetchImages(searchQuery, 1);
  };

  showLargeImage = url => {
    this.setState({ isShowModal: true, largeImageURL: url });
  };
  closeLargeImage = () => {
    this.setState({ isShowModal: false, largeImageURL: '' });
  };

  render() {
    const { images, largeImageURL } = this.state;
    return (
      <div className="image_App">
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery images={images} showLargeImage={this.showLargeImage} />
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}

        {this.state.isShowModal && (
          <Modal
            closeLargeImage={this.closeLargeImage}
            picture={largeImageURL}
          />
        )}
      </div>
    );
  }
}
export default App;
