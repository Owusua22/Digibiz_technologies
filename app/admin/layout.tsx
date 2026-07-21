// app/admin/layout.tsx
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf9f7] font-sans">
      <nav className="bg-white border-b-2 border-black px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-black text-black">DigiBiz Admin</div>
        <div className="flex gap-4">
          <Link href="/admin/blog" className="font-bold hover:text-orange-500 transition-colors">Manage Blogs</Link>
          <Link href="/" target="_blank" className="font-bold text-gray-500 hover:text-black transition-colors">View Live Site ↗</Link>
        </div>
      </nav>
      <main className="p-6 sm:p-12 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}