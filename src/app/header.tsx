import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed bg-gray-800 text-white flex z-10  justify-between px-20 py-4">
      {/* logo */}
      <div>
        <h1 className="font-serif text-2xl font-bold tracking-widest">
          SHIRAZ ALI
        </h1>
      </div>
      {/* nav-bar */}
      <nav>
        <ul className="p-1 flex gap-10">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}
