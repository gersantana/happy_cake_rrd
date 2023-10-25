import  "./Home.css"
const Home = () => {
	return (
		<div className="home_container">
			<h1>Bienvenidos a <span>Happy Cake</span></h1>
			<p>El lugar de los pasteles felices</p>
            <div className="img_container">
            <img src="https://assets.stickpng.com/images/580b585b2edbce24c47b23de.png" alt="img cake" />
            </div>
		</div>
	);
};

export default Home;
