import React from "react";
import { Menu, X, Check, ChevronRight } from "lucide-react";

// Components would be imported from their respective files
const Header = () => (
  <header className="bg-white/90 border-gray-100 fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-sm">
    <nav className="container mx-auto flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Onsat Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-[#40BFB4]">ONSAT</span>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        <a href="#features" className="text-gray-600 hover:text-[#40BFB4]">
          ฟีเจอร์
        </a>
        <a href="#pricing" className="text-gray-600 hover:text-[#40BFB4]">
          ราคา
        </a>
        <a href="#faq" className="text-gray-600 hover:text-[#40BFB4]">
          คำถามที่พบบ่อย
        </a>
        <button className="text-white rounded-full bg-[#40BFB4] px-6 py-2 transition hover:bg-[#3aa89e]">
          เริ่มต้นใช้งาน
        </button>
      </div>
      <button className="md:hidden">
        <Menu className="text-gray-600 h-6 w-6" />
      </button>
    </nav>
  </header>
);

const Hero = () => (
  <section className="px-4 pb-16 pt-24">
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="mb-6 font-[Itim] text-4xl font-bold md:text-5xl">
          ระบบรับเงินโดเนทอัจฉริยะ
          <br />
          ที่สตรีมเมอร์ไว้วางใจ
        </h1>
        <p className="text-gray-600 mb-8 font-[Prompt] text-lg">
          รับเงินโดเนทแบบเรียลไทม์ พร้อมระบบแจ้งเตือนอัตโนมัติ
          และรายงานสรุปที่ดูง่าย ไม่พลาดทุกการสนับสนุน
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="text-white rounded-full bg-[#40BFB4] px-8 py-3 font-semibold transition hover:bg-[#3aa89e]">
            ทดลองใช้ฟรี 30 วัน
          </button>
          <button className="hover:text-white rounded-full border border-[#40BFB4] px-8 py-3 font-semibold text-[#40BFB4] transition hover:bg-[#40BFB4]">
            ดูแพ็กเกจทั้งหมด
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      title: "ครบทุกช่องทางการชำระเงิน",
      description:
        "รองรับการชำระเงินผ่านบัตรเครดิต QR Code และ e-Wallet ชั้นนำทุกค่าย",
      icon: <Check className="h-6 w-6" />,
    },
    {
      title: "ระบบอัตโนมัติ 100%",
      description:
        "ระบบทำงานอัตโนมัติตลอด 24 ชั่วโมง พร้อมแจ้งเตือนทันทีที่มีการโดเนท",
      icon: <Check className="h-6 w-6" />,
    },
    {
      title: "API พร้อมใช้งาน",
      description:
        "เชื่อมต่อกับระบบของคุณได้ง่ายๆ ด้วย API ที่เข้าใจง่ายและมีเอกสารประกอบครบถ้วน",
      icon: <Check className="h-6 w-6" />,
    },
  ];

  return (
    <section id="features" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-[Itim] text-3xl font-bold md:text-4xl">
          ฟีเจอร์ครบครัน ที่สตรีมเมอร์ต้องการ
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#40BFB4]/10">
                <div className="text-[#40BFB4]">{feature.icon}</div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "ระบบมีความปลอดภัยอย่างไร?",
      answer:
        "เราใช้เทคโนโลยีการเข้ารหัสระดับสูง และได้รับการรับรองมาตรฐานความปลอดภัยสากล",
    },
    {
      question: "ใช้เวลานานแค่ไหนในการรับเงิน?",
      answer: "เงินจะเข้าบัญชีของคุณทันทีที่มีการโดเนท และสามารถถอนได้ทุกวัน",
    },
    {
      question: "มีค่าธรรมเนียมเท่าไหร่?",
      answer:
        "ค่าธรรมเนียมเริ่มต้นที่ 2.5% ต่อรายการ ขึ้นอยู่กับแพ็กเกจที่เลือกใช้",
    },
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-[Itim] text-3xl font-bold md:text-4xl">
          คำถามที่พบบ่อย
        </h2>
        <div className="mx-auto max-w-2xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <img src="/logo.png" alt="Onsat Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold">ONSAT</span>
          </div>
          <p className="text-gray-400">ระบบชำระเงินออนไลน์ที่คุณไว้วางใจ</p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">ติดต่อเรา</h4>
          <p className="text-gray-400 text-sm">
            เลขที่ 25 อาคารอัลม่าลิงค์ ชั้น 17 ห้อง 351
            <br />
            ซอยชิดลม ถนนเพลินจิต แขวงลุมพินี
            <br />
            เขตปทุมวัน กรุงเทพฯ 10330
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">ลิงก์ด่วน</h4>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="text-gray-400 hover:text-white">
                ฟีเจอร์
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-400 hover:text-white">
                ราคา
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-400 hover:text-white">
                คำถามที่พบบ่อย
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">ติดตามเรา</h4>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="border-gray-800 text-gray-400 mt-8 border-t pt-8 text-center">
        <p>&copy; 2025 Onsat. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Page = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Page;
