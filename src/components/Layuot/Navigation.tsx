import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import line from "../../assets/img/Line.png"
import logo2 from "../../assets/img/logo-2.png"
import share from "../../assets/img/link_02.png"
import log_out from "../../assets/img/log_out.png"

import "../styles/navigation.scss"

export function Navigation() {
  return (
    <header className="border-b-2 shadow-lg">
      <nav className="flex justify-between items-center h-[56px] max-w-[1200px] ml-auto mr-auto px-5  text-sm uppercase">
        <div className="flex items-center">
          <img src={logo} className="mr-[12px]" alt="" />
          <img src={line} className="mr-[12px]" alt="" />
          <img src={logo2} alt="" />
        </div>
        <div className="nav-title flex justify-between items-center text-center font-med">
          <Link to="/" className="mr-5">
            Каталог
          </Link>
          <Link to="/Contacts" className="ml-5">
            Контакты
          </Link>
          <Link to="/Contacts" className="ml-32">
            Зарабатывай с нами
          </Link>
        </div>
        <div className="font-med  text-sm">
          <button className="w-4 h-4 pr-[24px]">EN</button>
          <button className="pr-[24px] w-4 h-4">DE</button>
          <button className="pr-[24px] w-4 h-4">FR</button>
          <button className="pr-[24px] w-4 h-4">ES</button>
          <button>RU</button>
        </div>
        <div className="flex justify-end items-center font-med">
          <img src={share} alt="Поделится" />
          <button className="uppercase">Поделится</button>
          <img src={log_out} className="ml-10" alt="Поделится" />
          <button className="uppercase">Войти</button>
        </div>
      </nav>
    </header>
  )
}
