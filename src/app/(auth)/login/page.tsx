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
import styles from "./login.module.scss";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <div className={styles.icon}></div>
        </div>
        <h2>Hệ thống quản lý chợ dân sinh thông minh</h2>
        <p>
          Nền tảng giúp tiểu thương quản lý cửa hàng, kho hàng <br /> và đơn
          hàng một cách dễ dàng.
        </p>
        <ul className={styles.features}>
          <li>
            <FontAwesomeIcon icon={faBox} /> Kiểm soát tồn kho
          </li>
          <li>
            <FontAwesomeIcon icon={faChartLine} /> Theo dõi doanh thu
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
        <h3>Đăng Nhập Tài Khoản</h3>

        <input type="text" placeholder="Nhập tên đăng nhập hoặc email" />

        <div className={styles.passwordInput}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu"
          />
          <span className={styles.eyeIcon} onClick={togglePassword}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        <div className={styles.options}>
          <label>
            <input type="checkbox" /> Ghi nhớ đăng nhập
          </label>
          <a href="#">Quên mật khẩu?</a>
        </div>

        <button className={styles.loginBtn}>Đăng nhập</button>
        <button
          className={styles.registerBtn}
          onClick={() => router.push("/register")}
        >
          Đăng ký
        </button>
        <div className={styles.or}>hoặc đăng nhập bằng</div>

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

        <p className={styles.register}>
          Chưa có tài khoản? <a href="#">Đăng ký ngay</a>
        </p>
      </div>
    </div>
  );
}
