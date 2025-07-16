"use client";

import Sidebar from "@/app/landingpage/components/SideBar/Sidebar";
import AIContent from "@/app/dashboard/AI/AI";
import styles from "./page.module.scss";
import SupportPage from "@/app/dashboard/AI_Support/SupportPage ";

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      {/* Sidebar bên trái */}
      <Sidebar role="seller" />

      {/* Phần nội dung chính */}
      <main className={styles.mainContent}>
        <SupportPage/>
        <AIContent />

      </main>
    </div>
  );
}
