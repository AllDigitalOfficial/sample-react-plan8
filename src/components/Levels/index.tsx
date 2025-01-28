
const Levels = () => {
  // Get environment variable values
  const sectionBgColor =
    import.meta.env.VITE_APP_LEVELS_SECTION_BG_COLOR || "#FFFFFF0B";
  const titleColor = import.meta.env.VITE_APP_LEVELS_TITLE_COLOR || "#000000";
  const cardBgColor = import.meta.env.VITE_APP_LEVEL_CARD_BG_COLOR || "#FFFFFF33";
  const cardTextColor =
    import.meta.env.VITE_APP_LEVEL_CARD_TEXT_COLOR || "#ffffff";
  const percentageColor =
    import.meta.env.VITE_APP_LEVEL_PERCENTAGE_COLOR || "#FFFF00FF";

  return (
    <section
      className="user-details-wrapper py-5"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="container">
        <h2 className="mb-4" style={{ color: '#A9A9A9FF' }}>
          Levels :
        </h2>
        <div className="row">
          {Array.from({ length: 10 }, (_, index) => {
            const level = index + 1;
            const percentage = level === 1 ? "6%" : level === 2 ? "3%" : level === 3 ? "2%" : level === 4 ? "1%" :"0.5%";

            return (
              <div key={level} className="col-md-1 col-lg-2 mb-3">
                <div
                  className="card shadow-sm p-2.8"
                  style={{
                    backgroundColor: cardBgColor,
                    color: cardTextColor,
                  }}
                >
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span>Level {level}</span>
                      <em
                        style={{
                          color: percentageColor,
                        }}
                      >
                        {percentage}
                      </em>
                    </div>
                    <h3 id={`level-${level}`} className="text-center">
                      0
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Levels;
