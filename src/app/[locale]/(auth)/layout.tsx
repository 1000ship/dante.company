import { redirect } from "next/navigation";
import { auth } from "utils/auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  if (isLoggedIn) redirect("/");

  return (
    <main className="grow">
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">{children}</div>
        </div>
      </section>
    </main>
  );
}
