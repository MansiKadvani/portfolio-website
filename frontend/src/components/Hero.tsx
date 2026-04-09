import { useEffect, useState } from "react";
import { getHero } from "../services/api";

export default function Hero() {

  const [hero, setHero] = useState<any>(null);

  useEffect(() => {
    getHero().then(data => setHero(data));
  }, []);

  if (!hero) return <p>Loading...</p>;

  return (
    <section id="hero" className="hero">

      <div className="hero-left">
        <h1>Hi, I'm <span>{hero.name}</span></h1>
        <h3>{hero.title}</h3>
        <p>{hero.description}</p>
        <div className="hero-buttons">
          <button className="btn primary">Hire Me</button>
          <button className="btn secondary">Let's Talk</button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="hero.png"
          alt="developer"
        />
      </div>

    </section>
  );
}