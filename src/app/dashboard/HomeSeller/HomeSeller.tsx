"use client";

import styles from "./HomeSeller.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import React from "react";

const data = [
  { name: "T2", uv: 1200000 },
  { name: "T3", uv: 1600000 },
  { name: "T4", uv: 1400000 },
  { name: "T5", uv: 1800000 },
  { name: "T6", uv: 2200000 },
  { name: "T7", uv: 2600000 },
  { name: "CN", uv: 2000000 },
];

export default function DashboardPage() {
  return (
    <main className={`${styles.dashboardWrapper} bg-gray-50 min-h-screen`}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.left}>
          <button className={styles.menuBtn}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm, đơn hàng..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.right}>
          <div className={styles.language}>
            <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />
            <span>VI</span>
          </div>
          <FontAwesomeIcon icon={faBell} className={styles.bellIcon} />
          <div className={styles.userInfo}>
            <div className={styles.avatar}>LA</div>
            <div className={styles.nameBlock}>
              <div className={styles.name}>Lan Anh</div>
              <div className={styles.role}>Khách hàng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome */}
      <div className={styles.welcome}>
        <h2>👋 Chào mừng Lan Anh đã quay trở lại!</h2>
        <p>Hãy cùng xem tình hình kinh doanh hôm nay của bạn</p>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        {[
          {
            title: "Tổng sản phẩm",
            value: "1247",
            change: "+12% so với tháng trước",
            color: "text-green-500",
          },
          {
            title: "Đơn hàng hôm nay",
            value: "89",
            change: "+8% so với hôm qua",
            color: "text-orange-500",
          },
          {
            title: "Trạng thái kho",
            value: "Tốt",
            change: "Đủ hàng cho 15 ngày",
            color: "text-green-500",
          },
          {
            title: "Doanh thu hôm nay",
            value: "2,450,000đ",
            change: "+15% so với hôm qua",
            color: "text-green-500 text-sm",
          },
        ].map((item, index) => (
          <div key={index} className={styles.statsCard}>
            <div className="text-sm text-gray-500">{item.title}</div>
            <div className="text-2xl font-bold text-gray-800">{item.value}</div>
            <div className={`text-xs ${item.color}`}>{item.change}</div>
          </div>
        ))}
      </div>

      {/* Charts + Best Sellers */}
      <div className={styles.bottomGrid}>
        <div className={styles.chartCard}>
          <h3 className={styles.cardTitle}>Xu hướng doanh thu 7 ngày</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(v) => `${v / 1e6}M`} />
              <Tooltip formatter={(v) => `${v.toLocaleString()}đ`} />
              <Bar dataKey="uv" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chartCard}>
          <h3 className={styles.cardTitle}>Sản phẩm bán chạy</h3>
          <div className={styles.topProducts}>
            {[
              { name: "Rau muống", color: "bg-green-500", sold: "45 kg", growth: "+12%" },
              { name: "Cà chua", color: "bg-red-500", sold: "38 kg", growth: "+8%" },
              { name: "Cà rốt", color: "bg-yellow-400", sold: "32 kg", growth: "+5%" },
            ].map((item, idx) => (
              <div key={idx} className={styles.productRow}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${item.color} rounded-full`} />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.sold} đã bán</div>
                  </div>
                </div>
                <div className="text-green-500 font-semibold">{item.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
