import HeaderClient, { MenuItem } from "./HeaderClient";

export default function HeaderServer() {
  // داده‌ها می‌تونن از دیتابیس یا API هم بیان
  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      subMenu: [
        { label: "Web Development", href: "/services/web" },
        { label: "Mobile Apps", href: "/services/mobile" },
      ],
    },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return <HeaderClient items={menuItems} />;
}
