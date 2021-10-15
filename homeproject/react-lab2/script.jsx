const pokemons = [
  {
    id: 1,
    name: "Charmander",
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 2,
    name: "Squirtle",
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 3,
    name: "Butterfree",
    type: "flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    id: 4,
    name: "Rattata",
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    id: 5,
    name: "Metapod",
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
];

class PokeDetail extends React.Component {
  render() {
    return (
      <div className="poke-detail col-4">
        <h1 className="poke-name">{this.props.name}</h1>
        <img src={this.props.image} className="poke-img" />
        <p className="poke-type">Type : {this.props.type}</p>
      </div>
    );
  }
}
class Pokedex extends React.Component {
  render() {
    return (
      <div className="row ">
        {this.props.pokemon.map((poke) => (
          <PokeDetail
            key={poke.id}
            name={poke.name}
            image={poke.image}
            type={poke.type}
          />
        ))}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="wrap-pokedex">
        <h1 className="title-box">POKEDEX</h1>
        <Pokedex pokemon={pokemons} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
