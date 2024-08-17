

interface BotaoCardProps {
  nome: String; 
}

export default function BotaoCard({ nome }: BotaoCardProps) {
  return (
    <button className=" text--md sm:text-lg dark:text-secundaria dark:hover:text-white text-black text-base font-bold transition-all hover:text-secundaria hover:underline">
      {nome}
    </button>
  );
}
