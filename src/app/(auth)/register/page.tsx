"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faChartLine,
  faHandshake,
  faHeadset,
  faEye,
  faEyeSlash,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./register.module.scss";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <div className={styles.icon}></div>
        </div>
        <h2>Hệ thống quản lý chợ dân sinh thông minh</h2>
        <p>
          Tham gia nền tảng quản lý kinh doanh hiện đại, giúp bạn dễ dàng quản lý
          cửa hàng và tăng trưởng doanh thu.
        </p>
        <ul className={styles.features}>
          <li>
            <FontAwesomeIcon icon={faBox} /> Quản lý sản phẩm và kho hàng
          </li>
          <li>
            <FontAwesomeIcon icon={faChartLine} /> Theo dõi doanh thu và báo cáo
          </li>
          <li>
            <FontAwesomeIcon icon={faHandshake} /> Kết nối với khách hàng
          </li>
          <li>
            <FontAwesomeIcon icon={faHeadset} /> Hỗ trợ 24/7
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <h3>Đăng Ký Tài Khoản</h3>
        <p>Đăng ký để bắt đầu quản lý cửa hàng của bạn</p>

        <input type="text" placeholder="Nhập họ và tên đầy đủ" />
        <input type="text" placeholder="Nhập tên đăng nhập" />
        <input type="text" placeholder="vendor@example.com" />

        <div className={styles.passwordInput}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu"
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        <div className={styles.passwordInput}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Xác nhận mật khẩu"
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        <button className={styles.loginBtn}>Đăng ký tài khoản</button>

        <div className={styles.or}>hoặc tiếp tục với</div>
        <div className={styles.socials}>
          <button className={styles.facebook}>
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button className={styles.google}>
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button className={styles.github}>
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button className={styles.phone}>
            <FontAwesomeIcon icon={faPhone} />
          </button>
        </div>

        <label className={styles.options}>
          <input type="checkbox" /> Tôi đồng ý với
          <a href="#"> Điều khoản sử dụng</a> và
          <a href="#"> Chính sách bảo mật</a>
        </label>

        <p className={styles.register}>
          Đã có tài khoản? <a onClick={() => router.push("/login")}>Đăng nhập ngay</a>
        </p>
      </div>
    </div>
  );
}
