"use client";

import styles from "./landing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faChartBar,
  faLightbulb,
  faClipboardList,
  faUsers,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Hệ thống quản lý chợ dân sinh thông minh tích hợp AI</h1>
          <p>
            Theo dõi hàng hóa, đơn hàng, chi phí và nhận gợi ý nhập hàng từ AI – tất cả trong một hệ thống cho tiểu thương.
          </p>
          <a href="/register" className={styles.ctaLarge}>
            Bắt đầu ngay – Miễn phí 7 ngày
          </a>
          <ul className={styles.checkList}>
            <li>✔ Không cần thẻ tín dụng</li>
            <li>✔ Hủy bất cứ lúc nào</li>
          </ul>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.mockupBox}>Tiểu thương dùng tablet quản lý sạp</div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Tính năng nổi bật</h2>
        <p>Giải pháp toàn diện cho việc quản lý kinh doanh của tiểu thương</p>
        <div className={styles.featureGrid}>
          <div className={styles.featureBox}>
            <FontAwesomeIcon icon={faBox} size="2x" className={styles.featureIcon} />
            <strong>Quản lý sản phẩm & kho hàng</strong>
            <p>Thêm, sửa, theo dõi số lượng hàng dễ dàng. Cảnh báo khi hàng tồn ít.</p>
          </div>
          <div className={styles.featureBox}>
            <FontAwesomeIcon icon={faClipboardList} size="2x" className={styles.featureIcon} />
            <strong>Đơn hàng & thanh toán nhanh gọn</strong>
            <p>Theo dõi đơn, doanh thu, và chi tiết mỗi đơn hàng một cách chính xác.</p>
          </div>
          <div className={styles.featureBox}>
            <FontAwesomeIcon icon={faLightbulb} size="2x" className={styles.featureIcon} />
            <strong>Gợi ý nhập hàng từ AI</strong>
            <p>Nhập đúng sản phẩm – đúng mùa – đúng nhu cầu với trí tuệ nhân tạo.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.benefitImage}>
          <div className={styles.mockupBoxBlue}>Biểu đồ bán hàng và app</div>
        </div>
        <div className={styles.benefitContent}>
          <h2>Lợi ích cho tiểu thương</h2>
          <ul className={styles.benefitList}>
            <li>
              <FontAwesomeIcon icon={faChartBar} className={styles.benefitIcon} /> Không cần giấy tờ, sổ sách
            </li>
            <li>
              <FontAwesomeIcon icon={faBox} className={styles.benefitIcon} /> Cảnh báo hàng tồn ít
            </li>
            <li>
              <FontAwesomeIcon icon={faShoppingCart} className={styles.benefitIcon} /> Phí chợ, điện, nước nhắc đúng hạn
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} className={styles.benefitIcon} /> Hỗ trợ 24/7 từ đội ngũ kỹ thuật
            </li>
          </ul>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statistics}>
        <h2>Thống kê ấn tượng</h2>
        <p>Con số nói lên hiệu quả của hệ thống</p>
        <div className={styles.statGrid}>
          <div className={styles.statBox}>
            <strong>+1,200</strong>
            <p>Tiểu thương đang sử dụng</p>
          </div>
          <div className={styles.statBox}>
            <strong>95%</strong>
            <p>Hài lòng với hệ thống</p>
          </div>
          <div className={styles.statBox}>
            <strong>+8,000</strong>
            <p>Đơn hàng xử lý mỗi ngày</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>Câu chuyện người dùng</h2>
        <p>Lắng nghe chia sẻ từ những tiểu thương đang sử dụng hệ thống</p>
        <div className={styles.testimonialBox}>
          <div className={styles.avatar}>C</div>
          <div className={styles.userInfo}>
            <strong>Chị Lan</strong>
            <span>Chợ Hàn, Đà Nẵng</span>
          </div>
          <p>
            “Từ khi dùng hệ thống, tôi không còn lo trễ phí và biết nhập gì mỗi tuần. Doanh thu tăng 30% nhờ gợi ý AI chính xác.”
          </p>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Trải nghiệm miễn phí – không cần thẻ tín dụng</h2>
          <p>
            Đăng ký ngay hôm nay để bắt đầu quản lý sạp hàng thông minh và hiệu quả hơn
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faClipboardList} className={styles.benefitIcon} /> Miễn phí 7 ngày
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} className={styles.benefitIcon} /> Hỗ trợ 24/7
            </li>
          </ul>
        </div>
        <form className={styles.signupForm}>
          <h3>Đăng ký ngay</h3>
          <input type="text" placeholder="Họ và tên" />
          <input type="tel" placeholder="Số điện thoại" />
          <select>
            <option>Chọn khu vực</option>
            <option>Hà Nội</option>
            <option>TP. Hồ Chí Minh</option>
            <option>TP. Đà Nẵng</option>
          </select>
          <button type="submit">Đăng ký ngay</button>
        </form>
      </section>
    </main>
  );
}
