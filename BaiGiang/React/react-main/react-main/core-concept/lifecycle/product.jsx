const Product = ({
  product: { id, title, price, category, description, image },
}) => {
  return (
    <div className="product">
      <div className="product-thumbnail">
        <img src={image} alt={title} />
      </div>
      <div className="product-description">
        <p className="product-category">{category}</p>
        <h2 className="product-name">
          <a href={"product.html?id=" + id}>{title}</a>
        </h2>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
};

class App extends React.Component {
  state = {
    products: [],
  };
  componentDidMount = () => {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    this.setState({ loading: true });

    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((products) =>
        setTimeout(() => this.setState({ loading: false, products }), 1000)
      )
      .catch((error) =>
        setTimeout(() => this.setState({ loading: false, error }), 1000)
      );
  };
  render() {
    return <Product product={this.state.products} />;
  }
}

ReactDOM.render(<App />, root);
