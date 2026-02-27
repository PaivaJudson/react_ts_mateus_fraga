import { useState } from 'react';


export default function App() {

  const [input, setInput] = useState("");
  const [aluno, setAluno] = useState("");
  const [idade, setIdade] = useState("");

  function mostrarAluno(){
    console.log(input);
    setAluno(input);
  }

  return (
    <div>
      <h1>Conhecendo Use State</h1>

      <input type="text" 
          placeholder="Digite seu nome" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
      />

      <br />
      <input type="number" 
          placeholder="Digite sua idade" 
          value={idade} 
          onChange={(e) => setIdade(e.target.value)} 
      />

      <br />
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <h2>Bem-vindo(a) Aluno(a): {aluno}</h2>
      <h2>Idade: {idade}</h2>
    </div>
  )
}

