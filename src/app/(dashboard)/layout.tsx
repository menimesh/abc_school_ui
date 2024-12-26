import Link from "next/link";
import Image from "next/image";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="h-screen flex">
      {/* Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <span className="hiddnen lg:block">Abc School Dashboard</span>
        </Link>
      </div>

      {/* Main content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">
        {children}
      </div>
    </div>
  );
}
