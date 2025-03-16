import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const animalTypes = [
  { title: 'All', url: '/search', icon: 'All' },
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

const prices = [
  {
    title: 'Under $50',
    url: '/search?price=0-50',
  },
  {
    title: '$50 - $100',
    url: '/search?price=50-100',
  },
  {
    title: '$100 - $150',
    url: '/search?price=100-150',
  },
];

// TODO: Create a search sidebar component that displays search filters

const SearchSidebar = () => {
  return (
    <>
      <Sidebar className="top-[24px] bg-teal-300" variant="inset">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroupLabel className="text-lg font-bold text-black">
            Animal Type
          </SidebarGroupLabel>
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
          <SidebarGroupLabel className="font-bold text-black text-lg">
            Sizes
          </SidebarGroupLabel>
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
