import CodingStats from "./lib/CodingStats";
import {
  Briefcase,
  Pen,
  Star,
  Mail,
  Linkedin,
  Twitter,
  Github,
  GraduationCap,
  CreditCard,
  Laptop,
  ShoppingCart,
  LucideMove3D,
} from "lucide-react";

import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaPython, FaReact } from "react-icons/fa";
import { SiArduino, SiDjango } from "react-icons/si";

const App = () => {
  const linkClasses =
    "flex items-center justify-between gap-3 text-black visited:text-black hover:underline underline-offset-2 transition";

  return (
    <div className="flex items-center justify-center min-w-screen">
    <main className="text-black  max-w-400 mx-auto px-6 sm:px-8 lg:px-12 py-20">

      {/* Header */}
      <header className="mb-16">
        <h1 className="text-[clamp(1rem,2vw,3rem)] font-medium tracking-tight mb-2">
          Saksham Jain
        </h1>
        <p className="text-slate-500 text-base sm:text-lg max-w-xl">
          Website Development + AI
        </p>
      </header>

      {/* Main Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-sm lg:text-sm">
        {/* Skills */}
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-4">
            <span className="font-medium">Skills</span>
            <Laptop className="w-4 h-4 text-slate-400" />
          </div>
          <ul className="space-y-2">
            <li>
              <a href="https://nextjs.org" target="_blank" className={linkClasses}>
                <span>Next.js</span>
                <RiNextjsLine className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://react.dev" target="_blank" className={linkClasses}>
                <span>React</span>
                <FaReact className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com" target="_blank" className={linkClasses}>
                <span>Tailwind</span>
                <RiTailwindCssFill className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://www.djangoproject.com" target="_blank" className={linkClasses}>
                <span>Django</span>
                <SiDjango className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://www.python.org" target="_blank" className={linkClasses}>
                <span>Python</span>
                <FaPython className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://www.arduino.cc" target="_blank" className={linkClasses}>
                <span>Arduino</span>
                <SiArduino className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-4">
            <span className="font-medium">Projects</span>
            <Briefcase className="w-4 h-4 text-slate-400" />
          </div>
          <ul className="space-y-2">
            <li>
              <a href="#" className={linkClasses}>
                <span>3D Printer - Built from Scratch</span>
                <LucideMove3D className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
 <li>
              <a href="#" className={linkClasses}>
                <span>Radium - WSGI Web Framework from scratch</span>
                <LucideMove3D className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://www.cramai.me" className={linkClasses}>
                <span>CramAI – AI notes & podcasts</span>
                <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://kidpreneur-pi.vercel.app/" className={linkClasses}>
                <span>Kidpreneur – Design Championship ’25</span>
                <Pen className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://github.com/SPJ27/payplay" className={linkClasses}>
                <span>PayPlay – Mock payment system</span>
                <CreditCard className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://github.com/SPJ27/socialize" className={linkClasses}>
                <span>Socialize – Social platform</span>
                <Star className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://github.com/SPJ27/ShopForU" className={linkClasses}>
                <span>ShopForU – Django e-commerce</span>
                <ShoppingCart className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-4">
            <span className="font-medium">Socials</span>
            <span className="text-slate-400">@</span>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="mailto:saksham.khatod27@gmail.com" className={linkClasses}>
                <span>Email</span>
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/saksham-jain-84965a319/" className={linkClasses}>
                <span>LinkedIn</span>
                <Linkedin className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@DangerouslyCoolStuff/videos" className={linkClasses}>
                <span>Youtube- DangerouslyCoolStuff</span>
                <Twitter className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
            <li>
              <a href="https://github.com/SPJ27?tab=overview&from=2026-01-01&to=2026-01-23" className={linkClasses}>
                <span>GitHub</span>
                <Github className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 flex flex-col sm:flex-row gap-4 justify-between text-xs text-slate-400">
        <span>India</span>
        <span>
          Hours coded since Jan 2026:{" "}
          <span className="text-slate-600 font-medium">
            <CodingStats />
          </span>
        </span>
      </footer>
    </main>
    </div>
  );
};

export default App;
