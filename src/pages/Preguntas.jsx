export const Preguntas = () => {
  const accordionItems = [
    {
      id: "collapseOne",
      title: "Pregunta 1",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam, iusto ipsam explicabo quasi eum voluptatum eligendi obcaecati, error veritatis accusantium a fugit tenetur iure facere dicta? Placeat, facere velit",
    },
    {
      id: "collapseTwo",
      title: "Pregunta 2",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam, iusto ipsam explicabo quasi eum voluptatum eligendi obcaecati, error veritatis accusantium a fugit tenetur iure facere dicta? Placeat, facere velit!",
    },
    {
      id: "collapseThree",
      title: "Pregunta 3",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam, iusto ipsam explicabo quasi eum voluptatum eligendi obcaecati, error veritatis accusantium a fugit tenetur iure facere dicta? Placeat, facere velit",
    },
    // Agrega más elementos de ser necesario
  ];

  return (
    <>
      <div className="page-heading preguntas-frecuentes">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-preguntas">Preguntas Frecuentes</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="preguntas-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row" id="tabs">
                <div className="col-lg-12">
                  <section className="tabs-content">
                    <article id="tabs-1">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="right-content ">
                            <h4>Preguntas Frecuentes</h4>
                            <div
                              className="accordion"
                              id="accordionExample"
                              style={{ width: "100%", height: "100%" }}
                            >
                              {accordionItems.map((item) => (
                                <div className="accordion-item" key={item.id}>
                                  <h2 className="accordion-header">
                                    <button
                                      className="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target={`#${item.id}`}
                                      aria-expanded="false"
                                    >
                                      {item.title}
                                    </button>
                                  </h2>
                                  <div
                                    id={item.id}
                                    className=" collapse "
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      {item.content}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>

            <div className="col-lg-3 contacto-preguntas">
              <div className="contacto-pregunta">
                <h5>Enviar dudas</h5>
                <p>Puedes enviar tus dudas al correo igss@igssgt.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
