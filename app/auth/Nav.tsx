import Link from "next/link";
import Login from "./login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">Sent it</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <h1>{session.user.name}</h1>}
      </ul>
    </nav>
  );
}
