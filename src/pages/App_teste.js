

const nomePokemon = 'Pikachu' // variável string
const nomePokemon2 = <p>Charizard</p> // variável jsx
const renderizaNomeDoPokemon = () => 'Squirtle' // funcao

// function Componente() {
//   return <h2>Texto do meu componente</h2>
// }

// usa-se deste modo atualmente
const Pokemon = () => {
  return (
    <div>
      <h2>Nome do Pokemon: {nomePokemon}, {renderizaNomeDoPokemon()}</h2>
      <h2>Segundo Pokemon: {nomePokemon2}</h2>
    </div>
  
  )
}

const App = () => {
  return (
    <div>
      <h1>Meu site pokemon</h1>
      <Pokemon />
    </div>
  
  )
}

export default App;
