import './App.css';

function App() {
	return (
		<main>
			<div className="card">
				<img
					className="card-img"
					src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>

				<div className="card-content">
					<div className="badge">Learning</div>
					<p className="date">Published 21 Dec 2013</p>
					<h1>HTML and CSS foundations</h1>
					<p className="desctiotion">
						These languages are the backbone of every website,
						defining content structure, and presentation
					</p>
					<div className="profile">
						<img src="" alt="" />
						<p>Greg hooper</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;