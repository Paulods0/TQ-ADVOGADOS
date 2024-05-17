import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="max-w-96 mx-auto flex flex-col gap-6">
        <h1 className="text-azul text-2xl font-bold">Página não encontrada</h1>
        <Button className="bg-azul text-white">
          <Link to="/">Voltar à página inicial</Link>
        </Button>
      </div>
    </main>
  )
}

export default NotFound
