import { Pokemon } from "../components/Pokemon"


export const Home = () => { // retirado 'export default'
  return (
    <div>
      <h1>Meu site pokemon</h1>
      <Pokemon />
    </div>

  )
}

// export default Home; // quando se usa 'export default' este componente pode ser importado e lhe dar qualquer nome