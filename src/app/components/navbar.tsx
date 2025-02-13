import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
};

export default function Navbar() {
  return (
    <aside>
      <nav>
        <div>
          {Object.entries(navItems).map(([href, { name }]) => (
            <Link key={href} href={href}>
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
