import { useEffect, useState } from "react"
import { HomeworkList } from "./HomeworkList"
import { HomeworkView } from "./HomeworkView"
import { getUserHomeworks } from "@/api/authApi"

// Dummy data


export function HomeworkDashboard() {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    try {
      const userData = JSON.parse(storedUser); // Parse JSON
      console.log("First Name:", userData.first_name); // Print first name
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }
  
  const [selectedHomework, setSelectedHomework] = useState(null)
  const [homeworks, setHomeworks] = useState([])

  const handleHomeworkSelect = (homework) => {
    if (homework == selectedHomework){
      console.log("hi")
      setSelectedHomework(null);
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
  const  getUserHomeWorkData = async () =>{
    const resp = await getUserHomeworks();
    setHomeworks(resp.data) // Update state with fetched data
    console.log(resp.data)
  }
  useEffect(()=>{
    getUserHomeWorkData()
  },[])

  return (
<div className="min-h-screen w-screen">

<div className="container mx-auto py-8 px-4 max-w-2xl min-h-screen">
<h1 className="text-3xl font-bold mb-8 text-right text-gray-800">שיעורי הבית שלי</h1>
      <div className="space-y-8">
        <HomeworkList homeworks={homeworks} onSelect={handleHomeworkSelect} selectedId={selectedHomework?.id} />
        {selectedHomework && <HomeworkView homework={selectedHomework} onMarkComplete={handleMarkComplete} />}
      </div>
    </div>
    </div>
  )
 
}