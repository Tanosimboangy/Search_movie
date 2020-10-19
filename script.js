// My API : 9cae3479b893d8f338d20b2d81c2b391

import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './components/SerchMovies';


class App extends React.Component {
  render() {
    return (
    <div className="container">
        <h1 className="title">Movies search</h1>
        <SearchMovies />
    </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));