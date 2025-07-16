// WarehousePage.tsx
"use client";

import styles from "./Warehouse.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    name: "Rau muống tươi",
    quantity: "45 kg",
    status: "Đầy kho",
    color: "#10b981",
    icon: "📗",
  },
  {
    id: 2,
    name: "Cà chua Đà Lạt",
    quantity: "8 kg",
    status: "Sắp hết",
    color: "#ef4444",
    icon: "📕",
  },
  {
    id: 3,
    name: "Cà rốt baby",
    quantity: "25 kg",
    status: "Vừa đủ",
    color: "#f59e0b",
    icon: "📙",
  },
  {
    id: 4,
    name: "Hành tây tím",
    quantity: "3 kg",
    status: "Sắp hết",
    color: "#ef4444",
    icon: "📘",
  },
  {
    id: 5,
    name: "Dưa hấu Long An",
    quantity: "12 trái",
    status: "Vừa đủ",
    color: "#f59e0b",
    icon: "📗",
  },
  {
    id: 6,
    name: "Cam sành Vinh",
    quantity: "67 kg",
    status: "Đầy kho",
    color: "#10b981",
    icon: "📙",
  },
];

const getStatusClass = (status: string) => {
  if (status === "Đầy kho") return styles.full;
  if (status === "Sắp hết") return styles.low;
  if (status === "Vừa đủ") return styles.medium;
  return "";
};

export default function WarehousePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>📦 Quản lý Kho hàng</h2>
        <button className={styles.importBtn}>
          <FontAwesomeIcon icon={faPlus} /> Nhập hàng
        </button>
      </div>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="🔍 Tìm kiếm sản phẩm..."
          className={styles.searchInput}
        />
        <select className={styles.select}>
          <option>Tất cả danh mục</option>
        </select>
        <select className={styles.select}>
          <option>Tất cả</option>
        </select>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>
                <div
                  className={styles.icon}
                  style={{ background: item.color }}
                >
                  {item.icon}
                </div>
              </td>
              <td>
                <div className={styles.name}>{item.name}</div>
              </td>
              <td>{item.quantity}</td>
              <td>
                <span
                  className={`${styles.status} ${getStatusClass(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </td>
              <td>
                <div className={styles.actions}>
                  <button className={styles.update}>Cập nhật</button>
                  <button className={styles.import}>Nhập thêm</button>
                  <button className={styles.delete}>Xóa</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <span>Hiển thị 1–6 trong tổng 185 sản phẩm</span>
        <div className={styles.pages}>
          <button>{"«"}</button>
          <button className={styles.active}>1</button>
          <button>2</button>
          <button>3</button>
          <button>{"»"}</button>
        </div>
      </div>
    </div>
  );
}