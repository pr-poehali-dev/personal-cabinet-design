import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StatsCards from "@/components/StatsCards";
import TasksList from "@/components/TasksList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Обзор
              </h2>
              <StatsCards />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TasksList />

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Активность команды
                </h3>
                <div className="text-center py-8 text-gray-500">
                  📊 График активности команды
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
