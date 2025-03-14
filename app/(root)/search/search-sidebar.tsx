import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Sidebar } from 'lucide-react';

const SearchSidebar = () => {
  return (
    <>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
};

export default SearchSidebar;
