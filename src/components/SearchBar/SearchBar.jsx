import { Component } from 'react';
import style from '../SearchBar.module.css';

export class SearchBar extends Component {
  render() {
    return (
      <header className={style.searchbar}>
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
