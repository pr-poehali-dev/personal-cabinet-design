import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">Личный кабинет</h1>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            Менеджер
          </Badge>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="Bell" size={20} />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
          </Button>

          <Button variant="ghost" size="icon">
            <Icon name="Settings" size={20} />
          </Button>

          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>АП</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Алексей Петров
              </p>
              <p className="text-xs text-gray-500">alex.petrov@company.ru</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
