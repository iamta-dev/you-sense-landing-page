"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showPromo, setShowPromo] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <img src="/logo.png" alt="" className="h-16" />
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden space-x-8 md:flex">
            <a
              href="#promotion"
              className="font-prompt text-gray-600 hover:text-primary"
            >
              โปรโมชั่น
            </a>
            <a
              href="#features"
              className="font-prompt text-gray-600 hover:text-primary"
            >
              คุณสมบัติ
            </a>

            <a
              href="#contact"
              className="font-prompt text-gray-600 hover:text-primary"
            >
              ติดต่อเรา
            </a>
          </div>
          <button className="font-prompt hidden rounded-full bg-primary px-6 py-2 text-white hover:bg-opacity-90 md:block">
            ทดลองใช้ฟรี
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="font-prompt text-gray-600 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              คุณสมบัติ
            </a>
            <a
              href="#promotion"
              className="font-prompt text-gray-600 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              โปรโมชั่น
            </a>
            <a
              href="#contact"
              className="font-prompt text-gray-600 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ติดต่อเรา
            </a>
            <button className="font-prompt rounded-full bg-primary px-6 py-2 text-white hover:bg-opacity-90">
              ทดลองใช้ฟรี
            </button>
          </div>
        </div>
      )}

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
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-accent to-white px-4 pt-16">
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

      {/* Special Promotion Section */}
      <section
        id="promotion"
        className="bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-prompt mb-12 text-center text-3xl font-bold text-secondary md:text-4xl">
            โปรโมชั่นพิเศษ
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl bg-white p-8 shadow-lg"
            >
              <h3 className="font-prompt mb-4 text-2xl font-semibold text-primary">
                แพ็คเกจเริ่มต้น
              </h3>
              <div className="mb-6">
                <span className="font-prompt text-4xl font-bold text-secondary">
                  ฿9,999
                </span>
                <span className="text-gray-500">/เดือน</span>
              </div>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  เซ็นเซอร์พื้นฐาน 3 ตัว
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  ระบบวิเคราะห์ข้อมูลเบื้องต้น
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  รายงานประจำเดือน
                </li>
              </ul>
              <button className="font-prompt w-full rounded-full bg-primary px-6 py-3 text-white hover:bg-opacity-90">
                สั่งซื้อเลย
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl bg-white p-8 shadow-lg"
            >
              <div className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm text-accent">
                แนะนำ
              </div>
              <h3 className="font-prompt mb-4 text-2xl font-semibold text-primary">
                แพ็คเกจมืออาชีพ
              </h3>
              <div className="mb-6">
                <span className="font-prompt text-4xl font-bold text-secondary">
                  ฿19,999
                </span>
                <span className="text-gray-500">/เดือน</span>
              </div>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  เซ็นเซอร์ระดับพรีเมียม 5 ตัว
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  ระบบวิเคราะห์ AI ขั้นสูง
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  รายงานแบบเรียลไทม์
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  ทีมซัพพอร์ต 24/7
                </li>
              </ul>
              <button className="font-prompt w-full rounded-full bg-primary px-6 py-3 text-white hover:bg-opacity-90">
                สั่งซื้อเลย
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white px-4 py-20">
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

      {/* Contact Section */}
      <section id="contact" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-prompt mb-12 text-center text-3xl font-bold text-secondary md:text-4xl">
            ติดต่อเรา
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl bg-white p-8 shadow-lg"
            >
              <h3 className="font-prompt mb-6 text-2xl font-semibold text-primary">
                ส่งข้อความถึงเรา
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="font-prompt mb-2 block text-gray-700">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="กรุณากรอกชื่อของคุณ"
                  />
                </div>
                <div>
                  <label className="font-prompt mb-2 block text-gray-700">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="font-prompt mb-2 block text-gray-700">
                    ข้อความ
                  </label>
                  <textarea
                    className="h-32 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="กรุณากรอกข้อความของคุณ"
                  ></textarea>
                </div>
                <button className="font-prompt w-full rounded-full bg-primary px-6 py-3 text-white hover:bg-opacity-90">
                  ส่งข้อความ
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-prompt mb-4 text-xl font-semibold text-primary">
                  ที่อยู่
                </h3>
                <p className="text-gray-600">
                  82/655 หมู่ 20 ต.บางพลีใหญ่
                  <br />
                  อ.บางพลี จ.สมุทรปราการ 10540
                </p>
              </div>
              <div>
                <h3 className="font-prompt mb-4 text-xl font-semibold text-primary">
                  ติดต่อ
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@yousense.io
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-prompt mb-4 text-xl font-semibold text-primary">
                  ติดตามเรา
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.088 6.103c.717-.716 1.205-1.66 1.205-2.744 0-2.147-1.74-3.887-3.887-3.887-1.084 0-2.028.488-2.744 1.205L2.745 14.594c-.717.716-1.205 1.66-1.205 2.744 0 2.147 1.74 3.887 3.887 3.887 1.084 0 2.028-.488 2.744-1.205L22.088 6.103zM8.012 18.53c-.716.717-1.66 1.205-2.744 1.205-2.147 0-3.887-1.74-3.887-3.887 0-1.084.488-2.028 1.205-2.744L16.503 2.187c.716-.717 1.66-1.205 2.744-1.205 2.147 0 3.887 1.74 3.887 3.887 0 1.084-.488 2.028-1.205 2.744L8.012 18.53z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary px-4 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <img
              src="/logo.png"
              alt=""
              className="mb-4 h-16 rounded-sm bg-white"
            />
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
