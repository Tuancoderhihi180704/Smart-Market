"use client";

import styles from "./landing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo + description */}
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <FontAwesomeIcon icon={faStore} size="lg" className={styles.logoIcon} />
            <span>Chợ Thông Minh</span>
          </div>
          <p>
            Giải pháp chuyển đổi số cho tiểu thương Việt Nam. Quản lý kinh doanh thông minh, hiệu quả và bền vững.
          </p>
        </div>

        {/* Column: About */}
        <div className={styles.footerColumn}>
          <h4>Về chúng tôi</h4>
          <ul>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Tính năng</a></li>
            <li><a href="#">Bảng giá</a></li>
            <li><a href="#">Tin tức</a></li>
          </ul>
        </div>

        {/* Column: Support */}
        <div className={styles.footerColumn}>
          <h4>Hỗ trợ</h4>
          <ul>
            <li><a href="#">Hướng dẫn sử dụng</a></li>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Liên hệ hỗ trợ</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
