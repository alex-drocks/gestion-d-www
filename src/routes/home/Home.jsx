import React from "react";

// Components
// import LazyImage from "../../Components/LazyImage/LazyImage";

// Images...
// import previewResultats from "../../images/10_previewResultats.webp";


export default function Home() {

  return (
    <div className="route-container">

      <section id="accueil">
        <h1>Le logiciel de facturation et tenue de livres simplifié pour les Québécois.</h1>

        <h2 className={"spacer"}>
          Avantages pour votre facturation avec <span className="no-wrap">Finance D:</span>
        </h2>
        <p>
          En équilibrant efficacité et facilité,
          le logiciel <span className="no-wrap"> Finance D</span>,
          vous aide à mieux facturer vos clients
          et à bien suivre la réception des paiements qui vous sont dus.
        </p>
      </section>

    </div>
  )
}