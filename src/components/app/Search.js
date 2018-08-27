import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="row mt-5 mb-3 search">
                <div className="col-md">
                    <h1 className="text-center w-100 d-flex align-items-center justify-content-center">Search for a api</h1>
                    <input type="text" name="search"  className="form-control" onChange={this.props.onChange} />
                </div>
            </div>
        );
    }
}

export default Search;