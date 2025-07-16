"use client";

import styles from "./AI.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const suggestions = [
  {
    name: "iPhone 15 Pro Max",
    description: "Sản phẩm hot trend, nhu cầu cao trước Tết",
    stock: 50,
    threshold: 15,
    percent: 30,
    date: "2024-01-15",
  },
  {
    name: "Áo khoác mùa đông",
    description: "Thời tiết lạnh, tăng 40% so với tháng trước",
    stock: 100,
    threshold: 25,
    percent: 25,
    date: "2024-01-10",
  },
  {
    name: "Laptop Gaming RTX 4060",
    description: "Sinh viên chuẩn bị học kỳ mới",
    stock: 30,
    threshold: 8,
    percent: 20,
    date: "2024-01-08",
  },
];

export default function AIContent() {
  return (
    <div className={styles.container}>
      {/* Chatbox bên trái */}
      <div className={styles.chatSection}>
        <h2>Trò chuyện với AI</h2>
        <div className={styles.chatBox}>
          <div className={styles.message}>
            <div className={styles.bot}>🤖</div>
            <div className={styles.textBox}>
              <p>
                Xin chào! Tôi là AI trợ lý nhập hàng. Bạn muốn tôi hỗ trợ gì
                hôm nay?
              </p>
              <span className={styles.time}>14:30</span>
            </div>
          </div>
          <div className={styles.status}>🟣 Hàng tồn chạy</div>
        </div>

        <div className={styles.inputBox}>
          <input type="text" placeholder="Nhập tin nhắn..." />
          <div className={styles.actions}>
            <label>
              <input type="checkbox" /> Tự động
            </label>
            <button>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>

      {/* Suggestion bên phải */}
      <div className={styles.suggestionSection}>
        <div className={styles.header}>
          <h3>Gợi ý nhập hàng</h3>
          <div className={styles.actions}>
            <button>Tất cả danh mục</button>
            <button>Tất cả trạng thái</button>
            <button className={styles.exportBtn}>+ Xuất Excel</button>
            <FontAwesomeIcon icon={faEllipsisV} className={styles.menuIcon} />
          </div>
        </div>

        {suggestions.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardHeader}>
              <h4>{item.name}</h4>
              <span>{item.date}</span>
            </div>
            <p>{item.description}</p>
            <div className={styles.stockInfo}>
              <span>
                Số lượng hiện tại: <strong>{item.stock}</strong>
              </span>
              <span>
                Mức tồn kho: <strong>{item.threshold}</strong>
              </span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${item.percent}%` }}
              />
              <span>{item.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
