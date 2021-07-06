import Link from "next/link";
import { useRouter } from "next/router";

const mentees = [
  { name: "Aji", id: "aji" },
  { name: "Firaz", id: "firazzz" },
];

export default function Aji() {
  const Router = useRouter();
  console.log("Router", Router);
  return (
    <div>
      <h1>Listing mentees</h1>
      {mentees.map((mentee) => (
        <Link key={mentee.id} href={`/mentees/${mentee.id}`} passHref>
          <p>{mentee.name}</p>
        </Link>
      ))}
    </div>
  );
}
