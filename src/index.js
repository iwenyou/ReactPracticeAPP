import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBCRQqTfB6LwEUPd_Ak6oAb4n-6F_Nv9uc';

//create a new component. This component should produce some html
const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component generated Html and render it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
