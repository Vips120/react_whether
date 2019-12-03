import React, { Component } from "react";
import axios from "axios";
import Product from "./product";
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      items: [],
      loading: false
    };
  }

  onFormSubmit = async event => {
    this.setState({ loading: true });
    event.preventDefault();
    let item = await axios.get(
      `https://pixabay.com/api/?key=13877123-199ecacab2603cb7ed9c9c3fc&q=yellow+${this.state.search}&image_type=photo&pretty=true`
    );
    console.log(item.data);
    setTimeout(() => {
      this.setState({ loading: false });
      this.setState({ items: item.data });
    }, 1000);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={event => this.onFormSubmit(event)}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="search here"
                  value={this.state.search}
                  onChange={e => this.setState({ search: e.target.value })}
                  className="form-control"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          {this.state.loading ? (
            <h1>Loading</h1>
          ) : (
            <Product products={this.state.items} />
          )}
        </div>
      </div>
    );
  }
}

export default Searchbar;
