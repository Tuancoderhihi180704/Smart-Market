"use client";

import { useState } from "react";
import styles from "./Back_Up.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faFileImport,
  faBoxOpen,
  faFileInvoice,
  faStar,
  faFileExcel,
  faFileCsv,
  faFilePdf,
  faDownload,
  faTrashAlt,
  faUndo,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export default function BackupRestore() {
  const [activeTab, setActiveTab] = useState<"backup" | "restore">("backup");

  return (
    <div className={styles.container}>
      {/* Title */}
      <h1 className={styles.title}>
        <FontAwesomeIcon icon={activeTab === "backup" ? faFileExport : faFileImport} />
        <span>Sao lưu & Khôi phục dữ liệu</span>
      </h1>
      <p className={styles.subtitle}>
        Quản lý và bảo vệ dữ liệu cá nhân của bạn một cách an toàn
      </p>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "backup" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("backup")}
        >
          📤 Sao lưu dữ liệu
        </button>
        <button
          className={`${styles.tab} ${activeTab === "restore" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("restore")}
        >
          📥 Khôi phục dữ liệu
        </button>
      </div>

      {/* Content */}
      {activeTab === "backup" ? <BackupPanel /> : <RestorePanel />}
    </div>
  );
}

// ✅ Panel: Sao lưu dữ liệu
function BackupPanel() {
  return (
    <div className={styles.panel}>
      <h2 className={styles.panelTitle}>📤 Sao lưu dữ liệu cá nhân</h2>
      <p className={styles.panelDesc}>
        Bạn có thể tải xuống các thông tin liên quan đến đơn hàng và hoạt động của mình.
      </p>

      <div className={styles.grid}>
        {/* Bên trái */}
        <div className={styles.leftBox}>
          <h3>Chọn dữ liệu muốn xuất</h3>
          <label className={styles.checkboxItem}>
            <input type="checkbox" defaultChecked />
            <FontAwesomeIcon icon={faBoxOpen} />
            <span>Lịch sử đơn hàng</span>
          </label>

          <label className={styles.checkboxItem}>
            <input type="checkbox" defaultChecked />
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>Chi tiết giao dịch/hóa đơn</span>
          </label>

          <label className={styles.checkboxItem}>
            <input type="checkbox" defaultChecked />
            <FontAwesomeIcon icon={faStar} />
            <span>Đánh giá đã viết</span>
          </label>
        </div>

        {/* Bên phải */}
        <div className={styles.rightBox}>
          <h3>Định dạng xuất</h3>
          <div className={styles.formatItem}>
            <FontAwesomeIcon icon={faFileExcel} className="text-green-500" />
            <div>
              <div className={styles.formatTitle}>Excel (.xlsx)</div>
              <div className={styles.formatDesc}>Dễ xem và chỉnh sửa</div>
            </div>
          </div>

          <div className={styles.formatItem}>
            <FontAwesomeIcon icon={faFileCsv} className="text-yellow-500" />
            <div>
              <div className={styles.formatTitle}>CSV (.csv)</div>
              <div className={styles.formatDesc}>Tương thích nhiều ứng dụng</div>
            </div>
          </div>

          <div className={styles.formatItem}>
            <FontAwesomeIcon icon={faFilePdf} className="text-red-500" />
            <div>
              <div className={styles.formatTitle}>PDF (.pdf)</div>
              <div className={styles.formatDesc}>Dễ chia sẻ và in ấn</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.primaryBtn}>
          <FontAwesomeIcon icon={faDownload} />
          <span>Tải về</span>
        </button>
      </div>
    </div>
  );
}

// ✅ Panel: Khôi phục dữ liệu
function RestorePanel() {
  return (
    <div className={styles.panel}>
      <h2 className={styles.panelTitle}>📥 Khôi phục dữ liệu cá nhân</h2>
      <p className={styles.panelDesc}>
        Bạn có thể xem lại hoặc khôi phục các dữ liệu đơn hàng, hóa đơn, đánh giá đã xóa trước đó.
      </p>

      <div className={styles.grid}>
        {/* Dữ liệu đã xoá gần đây */}
        <div className={styles.leftBox}>
          <h3>Dữ liệu đã xoá gần đây</h3>
          <label className={styles.checkboxItem}>
            <input type="checkbox" />
            <div>
              <div className={styles.itemTitle}>Lịch sử đơn hàng đã xoá</div>
              <div className={styles.itemDesc}>Đã xoá • 12 mục</div>
            </div>
          </label>

          <label className={styles.checkboxItem}>
            <input type="checkbox" />
            <div>
              <div className={styles.itemTitle}>Hóa đơn giao dịch đã xoá</div>
              <div className={styles.itemDesc}>Đã xoá • 8 mục</div>
            </div>
          </label>

          <label className={styles.checkboxItem}>
            <input type="checkbox" />
            <div>
              <div className={styles.itemTitle}>Đánh giá đã xoá</div>
              <div className={styles.itemDesc}>Đã xoá • 5 mục</div>
            </div>
          </label>
        </div>

        {/* Hành động */}
        <div className={styles.rightBox}>
          <h3>Hành động</h3>

          <label className={styles.radioItem}>
            <input type="radio" name="action" defaultChecked />
            <FontAwesomeIcon icon={faUndo} />
            <span>Khôi phục dữ liệu</span>
          </label>

          <label className={styles.radioItem}>
            <input type="radio" name="action" />
            <FontAwesomeIcon icon={faTrashAlt} />
            <span>Xoá vĩnh viễn</span>
          </label>

          <label className={styles.radioItem}>
            <input type="radio" name="action" />
            <FontAwesomeIcon icon={faEye} />
            <span>Xem lại trước khi khôi phục</span>
          </label>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.successBtn}>
          ✅ Khôi phục các mục đã chọn
        </button>
      </div>
    </div>
  );
}
