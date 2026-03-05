import { useState } from 'react';

interface InfoAlunoProps{
  nome: string;
  idade: number;
}


export default function App() {

  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();

  function mostrarAluno(){
    setInfoAluno({
      nome: input,
      idade: parseInt(idade),
    });
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
      <h2>Bem-vindo(a) Aluno(a): {infoAluno?.nome}</h2>
      <h2>Idade: {infoAluno?.idade}</h2>
    </div>
  )
}

