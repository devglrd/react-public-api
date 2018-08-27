import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        let categoriesList;
        if (this.props.categories != null) {
            categoriesList = this.props.categories.map((categorie, index) =>
                <li className="nav-link text-center pb-0" key={index}><a onClick={() => this.props.choseCategories(categorie)}
                                                                         className="cursor">{categorie}</a></li>
            );
        }
        return (
            <div>
                <h1 className="">Categories</h1>
                <ul className="row p-0 content-cat">
                    {categoriesList}
                </ul>
            </div>
        );
    }
}


export default Sidebar;
