import { SidebarProvider } from "@/components/ui/sidebar"
import Sidebar from "./Sidebar"
import { HomeworkDashboard } from "./HomeworkDashboard"

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#f8f9fa]">
        <main className="flex-1">
          <HomeworkDashboard />
        </main>
        <Sidebar />
      </div>
    </SidebarProvider>
  )
}
