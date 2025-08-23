import { render } from 'preact';
import './style.css';

import { FiMenu, FiSearch, FiPlus, FiMinus, FiMaximize2 } from "react-icons/fi";

export function App() {
  return (
    <div class="container">
        {/* Header */}
        <div class="header">
            <h1 class="title">StoreNameHere</h1>
            <FiMenu class="menu" size={24}/>
        </div>
        <div class="sep"/>

        {/* Search */}
        <div>
            <form
                class="searchBubble"
                role="search"
                data-long-placeholder="Artikel oder Kategorie"
                data-short-placeholder="Suche"
                action="/API"
                method="get"
            >
                <input
                    class="searchField"
                    type="text"
                    placeholder="Artikel oder Kategorie"
                >
                </input>
                <button class="searchButton">
                    <FiSearch size={20} />
                </button>
            </form>
        </div>

    </div>
  );
};

export default App;
render(<App />, document.getElementById('app'));
