type CabecalhoProps = {
  titulo: string;
};

function Cabecalho({ titulo }: CabecalhoProps) {
  return (
    <div className="row text-center">
      <h1>{titulo}</h1>
    </div>
  );
}

export default Cabecalho;
