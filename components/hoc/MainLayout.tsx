import { Sidebar } from "@components/common/Sidebar/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="tw-flex tw-h-screen">
      <Sidebar />
      <div className="tw-w-full">
        <div className="tw-h-10 tw-w-full tw-bg-blue-300">222</div>
        {children}
      </div>
    </div>
  );
}
