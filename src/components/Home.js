import React, { Component } from 'react'
import axios from 'axios';
class Home extends Component{ 
    state = {
        charged : false,
        categories : null,
        apis : null,
        health: false
    }
    componentDidMount = () => {
        this.getCategories("https://api.publicapis.org/categories")
        this.getEntries("https://api.publicapis.org/entries")
        this.getHealth("https://api.publicapis.org/health")
    }

    getCategories = (url) => {
        axios.get(url).then((res) => {
            this.setState({categories : res.data, charged : true});
        }).catch((err) => { console.log(err)})
    }

    getEntries = (url) => {
        axios.get(url).then((res) => {
            this.setState({apis : res.data.entries, charged : true});
        }).catch((err) => { console.log(err)})
    }

    getHealth = (url) => {
        axios.get(url).then((res) => {
            this.setState({health : res.data.alive});
        }).catch((err) => { console.log(err)})
    }

    onChange = (event) => {
        this.updateApi(event.target.value);
    }

    updateApi = (search) => {
        var url = 'https://api.publicapis.org/entries?title='+ search;
        this.getEntries(url);
    }

    choseCategories = (categorie) => {
        var indexOf = categorie.search("&");
        var search = null;
        if(indexOf > 1){
            search = categorie.substr(0, indexOf);
        }
        else{
            search = categorie;
        }
        var url = 'https://api.publicapis.org/entries?category='+ search;
        this.getEntries(url)
    }


    render() {
        
        if (this.state.categories != null) {
            var categoriesList = this.state.categories.map((categorie, index) => 
                <li className="nav-link text-center pb-0" key={index}><a onClick={() => this.choseCategories(categorie)} className="cursor">{categorie}</a></li>
            );
        }
        if (this.state.apis != null) {
            var apiList = this.state.apis.map((api, index) => 
                <div key={index} className="col mb-3">
                    <div className="card">
                        <div className="card-body px-3">
                            <h5 className="card-title">{api.API}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Https : {api.HTTPS ? '✅' : '❌'}</h6>        
                            <p className="card-text">{api.Description}</p>
                            <h6 className="card-subtitle mb-2 ">Categories : {api.Category}</h6>
                            <a href={api.Link} target="_blank" className="card-link">Voir l'api</a>
                        </div>
                    </div>
                </div>
            );
        }

        /*if(this.state.health === true){
            var inLife = (
                <div className="ml-3">❤️</div>
            );
        }else{
            var inLife = (
                <div className="ml-3" >💔</div>
            );
        }*/
        
        return (
            <div className="pt-0 home-section container section">
                <div className="row mt-3 mb-3">
                        <h1 className="text-center w-100 d-flex align-items-center justify-content-center">Search for a api</h1>
                        <input type="text" name="search"  className="form-control" onChange={this.onChange} />
                </div>
                <div className="row">
                    <div className="col-md-12 flex-column d-flex justify-content-start align-items-center">
                        <h1 className="">Categories</h1>
                        <ul className="row p-0 content-cat">
                            {categoriesList}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex flex-column justify-content-start align-items-center">
                        <h1  className="mb-4">Listes de toutes les apis</h1>
                        <div className="row">
                            {apiList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;