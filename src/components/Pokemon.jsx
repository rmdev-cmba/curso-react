


const nomePokemon = 'Pikachu' // variável string
const nomePokemon2 = <p>Charizard</p> // variável jsx
const renderizaNomeDoPokemon = () => 'Squirtle' // funcao

export const Pokemon = () => {
  return (
    <div>
      <h2>Nome do Pokemon: {nomePokemon}, {renderizaNomeDoPokemon()}</h2>
      <h2>Segundo Pokemon: {nomePokemon2}</h2>
    </div>

  )
}