import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC8PFwktcEtxC8XshV04HdznXS9Yso-Ixc'

//Create a new component and produce HTML

const App = () => {
  return (
    <div>
      <SearchBar />)
    </div>;
}

//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
