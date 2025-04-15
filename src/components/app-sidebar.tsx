import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { CalendarSearch, Home, Sheet } from "lucide-react"
const items = [
  {
    title : "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Atlhètes",
    url: "/gestionnaire",
    icon: Sheet,
  },
  {
    title: "Prochaines Compétitions",
    url: "#",
    icon: CalendarSearch,
  },

]
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Applications coachs</SidebarHeader>
      <SidebarContent>
      <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
