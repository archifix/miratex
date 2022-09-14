import React from "react"
import Layout from "../Layuot/Layout"
//import card from "../../assets/img/main/fon.jpg"
import "../styles/home.scss"

export function Home() {
  return (
    <>
      <Layout>
        <main className="flex justify-between items-center pt-36">
          <div className="title flex-row">
            <h3 className="text-sm font-med uppercase">Кто мы такие?</h3>
            <h1 className="text-6xl font-med uppercase">MIratex House</h1>
            <div className="subtitle pl-[86px] text-sm font-med">
              <p>
                Мы перерабатываем грузовые контейнеры в автономные крипто-дома,
                гостиницы, офисы, кафе, которые можно разместить там, где Вы
                хотите. Они абсолютно не зависят от коммуникаций, полностью
                готовы к эксплуатации, а в свободное от работы время они
                добывают крипто-валюту.
              </p>
            </div>
          </div>

          <div className="pt-[150px]">
            <img src="../../assets/img/main/fon.png" alt="" />
          </div>
        </main>
      </Layout>
    </>
  )
}
