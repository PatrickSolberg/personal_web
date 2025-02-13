import Link from "next/link";

const navItems = {
  "/": {
    name: "about me",
  },
  "/blog": {
    name: "blog",
  },
  "/contact": {
    name: "contact",
  },
};

export default function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <nav
        className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div className="flex flex-row space-x-0 pr-10 capitalize">
          {Object.entries(navItems).map(([href, { name }]) => (
            <Link
              key={href}
              href={href}
              className="transition-all flex align-middle relative py-1 px-2 m-1"
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
