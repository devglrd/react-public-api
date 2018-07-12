import React, { Component } from 'react';
import axios from 'axios';


class Search extends Component {
    onChange = (event) => {
        //axios.get('https://api.publicapis.org/categories').then((res) => {console.log(res)}).catch((err) => { console.log(err)})
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-center w-100 my-3">Search for a api</h1>
                    <input type="text" name="search"  className="form-control" onChange={this.onChange} />
                </div>
            </div>
        );
    }
}

export default Search;