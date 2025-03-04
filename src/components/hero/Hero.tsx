import InputSection from "../inputSection/InputSection";

const Hero = () => {
  return (
    <div className="bg-overall px-6 pt-24 pb-4 lg:px-8 h-3/4 sm:grid sm:pt-40 lg:grid-cols-1 lg:justify-center lg:items-baseline xl:grid-cols-2" >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Pesquise e Armazene</h2>
        <p className="mt-2 text-lg/8 text-primary">Endereços através do número do CEP.</p>        
      </div>
      <InputSection/>
    </div>
  );
};

export default Hero;