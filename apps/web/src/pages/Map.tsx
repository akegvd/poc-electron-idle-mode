const Map = () => {
  return (
    <div className="map-page">
      <h2>Interactive Map</h2>
      <div className="map-container">
        <iframe
          width="800"
          height="600"
          src="https://www.youtube.com/embed/x0l7lRPWljY?si=MLApNgjZFwF4zoi4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Map;

// Add styles to index.css or create a new Map.css
const styles = `
.map-page {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.map-page h2 {
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.map-container {
  margin-top: 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  background-color: #2d2d2d;
  padding: 10px;
}

.map-container iframe {
  display: block;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
