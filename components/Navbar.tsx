import Link from "next/link";

function Navbar() {
  return (
    <nav className="m-auto space-y-10 container p-5">
      <ul className="flex gap-5 justify-between text-xl text-blue-500">
        <Link href="/">
          <a className="hover:underline">Static data</a>
        </Link>
        <Link className="hover:underline" href="/from-api">
          <a className="hover:underline">From API</a>
        </Link>
      </ul>
      <h1 className="text-center font-bold text-5xl">Pokedex app</h1>
      <p className="text-gray-500 text-center max-w-3xl mx-auto">
        Hello! This project was inspired by this{" "}
        <a
          className=" text-blue-500 hover:underline"
          href="https://t3-tools.notion.site/Pokedex-Problem-90f9dcfff10d4418a6fad44581b1ecff"
          target="_blank"
          rel="noreferrer"
        >
          coding question
        </a>
        . Credits to the{" "}
        <a
          className=" text-blue-500 hover:underline"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noreferrer"
        >
          Pokedex API
        </a>{" "}
        for making this possible. Feel free to check the{" "}
        <a
          className=" text-blue-500 hover:underline"
          href="https://github.com/randreu28/pokedex"
          target="_blank"
          rel="noreferrer"
        >
          source code
        </a>
        !
      </p>
    </nav>
  );
}

export default Navbar;
