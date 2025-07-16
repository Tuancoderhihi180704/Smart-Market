"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
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

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "", general: "" });
  };

  const handleSubmit = async () => {
    const newErrors: typeof errors = {};
    if (!formData.email) newErrors.email = "Vui lòng nhập trường này";
    if (!formData.password) newErrors.password = "Vui lòng nhập trường này";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // ✅ Đổi key từ email -> username và gửi dạng form-urlencoded
      const payload = new URLSearchParams({
        username: formData.email, // ✅ backend nhận username là email
        password: formData.password,
      }).toString();

      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        payload,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // ✅ bắt buộc
          },
        }
      );

      console.log("✅ Login thành công:", res.data);

      // ✅ Lưu token vào localStorage
      const accessToken = res.data.access_token;
      localStorage.setItem("token", accessToken);

      // ✅ Redirect về trang chủ
      router.push("/");

    } catch (err: any) {
      console.error("❌ Login thất bại:", err.response);
      const message =
        err.response?.data?.message || "Tên đăng nhập hoặc mật khẩu không đúng";
      setErrors({ general: message });
    }
  };

  return (
    <div className={styles.container}>
      {/* Trái: giới thiệu */}
      <div className={styles.left}>
        <div className={styles.logo}>
          <div className={styles.icon}></div>
        </div>
        <h2>Hệ thống quản lý chợ dân sinh thông minh</h2>
        <p>
          Nền tảng giúp tiểu thương quản lý cửa hàng, kho hàng <br />
          và đơn hàng một cách dễ dàng.
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

      {/* Phải: Form đăng nhập */}
      <div className={styles.right}>
        <h3>Đăng Nhập Tài Khoản</h3>

        {/* Email */}
        <div
          className={`${styles.inputGroup} ${
            errors.email ? styles.hasError : ""
          }`}
        >
          <input
            name="email"
            type="text"
            placeholder="Nhập email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className={styles.error}>{errors.email || " "}</span>
        </div>

        {/* Password */}
        <div
          className={`${styles.inputGroup} ${styles.passwordInput} ${
            errors.password ? styles.hasError : ""
          }`}
        >
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu"
            value={formData.password}
            onChange={handleChange}
          />
          <span className={styles.eyeIcon} onClick={togglePassword}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
          <span className={styles.error}>{errors.password || " "}</span>
        </div>

        {/* Lỗi tổng quát */}
        {errors.general && (
          <span className={styles.error}>{errors.general}</span>
        )}

        <div className={styles.options}>
          <label>
            <input type="checkbox" /> Ghi nhớ đăng nhập
          </label>
          <a href="#">Quên mật khẩu?</a>
        </div>

        <button className={styles.loginBtn} onClick={handleSubmit}>
          Đăng nhập
        </button>

        <button
          className={styles.registerBtn}
          onClick={() => router.push("/auth/register")}
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
