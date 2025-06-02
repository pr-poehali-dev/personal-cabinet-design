import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsCards = () => {
  const stats = [
    {
      title: "Активные проекты",
      value: "8",
      change: "+2 за неделю",
      icon: "FolderOpen",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Выполненные задачи",
      value: "156",
      change: "+12 сегодня",
      icon: "CheckCircle2",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Команда",
      value: "24",
      change: "3 новых",
      icon: "Users",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Доходы",
      value: "₽2.4М",
      change: "+15% к прошлому месяцу",
      icon: "TrendingUp",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="hover:shadow-md transition-shadow duration-200"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <Icon name={stat.icon} size={20} className={stat.color} />
              </div>
            </div>
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
