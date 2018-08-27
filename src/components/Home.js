import React, {Component} from 'react'
import axios from 'axios';
import Search from "./app/Search";
import Sidebar from "./app/Sidebar";
import Card from "./app/Card";
import api from '../api';

class Home extends Component {
    state = {
        charged: false,
        categories: null,
        apis: null,
        health: false
    }


    componentDidMount() {
        api.get("https://api.publicapis.org/categories").then(res => {
            this.setState({categories: res.data, charged: true});
        });
        api.get("https://api.publicapis.org/entries").then(res => {
            this.setState({apis: res.data.entries, charged: true});
        });
        api.get("https://api.publicapis.org/health").then(res => {
            this.setState({health: res.data.alive});
        });
    };

    onChange = (event) => {
        this.updateApi(event.target.value);
    };

    updateApi = (search) => {
        let url = 'https://api.publicapis.org/entries?title=' + search;
        api.get(url).then(res => {
            this.setState({apis: res.data.entries, charged: true});
        });
    };

    choseCategories = (categorie) => {
        let indexOf = categorie.search("&");
        let search = null;
        if (indexOf > 1) {
            search = categorie.substr(0, indexOf);
        }
        else {
            search = categorie;
        }
        let url = 'https://api.publicapis.org/entries?category=' + search;
        api.get(url).then(res => {
            this.setState({apis: res.data.entries});
        })
    }

    render() {
        return (
            <div className="pt-0 home-section section">
                <div className="row">
                    <div className="col-md-2">
                        <div className="nav">
                            <Sidebar choseCategories={this.choseCategories.bind(this)}
                                     categories={this.state.categories}/>
                        </div>
                    </div>
                    {this.state.charged ? (
                        <div className="col-md-8 content">
                            <div className="offset-md-2">
                                <div>
                                    <div className="">
                                        <Search onChange={this.onChange.bind(this)}/>
                                    </div>
                                    <div className="row scrolling-zone">
                                        <Card apis={this.state.apis}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div>Loader
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Home;