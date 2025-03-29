import { useEffect, useState } from "react"
import { HomeworkList } from "./HomeworkList"
import { HomeworkView } from "./HomeworkView"
import { getUserHomeworks } from "@/api/authApi"
import { Card, CardContent } from "@/components/ui/card"

export function HomeworkDashboard() {
  const [selectedHomework, setSelectedHomework] = useState(null)
  const [homeworks, setHomeworks] = useState([])
  const [loading, setLoading] = useState(true)

  const handleHomeworkSelect = (homework) => {
    if (homework == selectedHomework) {
      setSelectedHomework(null)
      return
    }
    setSelectedHomework(homework)
  }

  const handleMarkComplete = (id) => {
    setHomeworks(homeworks.map((hw) => (hw.id === id ? { ...hw, completed: !hw.completed } : hw)))
    if (selectedHomework && selectedHomework.id === id) {
      setSelectedHomework({
        ...selectedHomework,
        completed: !selectedHomework.completed,
      })
    }
  }

  const getUserHomeWorkData = async () => {
    try {
      setLoading(true)
      const resp = await getUserHomeworks()
      setHomeworks(resp.data) // Update state with fetched data
    } catch (error) {
      console.error("Error fetching homework data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        console.log("First Name:", userData.first_name)
      } catch (error) {
        console.error("Error parsing user data:", error)
      }
    }
    
    // Fetch homework data
    getUserHomeWorkData()
  }, [])

  return (
    <div className="min-h-screen w-screen">
      <div className="container mx-auto py-8 px-4 max-w-2xl min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-right text-gray-800">שיעורי הבית שלי</h1>
        <div className="space-y-8">
          {loading ? (
            <Card className="w-full bg-white shadow-md" dir="rtl">
              <CardContent className="py-8">
                <p className="text-center text-gray-600 text-lg">Loading homework...</p>
              </CardContent>
            </Card>
          ) : (
            <>
              {homeworks.length === 0 ? (
                <Card className="w-full bg-white shadow-md" dir="rtl">
                  <CardContent className="py-8">
                    <p className="text-center text-gray-600 text-lg">אין עוד שיעורי בית כרגע...</p>
                  </CardContent>
                </Card>
              ) : (
                <>
                  <HomeworkList 
                    homeworks={homeworks} 
                    onSelect={handleHomeworkSelect} 
                    selectedId={selectedHomework?.id} 
                  />
                  {selectedHomework ? (
                    <HomeworkView 
                      homework={selectedHomework} 
                      onMarkComplete={handleMarkComplete} 
                    />
                  ) : 
                    <Card className="w-full bg-white shadow-md" dir="rtl">
                      <CardContent className="py-8">
                        <p className="text-center text-gray-600 text-lg">לחץ על לשונית שיעורי הבית כדי לראות את שיעורי הבית שלך</p>
                      </CardContent>
                    </Card>
                  }
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}