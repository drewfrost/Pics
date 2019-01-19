import React from 'react';

import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
class App extends React.Component{
    state = {images:[]}
   onSearchSubmit=async(term)=>{
        const response = await unsplash.get('https://api.unsplash.com/search/photos',{
            params:{query: term}
            
        });
        // .then((response)=> {
        //     console.log(response.data.results);
        // });
        this.setState({images: response.data.results});
    }


   render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                <ImageList images={ this.state.images}></ImageList>
            </div>
        );

   }
}

export default App;