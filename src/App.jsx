import React from 'react';

const topChoices = [
  {
    title: 'iTunes Giftcard',
    subtitle: 'Giftcard',
    price: 'NRP 800.00',
    image: '/image1.png'
  },
  {
    title: 'Pubg UC',
    subtitle: 'Giftcard',
    price: 'NRP 1200.00',
    image: '/image2.png'
  },
  {
    title: 'FreeFire Diamond',
    subtitle: 'Giftcard',
    price: 'NRP 600.00',
    image: '/image3.png'
  },
  {
    title: 'Valorant Giftcard',
    subtitle: 'Giftcard',
    price: 'NRP 2200.00',
    image: '/image4.png'
  }
];

function ProductCard({ product, variant = 'choice' }) {
  const thumbStyle = {
    backgroundImage: `linear-gradient(145deg, rgba(8, 16, 38, 0.08), rgba(6, 10, 22, 0.32)), url('${product.image}')`
  };

  return (
    <article className="product-card">
      <div className={`thumb ${variant}`} style={thumbStyle}>
      </div>
      <span className="subtitle">{product.subtitle}</span>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </article>
  );
}

function Section({ title, items, variant }) {
  return (
    <section className="catalog-section">
      <div className="section-head">
        <h2>{title}</h2>
      </div>
      <div className="grid">
        {items.map((item) => (
          <ProductCard key={item.title} product={item} variant={variant} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page-bg">
      <main className="store-shell">
        <header className="topbar">
          <div className="brand">
            <img src="/logo.png" alt="JM Store" />
          </div>
          <label className="search-wrap">
            <input type="text" placeholder="Search store" aria-label="Search store" />
          </label>
          <div className="actions">
            <button className="cart" aria-label="Cart">
              {'🛒'}
            </button>
            <button className="sign-in">Sign in</button>
          </div>
        </header>

        <div className="content-scroll">
          <nav className="nav-links">
            <a href="#">Discovery</a>
            <a href="#">Browse</a>
            <a href="#">News</a>
          </nav>

          <section className="hero">
            <div className="hero-banner">
              <img className="hero-image" src="/image.png" alt="EA FC24 banner" />
            </div>
            <aside className="hero-side">
              <div className="fc-logo">
                <img src="/image5.png" alt="EA FC24 logo" />
              </div>
              <p>
                What happens when two iconic football brands come together?
              </p>
              <p>A one-of-a-kind experience that takes football to places it&apos;s never been before.</p>
              <p>Experience WHAT THE FC now in EA SPORTS FC24.</p>
              <div className="hero-buttons">
                <button className="buy">Buy now</button>
                <button className="wish">+ Add to wishlist</button>
              </div>
            </aside>
          </section>

          <div className="hero-arrows" aria-hidden="true">
            <button className="hero-arrow-btn">{'<'}</button>
            <button className="hero-arrow-btn">{'>'}</button>
          </div>

          <Section title="Top choices" items={topChoices} variant="choice" />

          <footer className="site-footer">
            <div className="footer-top-logo">
              <img src="/logo.png" alt="JM Store" />
            </div>

            <div className="footer-grid">
              <div className="footer-col">
                <p>JM Store © 2022 - 2024. An affiliate with RajMaskey & AshimNeupane</p>
                <div className="footer-small-logo">
                  <img src="/logo.png" alt="JM Store mark" />
                </div>
                <p>JM Store Inc © 2022 - 2023</p>
                <p>An Raj&apos;s Company.</p>
                <div className="trust-box">BLOCKED BY YOUR BANK? BUY FROM PARCEL</div>
              </div>

              <div className="footer-col footer-contact">
                <p>📍 Biratnagar 5, Pokhara 17 Nepal</p>
                <p>📞 +977 9822789260</p>
                <p>✉ contact@rajmaskey.com.np</p>
              </div>

              <div className="footer-col">
                <h4>About us</h4>
                <p>
                  JM&Store or Parce1Nepal is Nepal based digital marketplace that specializes in
                  the sale of videogames, game-keys, and gaming-related products.
                </p>
                <div className="socials" aria-label="social links">
                  <span>f</span>
                  <span>x</span>
                  <span>in</span>
                  <span>gh</span>
                </div>
                <p>See our reviews on * Trustpilot</p>
                <div className="nvidia-box">NVIDIA Inception Program</div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
