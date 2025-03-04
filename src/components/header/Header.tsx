const Header = () => {
  return (
    <header className="sm:h-32 h-20 bg-overall shadow-standard flex justify-between align-center fixed z-10 w-full">
      <div className="px-3 content-center">
        <img 
          src="/logo.webp" 
          alt="Imagem do Header" 
          className="w-full h-auto sm:ml-8" 
        />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <h1 className="text-primary sm:text-3xl text-2xl font-bold">Consulte seu CEP</h1>
      </div>
    </header>
  );
};

export default Header;