"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function HomeworkView({ homework, onMarkComplete }) {
  return (
    <Card className="w-full bg-white shadow-md" dir="rtl">
      <CardHeader className="pb-2 text-right">
        <CardTitle className="text-2xl font-bold text-gray-800">{homework.title}</CardTitle>
        <div className="text-sm text-gray-600">{homework.subject}</div>
      </CardHeader>

      <CardContent className="space-y-4">
        <Section title="סיכום" content={homework.summary} />
        <Section title="אוצר מילים חדש" content={homework.new_vocabulary} />
        <Section title="שיעורי בית" content={homework.hw} />
        <Section title="תופעה דקדוקית" content={homework.grammatical_phenomenon} />
      </CardContent>

      <CardFooter className="border-t pt-4 flex justify-start">
        <Button
          className={cn(
            "px-4 py-2 rounded-md transition-colors",
            homework.completed
              ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
              : "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
          onClick={() => onMarkComplete(homework.id)}
        >
          {homework.completed ? "סמן כלא הושלם" : "סמן כהושלם"}
        </Button>
      </CardFooter>
    </Card>
  )
}

// Extracted Section Component (Handles Empty Content & Newlines)
function Section({ title, content }) {
  if (!content) return null // Avoid rendering empty sections

  return (
    <div className="relative pb-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-right">{title}</h3>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-right">{content}</p>
      <hr className="mt-4 border-t border-gray-300 shadow-sm" />
    </div>
  )
}

