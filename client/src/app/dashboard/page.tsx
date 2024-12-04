import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { RepositoryList } from "@/components/RepositoryList";
import { CreateBountyModal } from "@/components/CreateBountyModal";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Your Repositories</h1>
        <CreateBountyModal />
      </div>
      <RepositoryList accessToken={session?.accessToken} />
    </div>
  );
}
