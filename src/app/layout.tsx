import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-row antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            <div className="flex flex-row border-b-1 border-gray-200 p-5 justify-between">
              <SearchBar />
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-full border-2 border-black overflow-hidden">
                  <Image src="/avatar.png" width="40" height="40" className="object-contain" alt="avatar"/>
                </div>
                <p>Jhon Jhon</p>
              </div>
            </div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
