import React, {  Component  } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBCRQqTfB6LwEUPd_Ak6oAb4n-6F_Nv9uc';

YTSearch({key:API_KEY, term:'surfboards'}, function(data){
  console.log(data);
});

//create a new component. This component should produce some html
class App extends Component {
  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

//Take this component generated Html and render it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
