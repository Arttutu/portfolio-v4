

interface BotaoCardProps {
  nome: String; 
}

export default function BotaoCard({ nome }: BotaoCardProps) {
  return (
    <button className="dark:text-white dark:hover:text-green-400 text-black text-base font-bold transition-all hover:text-green-400 hover:underline">
      {nome}
    </button>
  );
}
