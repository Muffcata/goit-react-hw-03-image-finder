import { Component } from 'react';
import imageAPI from './services/pixabayAPI';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
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
    const { searchQuery, page } = this.state;
    e.preventDefault();
    const newPage = page + 1;
    this.fetchImages(searchQuery, newPage);
    this.setState({
      page: newPage,
    });
  };

  handleFormSubmit = searchQuery => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({ images: [], page: 1, searchQuery, isLoading: true });
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
    const { images, largeImageURL, isLoading, isShowModal } = this.state;
    return (
      <div className="image_App">
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} showLargeImage={this.showLargeImage} />
        {images.length < 1 ? (
          <></>
        ) : images.length < 12 ? (
          <> That's all results</>
        ) : (
          <Button onClick={this.handleLoadMore} />
        )}

        {isShowModal && (
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
