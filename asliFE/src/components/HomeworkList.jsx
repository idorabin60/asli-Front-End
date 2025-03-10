import { Card, CardContent } from "@/components/ui/card";

export function HomeworkList({ homeworks, onSelect, selectedId }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("he-IL", options);
  };

  return (
    <div className="space-y-4">
      {homeworks.map((homework) => {
        console.log("hi")
        console.log(homework); // ✅ Correct placement of console.log()

        return (
          <Card
            key={homework.id}
            className={`cursor-pointer transition-colors hover:bg-gray-100 ${
              selectedId === homework.id ? "border-blue-500 border-2" : ""
            }`}
            onClick={() => onSelect(homework)}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                {/* Status Dot (Now on the Left) */}
                <div
                  className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    homework.completed ? "bg-green-500" : "bg-yellow-500"
                  }`}
                ></div>

                {/* Text (Now on the Right) */}
                <div className="text-right flex-1">
                  <h3 className="font-medium text-lg">{homework.title}</h3>
                  <p className="text-sm text-gray-600">{homework.subject}</p>
                  <p className="text-sm text-gray-500">
                     שיעור: {formatDate(homework.created_at)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
