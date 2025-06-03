import React from 'react'
import { Link } from 'react-router-dom'

const PruebaCards = () => {
  return (
    <>
        {/* Primer carrusel */}
            <main className="container-fluid">
                <section className="container-cards-visibility-mobile">
                    <div className="row">
                        <div className="col">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={0}
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={1}
                                        aria-label="Slide 2"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={2}
                                        aria-label="Slide 3"
                                    />
                                </div>
                                {/* CARDS MOBILE*/}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="container-cards-home card">
                                            <img
                                                src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2025/02/Image-3-768x509.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    ¿De dónde vienen las botellas plásticas encontradas en las
                                                    playas del océano Pacífico?
                                                </h5>
                                                <p className="card-text">
                                                    El 59% de las botellas recolectadas tienen origen local,
                                                    lo que subraya la urgencia de reducir plásticos
                                                    desechables y fomentar el uso de envases retornables
                                                    estandarizados...
                                                </p>
                                                
                                                    <Link className="btn btn-primary" to="/feed"> Link Noticia </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container-cards-home card">
                                            <img
                                                src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2023/02/WhatsApp-Image-2022-07-25-at-12.21.48-PM.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Primer streaming público y gratuito de imágenes submarinas
                                                    de Chile transmitirá desde Coquimbo
                                                </h5>
                                                <p className="card-text">
                                                    Chile tiene una de las costas más largas del mundo, con
                                                    fauna marina diversa y endémica. Ahora se puede ver la
                                                    vida submarina desde cualquier lugar gracias a una cámara
                                                    en el fondo de Coquimbo...
                                                </p>
                                                
                                                    <Link className="btn btn-primary" to="/feed"> Link Noticia </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container-cards-home card">
                                            <img
                                                src="https://services.meteored.com/img/article/las-basuras-de-las-playas-298581-7.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-justify">
                                                    Basura en la playa: Publican resultados de investigación
                                                    de ciencia ciudadana que abarcó 12.000 km de la costa este
                                                    del Pacífico
                                                </h5>
                                                <p className="card-text">
                                                    El estudio determinó que la basura marina en la costa este
                                                    del Pacífico es principalmente de origen local y
                                                    contribuye con una primera base...
                                                </p>
                                                
                                                    <Link className="btn btn-primary" to="/feed"> Link Noticia </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>  
            </main>  
    </>
  );
};

export default PruebaCards
