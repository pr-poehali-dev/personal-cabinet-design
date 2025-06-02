import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const TasksList = () => {
  const tasks = [
    {
      id: 1,
      title: "Подготовить презентацию для клиента",
      project: "Проект Alpha",
      priority: "high",
      dueDate: "Сегодня",
      assignee: {
        name: "Мария",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      },
      status: "in-progress",
    },
    {
      id: 2,
      title: "Обновить техническую документацию",
      project: "Проект Beta",
      priority: "medium",
      dueDate: "Завтра",
      assignee: {
        name: "Игорь",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      },
      status: "pending",
    },
    {
      id: 3,
      title: "Провести встречу с командой",
      project: "Проект Gamma",
      priority: "low",
      dueDate: "15 мар",
      assignee: {
        name: "Анна",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      },
      status: "completed",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "CheckCircle2";
      case "in-progress":
        return "Clock";
      case "pending":
        return "Circle";
      default:
        return "Circle";
    }
  };

  return (
    <Card>
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="flex items-center justify-between text-base md:text-lg">
          <span>Активные задачи</span>
          <Badge variant="secondary">{tasks.length}</Badge>
        </CardTitle>
      </CardHeader>
      <div className="px-4 pb-4 md:px-6 md:pb-6">
        <div className="space-y-3 md:space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center space-x-2 md:space-x-4 p-2 md:p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Icon
                name={getStatusIcon(task.status)}
                size={14}
                className={`md:hidden ${
                  task.status === "completed"
                    ? "text-green-500"
                    : "text-gray-400"
                }`}
              />
              <Icon
                name={getStatusIcon(task.status)}
                size={16}
                className={`hidden md:block ${
                  task.status === "completed"
                    ? "text-green-500"
                    : "text-gray-400"
                }`}
              />

              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm font-medium text-gray-900 truncate">
                  {task.title}
                </p>
                <p className="text-xs text-gray-500 hidden md:block">
                  {task.project}
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-end md:items-center space-y-1 md:space-y-0 md:space-x-3">
                <Badge
                  variant="outline"
                  className={`text-xs ${getPriorityColor(task.priority)} hidden md:inline-flex`}
                >
                  {task.priority === "high"
                    ? "Высокий"
                    : task.priority === "medium"
                      ? "Средний"
                      : "Низкий"}
                </Badge>

                <div className="text-xs text-gray-500">{task.dueDate}</div>

                <Avatar className="h-5 w-5 md:h-6 md:w-6">
                  <AvatarImage src={task.assignee.avatar} />
                  <AvatarFallback className="text-xs">
                    {task.assignee.name[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TasksList;
