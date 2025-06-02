import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Sidebar = () => {
  const menuItems = [
    { name: "Обзор", icon: "LayoutDashboard", active: true },
    { name: "Проекты", icon: "FolderOpen", active: false },
    { name: "Задачи", icon: "CheckSquare", active: false },
    { name: "Команда", icon: "Users", active: false },
    { name: "Календарь", icon: "Calendar", active: false },
    { name: "Отчеты", icon: "BarChart3", active: false },
    { name: "Настройки", icon: "Settings", active: false },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Icon name="Zap" size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">WorkSpace</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              variant={item.active ? "secondary" : "ghost"}
              className={`w-full justify-start ${
                item.active
                  ? "bg-purple-50 text-purple-700 hover:bg-purple-100"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Icon name={item.icon} size={18} className="mr-3" />
              {item.name}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
