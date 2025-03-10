import Sidebar from "./Sidebar"
import { HomeworkDashboard } from "./HomeworkDashboard"
export default function Page() {
  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      <main className="flex-1 mr-16">
        <HomeworkDashboard />
      </main>
      <Sidebar />
    </div>
  )
}

