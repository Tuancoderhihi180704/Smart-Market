"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faClipboardList,
  faWarehouse,
  faChartLine,
  faLightbulb,
  faCreditCard,
  faCircleQuestion,
  faCloud,
  faCog,
  faUsersGear,
  faUserShield,
  faUser,
  faGears,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

// Kiểu vai trò
type Role = "admin" | "seller" | "user";

export default function Sidebar({ role }: { role: Role }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setCollapsed(!collapsed);

  // Menu theo vai trò
  const fullMenu: Record<Role, { label: string; icon: any; href: string }[]> = {
    admin: [
      { label: "Trang chủ", icon: faHome, href: "/" },
      { label: "Quản lý tài khoản", icon: faUser, href: "/account" },
      { label: "Quản lý người dùng", icon: faUsersGear, href: "/users" },
      { label: "Quản lý phân quyền", icon: faUserShield, href: "/roles" },
      { label: "Quản lý hỗ trợ", icon: faCircleQuestion, href: "/admin-support" },
      { label: "Sao lưu & khôi phục", icon: faCloud, href: "/backup" },
      { label: "Cài đặt", icon: faGears, href: "/settings" },
    ],
    seller: [
      { label: "Trang chủ", icon: faHome, href: "/dashboard/HomeSeller" },
      { label: "Sản phẩm", icon: faBox, href: "/dashboard/Products" },
      { label: "Đơn hàng", icon: faClipboardList, href: "/dashboard/Orders" },
      { label: "Kho hàng", icon: faWarehouse, href: "/dashboard/Warehouse" },
      { label: "Thống kê", icon: faChartLine, href: "/dashboard/Statistics" },
      { label: "Gợi ý nhập hàng", icon: faLightbulb, href: "/dashboard/AI" },
      { label: "Thanh toán", icon: faCreditCard, href: "/dashboard/Payments" },
      { label: "Hỗ trợ", icon: faCircleQuestion, href: "/dashboard/AI_Support" },
      { label: "Sao lưu & khôi phục", icon: faCloud, href: "/dashboard/Back_Up" },
      { label: "Cài đặt", icon: faGears, href: "/settings" },
    ],
    user: [
      { label: "Trang chủ", icon: faHome, href: "/" },
      { label: "Sản phẩm", icon: faBox, href: "/products" },
      { label: "Đơn hàng", icon: faClipboardList, href: "/orders" },
      { label: "Thanh toán", icon: faCreditCard, href: "/payments" },
      { label: "Hỗ trợ", icon: faCircleQuestion, href: "/support" },
    ],
  };

  const menuItems = fullMenu[role] ?? [];

  // Tên vai trò hiển thị
  const getRoleLabel = (role: Role) => {
    switch (role) {
      case "admin":
        return "Quản trị viên";
      case "seller":
        return "Tiểu thương";
      case "user":
      default:
        return "Khách hàng";
    }
  };

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      {/* Logo + Toggle */}
      <div className={styles.header}>
        {!collapsed && (
          <span className={styles.logo}>
            <span className={styles.lockIcon}>🔒</span> Smart Market AI
          </span>
        )}
        <button className={styles.toggleBtn} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Menu */}
      <nav className={styles.menu}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${styles.menuItem} ${pathname === item.href ? styles.active : ""}`}
          >
            <FontAwesomeIcon icon={item.icon} className={styles.icon} />
            {!collapsed && <span>{item.label}</span>}
            {collapsed && <span className={styles.tooltip}>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* User Info */}
      <div className={styles.user}>
        <div className={styles.avatar}>LA</div>
        {!collapsed && (
          <div className={styles.info}>
            <div className={styles.name}>Lan Anh</div>
            <div className={styles.role}>{getRoleLabel(role)}</div>
          </div>
        )}
      </div>
    </aside>
  );
}
