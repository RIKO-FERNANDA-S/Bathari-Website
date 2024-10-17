"use client";
import React from "react";
import 'boxicons'


function ServiceAI() {

  return (
  <main className="flex pb-20 flex-col gap-10 w-full h-full items-center justify-center">
    <section className="w-[45em] text-start flex flex-col gap-3">
      <h1 className="text-7xl font-bold text-blue-400">HALLO SOBATH</h1>
      <p className="text-base w-4/5 font-medium text-wrap">Cari penmapilan yang kamu inginkan melalui BATHARI AI support by GEMINI AI</p>
    </section>

    <section className="flex gap-6">
      <div className="w-[15em] bg-slate-200 hover:bg-slate-300 rounded-lg h-[15em] p-4 flex flex-col justify-around items-center gap-3">
        <div className="w-full">
          <h1 className="text-lg font-bold">Rekomendasi Pakaian</h1>
        </div>
        <div className="w-full">
          <p className="text-sm font-light">Dapatkan rekomendasi pakaian yang disesuaikan dengan preferensi Anda, dari pakaian santai hingga busana formal.</p>
        </div>
        <div className="w-full flex justify-end">
        <i className='bx bxs-t-shirt text-xl p-2 rounded-full bg-slate-300'></i>
        </div>
      </div>
      <div className="w-[15em] bg-slate-200 hover:bg-slate-300 rounded-lg h-[15em] p-4 flex flex-col justify-around items-center gap-3">
        <div className="w-full">
          <h1 className="text-lg font-bold">Tren Mode Terkini</h1>
        </div>
        <div className="w-full">
          <p className="text-sm font-light">Selalu up-to-date dengan tren mode terbaru yang disukai banyak orang dan tampil lebih fashionable.</p>
        </div>
        <div className="w-full flex justify-end">
        <i className='bx bx-trending-up text-xl p-2 rounded-full bg-slate-300' ></i>
        </div>
      </div>
      <div className="w-[15em] bg-slate-200 hover:bg-slate-300 rounded-lg h-[15em] p-4 flex flex-col justify-around items-center gap-3">
        <div className="w-full">
          <h1 className="text-lg font-bold">Gaya Pakaian Personal</h1>
        </div>
        <div className="w-full">
          <p className="text-sm font-light">AI kami menawarkan saran pakaian yang sesuai dengan acara, cuaca, atau gaya pribadi Anda.</p>
        </div>
        <div className="w-full flex justify-end">
        <i className='bx bx-male-female  text-xl p-2 rounded-full bg-slate-300'></i>
        </div>
      </div>
    </section>
  </main>
  );
}

export default ServiceAI;
