

import Sidebar from "@/app/landingpage/components/SideBar/Sidebar";
import styles from "./layout.module.scss"; // tạo file SCSS nếu cần

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Sidebar role="seller" />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
