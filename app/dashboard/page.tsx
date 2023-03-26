import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    if(!session) {
        redirect("/api/auth/signin")
    }
    return(
        <main>
            <h1>Welcome back <span className="text-2xl font-bold">{session?.user?.name}</span></h1>
        </main>
    )
}