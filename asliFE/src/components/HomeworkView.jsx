import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function HomeworkView({ homework, onMarkComplete }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("he-IL", options)
  }

  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-gray-800">{homework.title}</CardTitle>
        <div className="text-sm text-gray-600">
          <span>{homework.subject}</span>
          <span className="mx-2">•</span>
          <span>תאריך הגשה: {formatDate(homework.dueDate)}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-lg leading-relaxed">{homework.content}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-end">
        <Button
          className={`px-4 py-2 rounded-md ${
            homework.completed
              ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => onMarkComplete(homework.id)}
        >
          {homework.completed ? "סמן כלא הושלם" : "סמן כהושלם"}
        </Button>
      </CardFooter>
    </Card>
  )
}

