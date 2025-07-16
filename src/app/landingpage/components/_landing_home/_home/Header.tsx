"use client";
import Image from "next/image";
import styles from "./landing.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
         <Image src="/images/logo.png" alt="logo" width={50} height={50}/>
          <span>Smart-Market-AI</span>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Trang chủ</a>
          <a href="#" className={styles.navLink}>Tính năng</a>
          <a href="#" className={styles.navLink}>Gói dịch vụ</a>
          <a href="#" className={styles.navLink}>Hỗ trợ</a>
          
        </nav>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <a href="/auth/login" className={styles.loginBtn}>Đăng nhập</a>
          <a href="/auth/register" className={styles.signupBtn}>Đăng ký ngay</a>
        </div>
      </div>
    </header>
  );
}
