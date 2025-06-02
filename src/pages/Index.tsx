import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StatsCards from "@/components/StatsCards";
import TasksList from "@/components/TasksList";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-3 md:p-6">
          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                Обзор
              </h2>
              <StatsCards />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <TasksList />

              <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Активность команды
                </h3>
                <div className="text-center py-6 md:py-8 text-gray-500">
                  📊 График активности команды
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile backdrop */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Index;
