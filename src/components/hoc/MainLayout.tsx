import { Sidebar } from "src/components/common/Sidebar/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="tw-flex tw-h-screen">
      <Sidebar />
      <div className="tw-w-full">
        <div className="tw-h-10 tw-w-full tw-border-b tw-border-gray-200">222</div>
        {children}
      </div>
    </div>
  );
}
