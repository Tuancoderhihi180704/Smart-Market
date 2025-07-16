// SalesDashboard.tsx
"use client";

import { useState } from "react";
import styles from "./SalesDashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCartShopping,
  faChartLine,
  faSackDollar,
  faLeaf,
  faAppleWhole,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons";

export default function SalesDashboard() {
  const [filter, setFilter] = useState("Hôm nay");

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>📊 Thống kê bán hàng</h2>
      <p className={styles.subheading}>
        Xem hiệu suất kinh doanh theo thời gian thực
      </p>

      <div className={styles.filterBox}>
        <label>Bộ lọc thời gian:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>Hôm nay</option>
          <option>Tuần này</option>
          <option>Tháng này</option>
        </select>
      </div>

      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.card1}`}>
          <FontAwesomeIcon icon={faBoxOpen} className={styles.icon} />
          <div className={styles.value}>1,247</div>
          <div className={styles.label}>Tổng sản phẩm</div>
          <div className={`${styles.change} ${styles.green}`}>
            +12% so với tháng trước
          </div>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
          <div className={styles.value}>89</div>
          <div className={styles.label}>Đơn hàng hôm nay</div>
          <div className={`${styles.change} ${styles.green}`}>
            +8% so với hôm qua
          </div>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <FontAwesomeIcon icon={faChartLine} className={styles.icon} />
          <div className={styles.value}>5 sản phẩm</div>
          <div className={styles.label}>Tình trạng kho</div>
          <div className={`${styles.change} ${styles.orange}`}>
            Sắp hết hàng
          </div>
        </div>
        <div className={`${styles.card} ${styles.card4}`}>
          <FontAwesomeIcon icon={faSackDollar} className={styles.icon} />
          <div className={styles.value}>1.200.000đ</div>
          <div className={styles.label}>Doanh thu hôm nay</div>
          <div className={`${styles.change} ${styles.green}`}>
            +15% so với hôm qua
          </div>
        </div>
      </div>

      <div className={styles.charts}>
        <div className={styles.chartBox}>
          <h4>Doanh thu 7 ngày</h4>
          <div className={styles.barChart}>
            {[850, 1200, 950, 1400, 1800, 2200, 1600].map((val, idx) => (
              <div className={styles.barWrapper} key={idx}>
                <div
                  className={styles.bar}
                  style={{ height: `${val / 25}px` }}
                />
                <span className={styles.label}>T{idx + 2}</span>
                <span className={styles.value}>{val.toLocaleString()}000đ</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.topBox}>
          <h4>Top sản phẩm bán chạy</h4>
          <ul className={styles.topList}>
            <li className={`${styles.topItem} ${styles.green}`}>
              <FontAwesomeIcon icon={faLeaf} /> Rau muống <span>#1</span> <b>+15%</b>
            </li>
            <li className={`${styles.topItem} ${styles.red}`}>
              <FontAwesomeIcon icon={faAppleWhole} /> Cà chua <span>#2</span> <b>+8%</b>
            </li>
            <li className={`${styles.topItem} ${styles.orange}`}>
              <FontAwesomeIcon icon={faCarrot} /> Cà rốt <span>#3</span> <b>+12%</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}