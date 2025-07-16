"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSearch,
  faFilter,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./AI.module.scss";

export default function SupportSuggestionPage() {
  const [input, setInput] = useState("");

  return (
    <div className={styles.supportPage}>
      <div className={styles.sidebar}></div>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <h1 className={styles.title}>Trò chuyện với AI</h1>
          <div className={styles.search}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            <input type="text" placeholder="Tìm kiếm sản phẩm, đơn hàng..." />
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.chatBox}>
            <div className={styles.messages}>
              <div className={styles.message}>
                <div className={styles.avatar}>🤖</div>
                <div className={styles.bubble}>
                  Xin chào! Tôi là AI trợ lý nhập hàng. Bạn muốn tôi hỗ trợ gì hôm nay?
                  <div className={styles.time}>14:30</div>
                </div>
              </div>
            </div>

            <div className={styles.quickTags}>
              <span>Hàng bán chạy</span>
              <span>Ton kho</span>
              <span>Xu hướng</span>
            </div>

            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>

          <div className={styles.supportPanel}>
            <div className={styles.panelHeader}>
              <h2>Gợi ý nhập hàng</h2>
              <button className={styles.newBtn}>
                <FontAwesomeIcon icon={faDownload} /> Xuất Excel
              </button>
            </div>

            <div className={styles.filters}>
              <select>
                <option>Tất cả danh mục</option>
              </select>
              <button>
                <FontAwesomeIcon icon={faFilter} /> Tất cả trạng thái
              </button>
            </div>

            <div className={styles.card}>
              <h3>iPhone 15 Pro Max</h3>
              <div className={styles.status}>
                <span>Số lượng nên nhập: 50</span>
                <span>Tồn kho: 15</span>
              </div>
              <div className={styles.progress}>
                <div className={`${styles.bar} ${styles.orange}`} style={{ width: "30%" }}></div>
              </div>
              <button>Xem chi tiết</button>
            </div>

            <div className={styles.card}>
              <h3>Áo khoác mùa đông</h3>
              <div className={styles.status}>
                <span>Số lượng nên nhập: 100</span>
                <span>Tồn kho: 25</span>
              </div>
              <div className={styles.progress}>
                <div className={`${styles.bar} ${styles.orange}`} style={{ width: "25%" }}></div>
              </div>
              <button>Xem chi tiết</button>
            </div>

            <div className={styles.card}>
              <h3>Laptop Gaming RTX 4060</h3>
              <div className={styles.status}>
                <span>Số lượng nên nhập: 30</span>
                <span>Tồn kho: 8</span>
              </div>
              <div className={styles.progress}>
                <div className={`${styles.bar} ${styles.orange}`} style={{ width: "20%" }}></div>
              </div>
              <button>Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
