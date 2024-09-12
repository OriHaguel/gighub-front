import alexImg from '../assets/img/alex-img.png'
import orImg from '../assets/img/or-img.png'
import oriImg from '../assets/img/ori-img.png'

export function AboutPage() {
	return (
		<section className='about-page'>
			<div className='about-content'>
				<h1>
					Welcome to gighub<span className='tm'>™</span>!
				</h1>
				<div className='description'>
					<h2>
						About gighub<span className='tm'>™</span>
					</h2>
					<p>
						gighub<span className='tm'>™</span> is a dynamic platform designed to connect freelancers with clients, offering a streamlined experience for managing gigs and projects. Our app combines powerful tools for both freelancers and clients to enhance productivity and collaboration.
					</p>
				</div>
				<div className='features'>
					<h2>Main Features</h2>
					<ul>
						<li>
							<h3>Freelancer Tools:</h3>
							<ul className='inner-list'>
								<li>Create and manage gig listings with ease.</li>
								<li>Track project progress and communicate with clients through integrated messaging.</li>
								<li>Receive payments securely and manage your earnings effortlessly.</li>
							</ul>
						</li>
						<li>
							<h3>Client Tools:</h3>
							<ul className='inner-list'>
								<li>Browse and hire freelancers based on skills and project requirements.</li>
								<li>Provide detailed project briefs and track freelancer performance.</li>
								<li>Manage project milestones and payments through a user-friendly interface.</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className='user-experience'>
					<h2>User Experience</h2>
					<p>
						gighub<span className='tm'>™</span> delivers a seamless user experience by integrating tools for both freelancers and clients. Users can easily navigate between finding and hiring freelancers or managing and completing gigs, all within a single platform.
					</p>
				</div>
				<div className='conclusion'>
					<h2>Conclusion</h2>
					<p>
						gighub<span className='tm'>™</span> aims to revolutionize the way freelancers and clients connect and collaborate by offering a comprehensive platform that combines project management, communication, and payment solutions. Whether you're a freelancer seeking new opportunities or a client looking for top talent,gighub<span className='tm'>™</span> provides the tools necessary to streamline your workflow and achieve your goals.
					</p>
				</div>
				<div className='team'>
					<h1>Our Team:</h1>
					{/* <p>Or Kravitz,Ori Hagul,Alex Larionov</p> */}
					<div className='team-mate'>
						<img className='team-mate-img' src={alexImg} alt='Alex-Image' />
						<p>
							<span className='team-mate-dot'>•</span>
							Alex Larionov
						</p>
					</div>
					<div className='team-mate'>
						<img className='team-mate-img' src={orImg} alt='Or-Image' />
						<p>
							<span className='team-mate-dot'>•</span>
							Or Kravitz
						</p>
					</div>
					<div className='team-mate'>
						<img className='team-mate-img' src={oriImg} alt='Ori-Image' />
						<p>
							<span className='team-mate-dot'>•</span>
							Ori Haguel
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
