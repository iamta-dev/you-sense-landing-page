"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showPromo, setShowPromo] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "เซ็นเซอร์อัจฉริยะ",
      description: "ตรวจจับและวิเคราะห์ข้อมูลแบบเรียลไทม์ด้วยเทคโนโลยี AI",
    },
    {
      title: "ควบคุมผ่านมือถือ",
      description: "จัดการทุกอุปกรณ์ผ่านแอพพลิเคชันเดียว ง่ายและสะดวก",
    },
    {
      title: "รายงานอัจฉริยะ",
      description: "วิเคราะห์ข้อมูลเชิงลึกด้วย AI เพื่อการตัดสินใจที่แม่นยำ",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Promotion Banner */}
      {showPromo && (
        <div className="relative bg-primary px-4 py-2 text-center text-white">
          <p className="font-prompt">Early bird gets 20% off</p>
          <button
            onClick={() => setShowPromo(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 transform"
          >
            ✕
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-accent to-white px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-prompt mb-6 text-4xl font-bold text-secondary md:text-6xl"
          >
            ก้าวสู่อนาคตด้วยเซ็นเซอร์อัจฉริยะ
            <br />
            ที่ควบคุมได้ในมือคุณ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg text-gray-700 md:text-xl"
          >
            สัมผัสมิติใหม่แห่งประสบการณ์ ด้วยเทคโนโลยีเซ็นเซอร์สุดล้ำและ AI จาก
            YouSense
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="font-prompt rounded-full bg-primary px-8 py-3 text-lg text-white transition-colors hover:bg-opacity-90"
          >
            Explore Sensors
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-prompt mb-12 text-center text-3xl font-bold text-secondary md:text-4xl">
            ยกระดับทุกสัมผัส ด้วย YouSense
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="cursor-pointer rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
                onClick={() => setActiveFeature(index)}
              >
                <h3 className="font-prompt mb-4 text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary px-4 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-prompt mb-4 text-xl font-semibold">YouSense</h3>
            <p className="text-gray-300">
              82/655 หมู่ 20 ต.บางพลีใหญ่
              <br />
              อ.บางพลี จ.สมุทรปราการ 10540
            </p>
          </div>
          <div>
            <h3 className="font-prompt mb-4 text-xl font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-prompt mb-4 text-xl font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Line
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 YouSense. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
