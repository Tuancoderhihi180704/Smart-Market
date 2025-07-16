"use client";

import { useState } from "react";
import styles from "./ProductManagement.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFileExport,
  faPenToSquare,
  faTrash,
  faMobileAlt,
  faTshirt,
  faLaptop,
  faHeadphones,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const mockProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Điện thoại",
    price: "35.000.000đ",
    stock: 15,
    status: "Đang bán",
    icon: faMobileAlt,
  },
  {
    id: 2,
    name: "Áo khoác mùa đông",
    category: "Thời trang",
    price: "650.000đ",
    stock: 0,
    status: "Hết hàng",
    icon: faTshirt,
  },
  {
    id: 3,
    name: "Laptop Gaming RTX 4060",
    category: "Laptop",
    price: "45.000.000đ",
    stock: 8,
    status: "Đang bán",
    icon: faLaptop,
  },
  {
    id: 4,
    name: "Tai nghe Bluetooth",
    category: "Phụ kiện",
    price: "2.500.000đ",
    stock: 32,
    status: "Đang bán",
    icon: faHeadphones,
  },
  {
    id: 5,
    name: "Đồng hồ thông minh",
    category: "Phụ kiện",
    price: "8.500.000đ",
    stock: 12,
    status: "Đang bán",
    icon: faClock,
  },
];

export default function ProductManagementPage() {
  const [products, setProducts] = useState(mockProducts);

  return (
    <div className={styles.container}>
         <h1>Quản Lý Sản Phẩm Của Bạn !</h1>
      <div className={styles.header}>
        <input type="text" placeholder="Tìm kiếm sản phẩm…" className={styles.search} />
        <div className={styles.actions}>
          <button className={styles.addBtn}>
            <FontAwesomeIcon icon={faPlus} /> Thêm sản phẩm mới
          </button>
          <button className={styles.exportBtn}>
            <FontAwesomeIcon icon={faFileExport} /> Xuất Excel
          </button>
        </div>
      </div>

      <div className={styles.filters}>
        <select>
          <option>Tất cả danh mục</option>
          <option>Điện thoại</option>
          <option>Thời trang</option>
          <option>Phụ kiện</option>
        </select>
        <select>
          <option>Tất cả trạng thái</option>
          <option>Đang bán</option>
          <option>Hết hàng</option>
        </select>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Tồn kho</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((sp) => (
            <tr key={sp.id}>
              <td>
                <div className={`${styles.iconBox} ${sp.status === "Hết hàng" ? styles.red : ""}`}>
                  <FontAwesomeIcon icon={sp.icon} />
                </div>
              </td>
              <td>{sp.name}</td>
              <td>{sp.category}</td>
              <td className={styles.price}>{sp.price}</td>
              <td>{sp.stock}</td>
              <td>
                <span className={`${styles.status} ${sp.status === "Hết hàng" ? styles.out : styles.active}`}>
                  {sp.status}
                </span>
              </td>
              <td className={styles.actions}>
                <button className={styles.edit}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className={styles.delete}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
