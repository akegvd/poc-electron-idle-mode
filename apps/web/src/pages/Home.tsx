const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our App</h1>
      <p>
        This is the home page of our application. Navigate using the buttons
        above.
      </p>
    </div>
  );
};

export default Home;

const styles = `
.home-page {
  width: 100%;
  max-width: 800px;
  padding: 30px;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.home-page h1 {
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.home-page p {
  color: #b0b0b0;
  font-size: 18px;
  line-height: 1.6;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
