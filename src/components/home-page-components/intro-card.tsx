const IntroCard = () => {
  return (
    <div className="relative h-[450px] w-[400px]">
      <div className="w-full h-full rounded-xl flex flex-col items-center">
        <img
          src="/woman.jpg"
          className="absolute inset-0 object-cover w-full h-full rounded-xl"
          alt="imagem da advogada"
        />
        <div className="absolute text-white bottom-2 flex flex-col items-center">
          <h1 className="text-lg">Ana Maria</h1>
          <h5 className="text-xs">Advogada</h5>
        </div>
      </div>
    </div>
  )
}

export default IntroCard
