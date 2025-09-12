import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import "../../globals.css";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container mx-auto px-4">
            <Header />
            <div className="my-6">
              <div className="flex flex-col-reverse md:flex-row gap-6">
                <div className="flex flex-col gap-6">
                  <DashboardSidebar />
                </div>

                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
