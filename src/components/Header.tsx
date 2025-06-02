import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useIsMobile } from "@/hooks/useIsMobile";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-white border-b border-gray-200 px-3 md:px-6 py-3 md:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-4">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuToggle}
              className="mr-2"
            >
              <Icon name="Menu" size={20} />
            </Button>
          )}
          <h1 className="text-lg md:text-2xl font-bold text-gray-900">
            {isMobile ? "Кабинет" : "Личный кабинет"}
          </h1>
          {!isMobile && (
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-700"
            >
              Менеджер
            </Badge>
          )}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="Bell" size={18} />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 md:h-3 md:w-3 bg-red-500 rounded-full"></span>
          </Button>

          {!isMobile && (
            <Button variant="ghost" size="icon">
              <Icon name="Settings" size={20} />
            </Button>
          )}

          <div className="flex items-center space-x-2 md:space-x-3">
            <Avatar className="h-8 w-8 md:h-10 md:w-10">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>АП</AvatarFallback>
            </Avatar>
            {!isMobile && (
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Алексей Петров
                </p>
                <p className="text-xs text-gray-500">alex.petrov@company.ru</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
