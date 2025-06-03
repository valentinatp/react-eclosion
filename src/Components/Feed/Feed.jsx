
import { useState } from 'react';
import './feed-style.css';
import { Link } from 'react-router-dom';

function Feed() {
  const [liked, setLiked] = useState([false, false]);

  const handleLike = (index) => {
    setLiked((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
        <>
            {/* Contenido de pagina */}
            <br />
            <main className="container-fluid">
                <h1 className="text-center">Noticias compartidas</h1>
                <br />
                <section>
                    <div className="row">
                        <div className="col">
                            {/*card 1*/}
                            <div className="card mb-4 card-feed">
                                {/*Perfil usuario*/}
                                <nav className="navbar bg-body-tertiary-perfil">
                                    <div className="container-fluid">
                                        <a className="navbar-brand d-flex align-items-center">
                                            <img
                                                src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2024/04/cropped-LogoCBpng.png"
                                                alt="Logo"
                                                style={{ height: 40, width: 40, objectFit: "cover" }}
                                                className="d-inline-block align-text-top me-2"
                                            />
                                            <span style={{ color: "#284D5D" }}>
                                                Científicos de la Basura
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                                <img
                                    src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2025/02/Image-3-768x509.jpg"
                                    className="card-img-top"
                                    alt="De donde vienen las botellas encontradas?"
                                />
                                <div className="card-body-feed">
                                    <h5 className="card-title">
                                        ¿De dónde vienen las botellas plásticas encontradas en las
                                        playas del océano Pacífico?
                                    </h5>
                                    <br />
                                    <p>18/04/2025</p>
                                    <p className="card-text">
                                        El 59% de las botellas recolectadas tienen origen local, lo que
                                        subraya la urgencia de reducir plásticos desechables y fomentar
                                        el uso de envases retornables estandarizados o de vidrio
                                        reutilizables...{" "}
                                        <a href="https://cientificosdelabasura.ucn.cl/de-donde-vienen-las-botellas-plasticas-encontradas-en-las-playas-del-oceano-pacifico-y-en-ciudades-latinoamericanas/">
                                            Seguir leyendo
                                        </a>
                                    </p>
                                    <div className="btn-group-feed">
                                        <button
                                            type="button"
                                            className={`btn btn-outline-danger like-btn${liked[0] ? " btn-liked" : ""}`}
                                            onClick={() => handleLike(0)}
                                        >
                                            <i className={`bi ${liked[0] ? "bi-heart-fill" : "bi-heart"}`} />
                                        </button>
                                        <button type="button" className="btn btn-outline-danger">
                                            <i className="bi bi-chat-dots" />
                                        </button>
                                        <button type="button" className="btn btn-outline-danger">
                                            <i className="bi bi-send" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {/*card 2*/}
                            <div className="card mb-4 card-feed">
                                {/*Perfil usuario*/}
                                <nav className="navbar bg-body-tertiary-perfil">
                                    <div className="container-fluid">
                                        <a className="navbar-brand d-flex align-items-center">
                                            <img
                                                src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2024/04/cropped-LogoCBpng.png"
                                                alt="Logo"
                                                style={{ height: 40, width: 40, objectFit: "cover" }}
                                                className="d-inline-block align-text-top me-2"
                                            />
                                            <span style={{ color: "#284D5D" }}>
                                                Científicos de la Basura
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                                <img
                                    src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2023/02/WhatsApp-Image-2022-07-25-at-12.21.48-PM.jpeg"
                                    className="card-img-top"
                                    alt="Primer streaming público y gratuito de imágenes submarinas de Chile"
                                />
                                <div className="card-body-feed">
                                    <h5 className="card-title">
                                        Primer streaming público y gratuito de imágenes submarinas de
                                        Chile transmitirá desde Coquimbo
                                    </h5>
                                    <br />
                                    <p>18/04/2025</p>
                                    <p className="card-text">
                                        Chile tiene una de las costas más largas del mundo, con fauna
                                        marina diversa y endémica. Ahora se puede ver la vida submarina
                                        desde cualquier lugar gracias a una cámara en el fondo de
                                        Coquimbo...{" "}
                                        <a href="https://cientificosdelabasura.ucn.cl/primer-streaming-publico-y-gratuito-de-imagenes-submarinas-de-chile-transmitira-desde-coquimbo/">
                                            Seguir leyendo
                                        </a>
                                    </p>
                                    <div className="btn-group-feed">
                                        <button
                                            type="button"
                                            className={`btn btn-outline-danger like-btn${liked[1] ? " btn-liked" : ""}`}
                                            onClick={() => handleLike(1)}
                                        >
                                            <i className={`bi ${liked[1] ? "bi-heart-fill" : "bi-heart"}`} />
                                        </button>
                                        <button type="button" className="btn btn-outline-danger">
                                            <i className="bi bi-chat-dots" />
                                        </button>
                                        <button type="button" className="btn btn-outline-danger">
                                            <i className="bi bi-send" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Feed;



