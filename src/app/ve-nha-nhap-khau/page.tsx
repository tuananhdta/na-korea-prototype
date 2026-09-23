import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ImporterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex min-h-[calc(100vh-5rem)] flex-1 items-center justify-center px-4 sm:px-6">
        <h1 className="text-center text-2xl font-semibold text-heading sm:text-3xl">
          Về nhà nhập khẩu
        </h1>
      </main>

      <Footer />
    </div>
  );
}
