const Download = () => {
  return (
    <div className="download-page">
      <h2>Download Section</h2>
      <div className="download-content">
        <p>Here you can find all downloadable resources.</p>
        <div className="download-buttons">
          <button className="download-btn">Download Resource 1</button>
          <button className="download-btn">Download Resource 2</button>
          <button className="download-btn">Download Resource 3</button>
        </div>
      </div>
    </div>
  );
};

export default Download;

// Add styles
const styles = `
.download-page {
  width: 100%;
  max-width: 800px;
}

.download-content {
  background-color: #1a1a1a;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.download-content h2 {
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.download-content p {
  color: #b0b0b0;
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;
}

.download-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.download-btn {
  padding: 15px 30px;
  background: linear-gradient(135deg, #646cff 0%, #4c51bf 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #4c51bf 0%, #646cff 100%);
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
