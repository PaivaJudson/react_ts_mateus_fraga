import { Header } from './component/header';
import { Aluno } from './component/aluno';
import { Footer } from './component/footer';


export default function App() {
  return (
    <div>
      <Header title="Cabecalho Aprendido" />
      <Aluno nome="Judson Paiva" idade={15} />
      <Aluno nome="Leonor Paiva" idade={10} />
      <Footer />
    </div>
  )
}

