import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface SubMenuItem {
  name: string;
  active?: boolean;
}

interface MenuItem {
  name: string;
  icon: string;
  active?: boolean;
  subItems?: SubMenuItem[];
}

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const menuItems: MenuItem[] = [
    { name: "Обзор", icon: "LayoutDashboard", active: true },
    {
      name: "Проекты",
      icon: "FolderOpen",
      active: false,
      subItems: [
        { name: "Активные проекты", active: false },
        { name: "Архив проектов", active: false },
        { name: "Шаблоны", active: false },
      ],
    },
    {
      name: "Задачи",
      icon: "CheckSquare",
      active: false,
      subItems: [
        { name: "Мои задачи", active: true },
        { name: "Назначенные", active: false },
        { name: "Просроченные", active: false },
      ],
    },
    { name: "Команда", icon: "Users", active: false },
    { name: "Календарь", icon: "Calendar", active: false },
    {
      name: "Отчеты",
      icon: "BarChart3",
      active: false,
      subItems: [
        { name: "Аналитика", active: false },
        { name: "Экспорт данных", active: false },
      ],
    },
    { name: "Настройки", icon: "Settings", active: false },
  ];

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName],
    );
  };

  const isExpanded = (itemName: string) => expandedItems.includes(itemName);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Icon name="Zap" size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">WorkSpace</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.name}>
              <Button
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start ${
                  item.active
                    ? "bg-purple-50 text-purple-700 hover:bg-purple-100"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => item.subItems && toggleExpanded(item.name)}
              >
                <Icon name={item.icon} size={18} className="mr-3" />
                {item.name}
                {item.subItems && (
                  <Icon
                    name={
                      isExpanded(item.name) ? "ChevronDown" : "ChevronRight"
                    }
                    size={16}
                    className="ml-auto transition-transform duration-200"
                  />
                )}
              </Button>

              {item.subItems && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded(item.name)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-6 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Button
                        key={subItem.name}
                        variant="ghost"
                        size="sm"
                        className={`w-full justify-start text-sm ${
                          subItem.active
                            ? "bg-purple-50 text-purple-700 hover:bg-purple-100"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-400 mr-3"></div>
                        {subItem.name}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
