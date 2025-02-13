import Link from "next/link";
import { perInfo, perStatement } from "./components/utils";

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          {`Hello world! 👋 I'm ${perInfo.name}`}
        </h1>
        <p className="mb-4">{perStatement.statement}</p>
        <Link href="/cv">
          <p>See my CV</p>
        </Link>
      </section>
    </>
  );
}
