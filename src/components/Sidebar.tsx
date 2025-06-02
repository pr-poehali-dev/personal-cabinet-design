import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

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

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const isMobile = useIsMobile();

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
    <aside
      className={`
        ${isMobile ? "fixed" : "relative"} 
        ${isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"}
        w-64 bg-white border-r border-gray-200 h-screen transition-transform duration-300 ease-in-out z-50
      `}
    >
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-900">
              WorkSpace
            </span>
          </div>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          )}
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.name}>
              <Button
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start text-sm md:text-base ${
                  item.active
                    ? "bg-purple-50 text-purple-700 hover:bg-purple-100"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => {
                  if (item.subItems) {
                    toggleExpanded(item.name);
                  } else if (isMobile) {
                    onClose();
                  }
                }}
              >
                <Icon name={item.icon} size={16} className="mr-2 md:mr-3" />
                {item.name}
                {item.subItems && (
                  <Icon
                    name={
                      isExpanded(item.name) ? "ChevronDown" : "ChevronRight"
                    }
                    size={14}
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
                  <div className="ml-4 md:ml-6 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Button
                        key={subItem.name}
                        variant="ghost"
                        size="sm"
                        className={`w-full justify-start text-xs md:text-sm ${
                          subItem.active
                            ? "bg-purple-50 text-purple-700 hover:bg-purple-100"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                        onClick={() => isMobile && onClose()}
                      >
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-400 mr-2 md:mr-3"></div>
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
