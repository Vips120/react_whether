import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.products);
  }
  render() {
    if (this.props.products.length <= 0) {
      return null;
    }

    return (
      <div className="container">
        <div className="row">
          {this.props.products.hits.map(data => (
            <div
              className="col-md-4"
              key={data.id}
              style={{ marginBottom: "10px" }}
            >
              <div className="card text-left">
                <img className="card-img-top" src={data.largeImageURL} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{data.user}</h4>
                  <p className="card-text"> LIKES: {data.likes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Product;
