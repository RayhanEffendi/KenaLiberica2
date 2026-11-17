
import { useState } from 'react'
import {
  Menu,
  X,
  ArrowRight,
  Coffee,
  Leaf,
  ChevronDown,
} from 'lucide-react'

const instagramUrl = 'https://www.instagram.com/kenaliberica/'

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

const products = [
  {
    name: 'Liberica Original',
    price: 'Rp18.000',
    description: 'Nikmati karakter kopi Liberica dalam cita rasa aslinya.',
    image: '/images/liberica-original.jpg',
  },
  {
    name: 'Puding Liberica',
    price: 'Hubungi kami',
    description: 'Puding lembut dengan cita rasa kopi Liberica.',
    image: '/images/liberica-pudding.jpg',
  },
  {
    name: 'Es Krim Liberica',
    price: 'Hubungi kami',
    description: 'Es krim dengan cita rasa khas kopi Liberica.',
    image: '/images/liberica-ice-cream.jpg',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-[#F2E6D2] text-[#493023]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#D9B88F]/50 bg-[#F2E6D2]/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

          <a href="#home" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <img
              src="/images/kenaliberica-logo.jpg"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <span>
              Kena<span className="text-[#A8754D]">Liberica.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-[#A8754D]">Beranda</a>
            <a href="#about" className="hover:text-[#A8754D]">Tentang Liberica</a>
            <a href="#story" className="hover:text-[#A8754D]">Cerita Kami</a>
            <a href="#products" className="hover:text-[#A8754D]">Produk Kami</a>
            <a href="#order" className="hover:text-[#A8754D]">Cara Memesan</a>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#493023] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A8754D] md:block"
          >
            Pesan Sekarang
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Buka atau tutup menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-[#D9B88F] bg-[#F2E6D2] px-6 py-6 md:hidden">
            {[
              ['Beranda', '#home'],
              ['Tentang Liberica', '#about'],
              ['Cerita Kami', '#story'],
              ['Produk Kami', '#products'],
              ['Cara Memesan', '#order'],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}

            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Pesan Sekarang
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-12 lg:py-28"
      >
        <div>
          <span className="mb-6 inline-block rounded-full bg-[#D9B88F]/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
            Kenali Kopi Liberica Indonesia
          </span>

          <h1 className="max-w-xl text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Pengalaman Menikmati{' '}
            <span className="text-[#A8754D]">Kopi</span> yang Berbeda.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#786454]">
            Mengenal keunikan kopi Liberica, salah satu kekayaan kopi
            Indonesia dengan karakter aroma dan cita rasa yang berbeda.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="flex items-center gap-3 rounded-full bg-[#493023] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A8754D]"
            >
              Jelajahi Kopi Kami <ArrowRight size={17} />
            </a>

            <a
              href="#about"
              className="rounded-full border border-[#A8754D] px-7 py-4 text-sm font-semibold transition hover:bg-[#D9B88F]/30"
            >
              Kenali Liberica
            </a>
          </div>

          <div className="mt-14 flex gap-10 border-t border-[#D9B88F] pt-7">
            <div>
              <p className="text-2xl font-bold">Unik</p>
              <p className="mt-1 text-xs text-[#786454]">Karakter Kopi</p>
            </div>

            <div>
              <p className="text-2xl font-bold">Lokal</p>
              <p className="mt-1 text-xs text-[#786454]">Kopi Indonesia</p>
            </div>

            <div>
              <p className="text-2xl font-bold">Segar</p>
              <p className="mt-1 text-xs text-[#786454]">Pengalaman Minum Kopi</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[40%] bg-[#D9B88F]/30 blur-2xl" />

          <img
            src="/images/hero-coffee.jpg"
            alt="Kopi Liberica KenaLiberica"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
          />

          <div className="absolute bottom-6 left-6 rounded-2xl bg-[#F2E6D2]/95 px-6 py-4 shadow-lg">
            <p className="text-xs uppercase tracking-widest text-[#A8754D]">
              Rasakan Bedanya
            </p>
            <p className="mt-1 font-bold">Pengalaman Liberica</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#493023] px-6 py-24 text-[#F2E6D2]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 lg:px-12">

          <div>
            <img
              src="/images/liberica-beans.jpg"
              alt="Biji kopi Liberica"
              className="aspect-[5/4] w-full rounded-3xl object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B88F]">
              Kenali Liberica
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Lebih dari Sekadar Secangkir Kopi.
            </h2>

            <p className="mt-7 leading-8 text-[#E2CFB8]">
              Liberica merupakan salah satu jenis kopi yang memiliki
              karakteristik berbeda dari Arabica maupun Robusta. Ukuran
              bijinya cenderung lebih besar, dengan aroma dan profil rasa
              yang khas.
            </p>

            <p className="mt-4 leading-8 text-[#E2CFB8]">
              Melalui KenaLiberica, kami ingin memperkenalkan keunikan
              kopi Liberica kepada lebih banyak penikmat kopi.
            </p>

            <a
              href="#story"
              className="mt-8 inline-flex items-center gap-3 font-semibold text-[#D9B88F] hover:text-white"
            >
              Kenali Cerita Kami <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">

          <Leaf className="mx-auto text-[#66734B]" size={36} />

          <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-[#A8754D]">
            Cerita Kami
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Ada Cerita di Setiap Cangkir.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#786454]">
            KenaLiberica hadir dari ketertarikan terhadap keunikan kopi
            Liberica. Kami ingin menghadirkan pengalaman menikmati kopi
            yang berbeda sekaligus memperkenalkan salah satu kekayaan
            kopi lokal Indonesia melalui berbagai pilihan minuman.
          </p>

        </div>
      </section>

      {/* WHY LIBERICA */}
      <section className="bg-[#E8D7BE] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8754D]">
              Mengapa Liberica?
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Temukan Keistimewaannya.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Coffee size={30} />,
                title: 'Aroma Khas',
                description: 'Memiliki karakter aroma yang unik dan berbeda.',
              },
              {
                icon: <Leaf size={30} />,
                title: 'Karakter Unik',
                description: 'Biji kopi dengan karakteristik yang khas.',
              },
              {
                icon: <ChevronDown size={30} />,
                title: 'Warisan Lokal',
                description: 'Bagian dari keberagaman kopi Indonesia.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-[#F2E6D2] p-9 text-center transition hover:-translate-y-2"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D9B88F]/40 text-[#66734B]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#786454]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8754D]">
                Pilihan Kami
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Produk Kami.
              </h2>

              <p className="mt-3 text-[#786454]">
                Temukan cara favoritmu menikmati Liberica.
              </p>
            </div>

            <span className="text-sm text-[#786454]">
              {String(products.length).padStart(2, '0')} Pilihan
            </span>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-3xl bg-[#E8D7BE] transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold">
                    {product.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#786454]">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-2">
                    <span className="font-bold">
                      {product.price}
                    </span>

                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#493023] px-4 py-2 text-xs font-semibold text-white hover:bg-[#A8754D]"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section id="order" className="bg-[#493023] px-6 py-24 text-[#F2E6D2]">
        <div className="mx-auto max-w-7xl text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B88F]">
            Mudah dan Praktis
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Bagaimana Cara Mendapatkan Kopi Kami?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#E2CFB8]">
            Temukan pilihan kopi favoritmu dan pesan langsung melalui
            Instagram Kenal Liberica.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ['01', 'Pilih Kopi Favoritmu', 'Pilih minuman Liberica favoritmu.'],
              ['02', 'Kunjungi Instagram Kami', 'Kunjungi Instagram KenaLiberica.'],
              ['03', 'Kirim Pesan', 'Hubungi kami lewat pesan langsung.'],
            ].map(([number, title, description]) => (
              <div key={number}>
                <p className="text-5xl font-bold text-[#A8754D]">
                  {number}
                </p>

                <h3 className="mt-5 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#E2CFB8]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#F2E6D2] px-8 py-4 font-semibold text-[#493023] transition hover:bg-[#D9B88F]"
          >
            <InstagramIcon size={19} /> Kunjungi @kenaliberica
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2F2019] px-6 py-12 text-[#F2E6D2] lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">

          <div>
            <a href="#home" className="flex items-center gap-3 text-2xl font-bold">
              <img
                src="/images/kenaliberica-logo.jpg"
                alt=""
                className="h-11 w-11 rounded-full object-cover"
              />
              <span>
              Kena<span className="text-[#A8754D]">Liberica.</span>
              </span>
            </a>

            <p className="mt-3 text-sm text-[#C8B5A2]">
              Pengalaman Menikmati Kopi yang Berbeda.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#C8B5A2]">
            <a href="#about" className="hover:text-white">Tentang</a>
            <a href="#products" className="hover:text-white">Produk</a>
            <a href="#order" className="hover:text-white">Cara Memesan</a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <InstagramIcon size={17} /> Instagram
            </a>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-[#A99584]">
          © 2026 KenaLiberica. Hak cipta dilindungi.
        </div>
      </footer>

    </div>
  )
}

export default App
