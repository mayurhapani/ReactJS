import { Component } from "react";

class FooterHeadding extends Component {
  constructor(props) {
    super();
  }
  render() {
    return <h4>{this.props.name}</h4>;
  }
}

export default FooterHeadding;
