import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { url } from 'inspector';

const animalTypes = [
  {
    title: 'Dog',
    url: '/search?animal_type=dog',
    icon: 'Dog',
  },
  {
    title: 'Cat',
    url: '/search?animal_type=cat',
    icon: 'Cat',
  },
  {
    title: 'Rabbit',
    url: '/search?animal_type=rabbit',
    icon: 'Rabbit',
  },
];

const photoSizes = [
  {
    title: '8x11',
    url: '/search?size=8x11',
  },
  {
    title: '10x13',
    url: '/search?size=8x11',
  },
];

const SearchSidebar = () => {
  return (
    <>
      <Sidebar className="top-[24px] bg-teal-300" variant="inset">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroupLabel>Animal Type</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {animalTypes.map((type) => (
                <SidebarMenuItem key={type.title}>
                  <SidebarMenuButton>{type.title}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroup />
          <SidebarGroup />
          <SidebarGroupLabel>Sizes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {photoSizes.map((size) => (
                <SidebarMenuItem key={size.title}>
                  <SidebarMenuButton>{size.title}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
};

export default SearchSidebar;
