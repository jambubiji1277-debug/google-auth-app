import { auth, signIn, signOut } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <main className="mx-auto max-w-md py-24 px-6 text-center">
      <h1 className="text-2xl font-bold tracking-tight">Google Login Demo</h1>
      {session?.user ? (
        <div className="mt-6 space-y-4">
          <p className="text-sm text-neutral-600">Masuk sebagai: {session.user.email}</p>
          <form action={async () => { "use server"; await signOut(); }}>
            <button className="w-full rounded-lg bg-red-600 py-2 text-white text-sm font-medium">Keluar</button>
          </form>
        </div>
      ) : (
        <form action={async () => { "use server"; await signIn("google"); }}>
          <button className="mt-6 w-full rounded-lg bg-black py-2 text-white text-sm font-medium">Masuk dengan Google</button>
        </form>
      )}
    </main>
  );
}
