import Rede from "../Rede";

export default function Header() {
  return (
    <nav className="flex justify-center pt-5 ">
      <header className="container flex  items-center gap-3 flex-col sm:flex-row sm:justify-between ">
        <h1 className="dark:text-white text-2xl sm:text-3xl text-black font-extrabold  ">arthurgomes</h1>   
         <Rede />
      </header>
    </nav>
  )
}
