import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        let apiList;
        if (this.props.apis != null) {
            apiList = this.props.apis.map((api, index) =>
                <div key={index} className="col mb-3">
                    <div className="card">
                        <div className="card-body px-3">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h5 className="card-title">{api.API}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Https : {api.HTTPS ? '✅' : '❌'}</h6>
                            </div>
                            <p className="card-text">{api.Description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <a href={api.Link} target="_blank" className="card-link">Voir l'api</a>
                                <h6 className="mb-0 ">Categories : {api.Category}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className="col-md-12 d-flex flex-column justify-content-start align-items-center content-card">
                    <div className="row">
                        {apiList}
                    </div>
                </div>
            </div>
        );
    }
}


export default Card;
