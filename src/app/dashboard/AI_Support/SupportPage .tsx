"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AISupport.module.scss";
import {
  faPaperPlane,
  faPlus,
  faFilter,
  faSearch,
  faMessage,
  faClock,
  faCheckCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export default function SupportPage() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Xin chào! Tôi là trợ lý hỗ trợ. Bạn đang gặp vấn đề gì cần giúp đỡ hôm nay?",
      time: "14:30",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input, time: "14:31" }]);
    setInput("");
  };

  return (
    <div className={styles.supportPage}>
      <div className={styles.sidebar}>
        <FontAwesomeIcon icon={faMessage} className={styles.icon} />
      </div>

      <div className={styles.container}>
        <div className={styles.topBar}>
          <h1 className={styles.title}>Trò chuyện với trợ lý AI</h1>
          <div className={styles.search}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm, đơn hàng..."
            />
          </div>
        </div>

        <div className={styles.main}>
          {/* Chat Box */}
          <div className={styles.chatBox}>
            <div className={styles.messages}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`${styles.message} ${msg.sender === "user" ? styles.user : ""}`}
                >
                  {msg.sender === "ai" && (
                    <div className={styles.avatar}>
                      <FontAwesomeIcon icon={faMessage} />
                    </div>
                  )}
                  <div className={styles.bubble}>
                    {msg.text}
                    <div className={styles.time}>{msg.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.inputBox}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Nhập nội dung cần hỗ trợ..."
              />
              <button onClick={handleSend}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>

            <div className={styles.quickTags}>
              {["Thanh toán", "Tài khoản", "Sản phẩm", "Đơn hàng"].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Support Panel */}
          <div className={styles.supportPanel}>
            <div className={styles.panelHeader}>
              <h2>Yêu cầu hỗ trợ gần đây</h2>
              <button className={styles.newBtn}>
                <FontAwesomeIcon icon={faPlus} /> Gửi yêu cầu mới
              </button>
            </div>

            <div className={styles.filters}>
              <select>
                <option>Tất cả trạng thái</option>
                <option>Đang xử lý</option>
                <option>Đã giải quyết</option>
              </select>
              <button>
                <FontAwesomeIcon icon={faFilter} /> Mới nhất
              </button>
            </div>

            <SupportCard
              title="Không cập nhật được sản phẩm"
              status="Chờ phản hồi"
              progress={25}
              date="2024-07-01"
              color="gray"
            />
            <SupportCard
              title="Lỗi thanh toán đơn hàng"
              status="Đang xử lý"
              progress={75}
              date="2024-06-30"
              color="orange"
            />
            <SupportCard
              title="Không thể đăng nhập tài khoản"
              status="Đã giải quyết"
              progress={100}
              date="2024-06-29"
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportCard({ title, status, progress, date, color }: any) {
  const icon =
    status === "Đã giải quyết"
      ? faCheckCircle
      : status === "Đang xử lý"
      ? faSpinner
      : faClock;

  return (
    <div className={styles.card}>
      <div className="flex justify-between items-center mb-1">
        <h3>{title}</h3>
        <FontAwesomeIcon icon={icon} className={`text-${color}-500`} />
      </div>
      <div className={styles.status}>
        <span>{status}</span>
        <span>{date}</span>
      </div>
      <div className={styles.progress}>
        <div
          className={`${styles.bar} ${styles[color as keyof typeof styles]}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button>Xem chi tiết</button>
    </div>
  );
}
