import "@/styles/global.css";
import NavBar from "@/components/navBar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export const metadata = {
  title: "Big At Heart",
  description: "Social Service For All",
};

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <NavBar />
            {children}
          </main>
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
