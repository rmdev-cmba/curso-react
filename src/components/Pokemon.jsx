


const nomePokemon = 'Pikachu' // variável string
const nomePokemon2 = <p>Charizard</p> // variável jsx
const renderizaNomeDoPokemon = () => 'Squirtle' // funcao



export const Pokemon_old1 = (props) => {
  return (
    <div>
      {/* <h2>Nome do Pokemon: {nomePokemon}, {renderizaNomeDoPokemon()}</h2> */}
      <h2>Nome do Pokemon: {props.name}</h2>
      {/* <h2>Segundo Pokemon: {nomePokemon2}</h2> */}

    </div>

  )
}


export const Pokemon_old2 = (props) => {
  const { name } = props // desestruturando variavel
  return (
    <div>

      <h2>Nome do Pokemon: {name}</h2>

    </div>

  )
}

// outra maneira de desestrutar variaveis:
// export const Pokemon = ({ name, tipo }) => {
//   return (
//     <div>
//       <h2>Nome do Pokemon: {name}, tipo pokemon: {tipo}</h2>
//     </div>

//   )
// }

// pode se usar um ternario:
export const Pokemon4 = ({ name }) => {
  return (
    <div>
      <h2>Nome do Pokemon: {name ? name : 'Pikachu'}</h2>

    </div>

  )
}

export const Pokemon5 = ({ name }) => {
  return (
    <div>
      <h2>Nome do Pokemon: {name || 'Pikachu'}</h2>
    </div>

  )
}

// mais recomendável é esta maneira:
export const Pokemon = ({ name = 'Pikachu' }) => { // caso 'name' seja undefined usa-se 'Pikachu'
  return (
    <div>
      <h2>Nome do Pokemon: {name}</h2>
    </div>

  )
}