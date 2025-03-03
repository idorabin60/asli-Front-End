import { useEffect, useState } from "react"
import { HomeworkList } from "./HomeworkList"
import { HomeworkView } from "./HomeworkView"
import { getUserHomeworks } from "@/api/authApi"

// Dummy data

const dummyHomeworks = [
  {
    id: 1,
    title: "תרגילי מתמטיקה",
    subject: "מתמטיקה",
    dueDate: "2023-10-15",
    content: "פתרו את התרגילים בעמודים 15-20 בספר הלימוד. הקפידו להראות את כל שלבי הפתרון.",
    completed: false,
  },
  {
    id: 2,
    title: "סיכום פרק בהיסטוריה",
    subject: "היסטוריה",
    dueDate: "2023-10-18",
    content: "dssd",
    completed: false,
  },
  {
    id: 3,
    title: "ניסוי מדעי",
    subject: "מדעים",
    dueDate: "2023-10-10",
    content:
      'בצעו את הניסוי המתואר בעמוד 30 וכתבו דו"ח מסכם. הקפידו לכלול את כל השלבים: השערה, חומרים, שיטה, תוצאות ומסקנות.',
    completed: true,
  },
  {
    id: 4,
    title: "ניתוח ספרותי",
    subject: "ספרות",
    dueDate: "2023-10-25",
    content:"",
    completed: false,
  },
]

export function HomeworkDashboard() {
    {console.log(localStorage.getItem("token"));
    }
  const [selectedHomework, setSelectedHomework] = useState(null)
  const [homeworks, setHomeworks] = useState(dummyHomeworks)

  const handleHomeworkSelect = (homework) => {
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
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-right text-gray-800">שיעורי הבית שלי</h1>
      <div className="space-y-8">
        <HomeworkList homeworks={homeworks} onSelect={handleHomeworkSelect} selectedId={selectedHomework?.id} />
        {selectedHomework && <HomeworkView homework={selectedHomework} onMarkComplete={handleMarkComplete} />}
      </div>
    </div>
  )
}