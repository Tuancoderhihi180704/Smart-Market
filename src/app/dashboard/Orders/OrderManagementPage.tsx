"use client";

import styles from "./OrderManagement.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faList,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

const orders = [
  {
    id: "DH001",
    customer: "Nguyễn Văn An",
    phone: "0901234567",
    product: "Rau muống 2kg + 2 sản phẩm khác",
    total: "85.000 ₫",
    date: "15/12/2024",
    status: "Đang xử lý",
  },
  {
    id: "DH002",
    customer: "Trần Thị Bình",
    phone: "0912345678",
    product: "Dưa hấu 5kg + 1 sản phẩm khác",
    total: "120.000 ₫",
    date: "15/12/2024",
    status: "Đang giao",
  },
  {
    id: "DH003",
    customer: "Lê Minh Cường",
    phone: "0923456789",
    product: "Cá basa 1kg",
    total: "65.000 ₫",
    date: "14/12/2024",
    status: "Hoàn tất",
  },
  {
    id: "DH004",
    customer: "Phạm Thị Dung",
    phone: "0934567890",
    product: "Rau muống 1kg + 3 sản phẩm khác",
    total: "95.000 ₫",
    date: "14/12/2024",
    status: "Đã huỷ",
  },
  {
    id: "DH005",
    customer: "Hoàng Văn Em",
    phone: "0945678901",
    product: "Dưa hấu 3kg",
    total: "75.000 ₫",
    date: "13/12/2024",
    status: "Đang xử lý",
  },
  {
    id: "DH006",
    customer: "Vũ Thị Phương",
    phone: "0956789012",
    product: "Cà chua 3kg + 1 sản phẩm khác",
    total: "110.000 ₫",
    date: "13/12/2024",
    status: "Đang giao",
  },
];

const getStatusClass = (status: string) => {
  switch (status) {
    case "Đang xử lý":
      return styles.statusProcessing;
    case "Đang giao":
      return styles.statusShipping;
    case "Hoàn tất":
      return styles.statusSuccess;
    case "Đã huỷ":
      return styles.statusCanceled;
    default:
      return "";
  }
};

export default function OrderManagementPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Quản Lý Đơn Hàng</h1>
      <div className={styles.topBar}>
        <button className={styles.createBtn}>
          <FontAwesomeIcon icon={faPlus} />
          Tạo đơn hàng mới
        </button>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Tìm kiếm theo mã đơn, tên khách hàng..."
        />
        <select className={styles.selectStatus}>
          <option>Tất cả trạng thái</option>
          <option>Đang xử lý</option>
          <option>Đang giao</option>
          <option>Hoàn tất</option>
          <option>Đã huỷ</option>
        </select>
        <div className={styles.viewToggle}>
          <FontAwesomeIcon icon={faList} className={styles.activeView} />
          <FontAwesomeIcon icon={faTable} />
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Khách hàng</th>
            <th>Sản phẩm</th>
            <th>Tổng tiền</th>
            <th>Ngày tạo</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                {order.customer}
                <br />
                <span className={styles.phone}>{order.phone}</span>
              </td>
              <td>{order.product}</td>
              <td>{order.total}</td>
              <td>{order.date}</td>
              <td>
                <span className={`${styles.status} ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className={styles.actions}>
                <span className={styles.link}>Xem</span>
                {order.status === "Đang xử lý" || order.status === "Đang giao" ? (
                  <span className={styles.link}>Giao</span>
                ) : null}
                {order.status !== "Hoàn tất" ? (
                  <span className={styles.linkDanger}>Huỷ</span>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <span>Hiển thị 1–6 trên tổng 6 đơn hàng</span>
        <div className={styles.pageControl}>
          <label>Hiển thị:</label>
          <select>
            <option>6</option>
            <option>12</option>
            <option>24</option>
          </select>
          <button disabled>«</button>
          <button className={styles.current}>1</button>
          <button disabled>»</button>
        </div>
      </div>
    </div>
  );
}
