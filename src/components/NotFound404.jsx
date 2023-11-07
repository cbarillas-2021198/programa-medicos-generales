



export const NotFound404 = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1 text-notFound">404</h1>
            <h1 className="mb-4 text-notFound">Página no encontrada</h1>
            <p className="mb-4">
              Lo sentimos, ¡la página que has buscado no existe en nuestro sitio
              web! ¿Quizás ir a nuestra página de inicio o intentar utilizar una
              búsqueda?
            </p>
            <a
              className="btn btn-primary rounded-pill py-3 px-5 btn-notFound"
              href="/"
            >
              Regresa a la pagina principal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
