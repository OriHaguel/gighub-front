import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import StarIcon from '../assets/svg/StarIcon.svg?react'

// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'

// TODO: handle external data
// TODO: dynamic star icons

export function GigDetails() {
	return (
		<div id='root'>
			<div className='main-layout base-layout'>
				<main className='main-layout full'>
					<main className='gig-details-main full main-layout '>
						<section className='gig-details-content'>
							<article className='gig-details-container'>
								<h1></h1>
								<div className='main-details-container'>
									<div className='user-round-img'>
										<img src='https://res.cloudinary.com/dlhjvt9b4/image/upload/v1685815583/gigs/p0m9qj1qvh0zoou6lmhk.png' alt='' className='details-owner-img' />
									</div>
									<div className='details-wrapper'>
										<h2>wp_corporative</h2>
										<p className='gig-email'>@wp_corporative</p>
										<p className='gig-level'>
											Level basic <span>|</span>
										</p>
										<div className='gig-starRate'>
											<div className='stars-container'>
												{/* TODO: create new comp to display stars */}
												<StarIcon />
												<StarIcon />
												<StarIcon />
												<StarIcon />
												<StarIcon />
											</div>
											<div className='owner-rate'>
												5 <span>(116)</span>
											</div>
										</div>
										<p className='gig-orders'>14 Orders in Queue</p>
									</div>
								</div>
								<div className='carousel-wrapper'>
									<div className='navigation-wrapper'>
										<div className='keen-slider'>
											<div className='keen-slider__slide' style='min-width: 812.867px; max-width: 812.867px; transform: translate3d(0px, 0px, 0px);'>
												<img src='https://res.cloudinary.com/dlhjvt9b4/image/upload/v1685816071/gigs/uea1jxqnzlqmvhivrzmg.png' />
											</div>
											<div className='keen-slider__slide' style='min-width: 812.867px; max-width: 812.867px; transform: translate3d(0px, 0px, 0px);'>
												<img src='https://res.cloudinary.com/dlhjvt9b4/image/upload/v1685816106/gigs/ou0iiawj8ahazwo5lxax.png' />
											</div>
											<div className='keen-slider__slide' style='min-width: 812.867px; max-width: 812.867px; transform: translate3d(0px, 0px, 0px);'>
												<img src='https://res.cloudinary.com/dlhjvt9b4/image/upload/v1685816175/gigs/z6i5gjsrltbvxhpzccdq.jpg' />
											</div>
										</div>
										<div className='details-arrow arrow arrow--left' style='scale: 1.5;'>
											<svg width='8' height='15' viewBox='0 0 8 15' xmlns='http://www.w3.org/2000/svg'>
												<path d='M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z'></path>
											</svg>
										</div>
										<div className='details-arrow arrow arrow--right' style='scale: 1.5;'>
											<svg width='8' height='16' viewBox='0 0 8 16' xmlns='http://www.w3.org/2000/svg'>
												<path d='M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z'></path>
											</svg>
										</div>
									</div>
									<div className='keen-slider thumbnail'>
										<div className='keen-slider__slide active' style='min-width: 109.267px; max-width: 109.267px; transform: translate3d(0px, 0px, 0px);'>
											<img src='https://res.cloudinary.com/dlhjvt9b4/image/upload/v1685816071/gigs/uea1jxqnzlqmvhivrzmg.png' />
										</div>
										<div className='keen-slider__slide' style='min-width: 109.267px; max-width: 109.267px; transform: translate3d(8px, 0px, 0px);'>
											<img src='https://res.cloudinary.com/dlhjvt9b4/image/upload/v1685816106/gigs/ou0iiawj8ahazwo5lxax.png' />
										</div>
										<div className='keen-slider__slide' style='min-width: 109.267px; max-width: 109.267px; transform: translate3d(16px, 0px, 0px);'>
											<img src='https://res.cloudinary.com/dlhjvt9b4/image/upload/v1685816175/gigs/z6i5gjsrltbvxhpzccdq.jpg' />
										</div>
									</div>
								</div>
							</article>
							<aside className='pricing-container'>
								<section className='pricing-package'>
									<nav>
										<a aria-current='page' className='active' href='/gig/64834818525333284e0d17b9'>
											Pricing
										</a>
									</nav>
									<section className='pricing-details'>
										<h1>US$80</h1>
										<p>We charge just after the seller finished the project</p>
										<div className='brand-fundamental-container'>
											<p>
												Brand Fundamentals: <span> I will build professional wordpress website design and e-commerce website</span>
											</p>
										</div>
										<div className='delivery-info-container'>
											<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
												<path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z'></path>
												<path d='M9 4H7v5h5V7H9V4z'></path>
											</svg>
											<p className='delivery-days-item'>1 Days Delivery</p>
											<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
												<path d='M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z'></path>
												<path d='M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z'></path>
											</svg>
											<p className='unlimited-revision-element'>Unlimited Revision</p>
										</div>
										<div className='collapsible-container'>
											<h4>What's included</h4>
											<div className='collapsible-content'>
												<ul>
													<li>
														<span>
															<svg width='16' height='16' viewBox='0 0 16 12' xmlns='http://www.w3.org/2000/svg'>
																<path d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'></path>
															</svg>
														</span>
														Vector file
													</li>
													<li>
														<span>
															<svg width='16' height='16' viewBox='0 0 16 12' xmlns='http://www.w3.org/2000/svg'>
																<path d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'></path>
															</svg>
														</span>
														One concept included
													</li>
													<li>
														<span>
															<svg width='16' height='16' viewBox='0 0 16 12' xmlns='http://www.w3.org/2000/svg'>
																<path d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'></path>
															</svg>
														</span>
														Include source file
													</li>
													<li>
														<span>
															<svg width='16' height='16' viewBox='0 0 16 12' xmlns='http://www.w3.org/2000/svg'>
																<path d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'></path>
															</svg>
														</span>
														Progress update
													</li>
													<li>
														<span>
															<svg width='16' height='16' viewBox='0 0 16 12' xmlns='http://www.w3.org/2000/svg'>
																<path d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'></path>
															</svg>
														</span>
														Printable file
													</li>
												</ul>
											</div>
										</div>
										<button className='btn-continue'>Continue</button>
									</section>
								</section>
							</aside>
							<article className='about-gig-container'>
								<h3>About this gig</h3>
								<p>
									About this gig Do you feel that more than 80% of big business proprietors like to induce WordPress website design fo their enterprises. This is due to WordPress simplicity through a simple admin panel and managing thousands of new accounts effortlessly.I've been delivering web services to multiple businesses across the globe for the last 5 years and I'll deliver a complete one window result to your online presence. Why should you choose us? We've accomplished crew who are capable to deliver 100% satisfaction with solitary WordPress website designs for your old or new sites. We do Customized WordPress website that represent your company Fully Responsiveness Speed-optimized Simple to handle Eye Catching Layout Full e-commerce capabilities After Sale Services SSL Installation Payment GatewayGoogle Map We Design: E-Commerce website Personal site Portfolio Business Education Health News IT Industry Public Sectors And Many More What Do We Need From You? Log in for your
									WordPress admin panel Complete Content/Logo Web Design Reference/Inspiration Site *Note: We will be very happy to assist you, please feel free to contact.
								</p>
							</article>
							<article className='about-seller-container'>
								<section className='about-the-seller'>
									<h1 className='about-seller-header'>About the seller</h1>
									<section>
										<div className='seller-professional-info-wrapper'>
											<div className='about-seller-img'>
												<img src='https://res.cloudinary.com/dlhjvt9b4/image/upload/v1685815583/gigs/p0m9qj1qvh0zoou6lmhk.png' alt='owner-img' classNameName='details-owner-img' />
											</div>
											<div className='seller-details-wrapper'>
												<div className='seller-name-email-wrapper'>
													<h2>wp_corporative</h2>
													<p className='about-gig-email'>@wp_corporative</p>
												</div>
												<div className='seller-profession-rating-wrapper'>
													<p className='seller-profession'>Landscape designer</p>
													<div className='rating-wrapper'>
														<div className='stars-container'>
															<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
																<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
															</svg>
															<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
																<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
															</svg>
															<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
																<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
															</svg>
															<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
																<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
															</svg>
															<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
																<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
															</svg>
														</div>
														<p>
															<span>5</span> (204)
														</p>
													</div>
												</div>
												<button className='contect-seller-btn'>Contact me</button>
											</div>
										</div>
										<div className='seller-personal-info-wrapper'>
											<div className='seller-short-info-wrapper'>
												<div>
													From<span>Canada</span>
												</div>
												<div>
													Member since<span>Oct 2019</span>
												</div>
												<div>
													Languages<span>English</span>
												</div>
											</div>
											<div className='seller-about'>
												<p>I've been delivering web services to multiple businesses across the globe for the last 5 years and I'll deliver a complete one window result to your online presence. Why should you choose us? We've accomplished crew who are capable to deliver 100% satisfaction with solitary WordPress website designs for your old or new sites. We do Customized WordPress website that represent your company Fully Responsiveness Speed-optimized Simple to handle Eye Catching Layout Full e-commerece capabilities After Sale Services SSL Installation Payment GatewayGoogle Map We Design: E-Commerce website Personal site Portfolio Business Education Health News IT Industry Public Sectors And Many More What Do We Need from You? Log in for your WordPress admin panel Complete Content/Logo Web Design Reference/Inspiration Site *Note: We will be very happy to assist you, please feel free to contact.</p>
											</div>
										</div>
									</section>
								</section>
							</article>
							<article className='gig-review'>
								<section className='review-list'>
									<h1>Reviews</h1>
									<div className='review-bars'>
										<div className='stars-top'>
											20 reviews for this Gig
											<div className='rating'>
												<div className='stars-container'>
													<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
														<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
													</svg>
													<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
														<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
													</svg>
													<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
														<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
													</svg>
													<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
														<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
													</svg>
													<svg width='17' height='17' viewBox='173.637 309.882 16.391 16.472' xmlns='http://www.w3.org/2000/svg'>
														<path fill-rule='evenodd' fill='#ffb33e' clip-rule='evenodd' d='M 189.735 316.246 C 189.735 316.416 189.61 316.577 189.485 316.7 L 185.995 320.046 L 186.822 324.772 C 186.832 324.838 186.832 324.895 186.832 324.961 C 186.832 325.207 186.716 325.433 186.437 325.433 C 186.303 325.433 186.168 325.386 186.053 325.32 L 181.735 323.089 L 177.418 325.32 C 177.293 325.386 177.168 325.433 177.033 325.433 C 176.755 325.433 176.63 325.207 176.63 324.961 C 176.63 324.895 176.639 324.838 176.649 324.772 L 177.476 320.046 L 173.976 316.7 C 173.86 316.577 173.735 316.416 173.735 316.246 C 173.735 315.963 174.033 315.849 174.274 315.811 L 179.101 315.122 L 181.264 310.821 C 181.351 310.641 181.514 310.433 181.735 310.433 C 181.957 310.433 182.12 310.641 182.207 310.821 L 184.37 315.122 L 189.197 315.811 C 189.428 315.849 189.735 315.963 189.735 316.246 Z' style='--darkreader-inline-fill: #ffb645;' data-darkreader-inline-fill=''></path>
													</svg>
												</div>{' '}
												4.9
											</div>
										</div>
										<div className='stars'>
											<div className='stars-bar'>
												<div className='rate'>5 Stars</div>
												<div className='MuiBox-root css-12xgboo'>
													<span className='MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-qm5ucc' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>
														<span className='MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm' style='transform: translateX(-10%);'></span>
													</span>
												</div>
												<div className='score'>(18)</div>
											</div>
											<div className='stars-bar'>
												<div className='rate'>4 Stars</div>
												<div className='MuiBox-root css-12xgboo'>
													<span className='MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-qm5ucc' role='progressbar' aria-valuenow='10' aria-valuemin='0' aria-valuemax='100'>
														<span className='MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm' style='transform: translateX(-90%);'></span>
													</span>
												</div>
												<div className='score'>(2)</div>
											</div>
											<div className='stars-bar'>
												<div className='rate'>3 Stars</div>
												<div className='MuiBox-root css-12xgboo'>
													<span className='MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-qm5ucc' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'>
														<span className='MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm' style='transform: translateX(-100%);'></span>
													</span>
												</div>
												<div className='score'>(0)</div>
											</div>
											<div className='stars-bar'>
												<div className='rate'>2 Stars</div>
												<div className='MuiBox-root css-12xgboo'>
													<span className='MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-qm5ucc' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'>
														<span className='MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm' style='transform: translateX(-100%);'></span>
													</span>
												</div>
												<div className='score'>(0)</div>
											</div>
											<div className='stars-bar'>
												<div className='rate'>1 Star</div>
												<div className='MuiBox-root css-12xgboo'>
													<span className='MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-qm5ucc' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'>
														<span className='MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm' style='transform: translateX(-100%);'></span>
													</span>
												</div>
												<div className='score'>(0)</div>
											</div>
										</div>
									</div>
									<div className='review-list'> No reviews yet.. be the 1st to add a review!</div>
									<section className='review-list-container'></section>
								</section>
							</article>
							<section className='shopping-cart'>
								<div className='cart-header'>
									<h2>Order summery</h2>
									<svg width='16' height='16' viewBox='0 0 11 10' xmlns='http://www.w3.org/2000/svg'>
										<path d='M7.21548 5L10.5817 1.63375C10.7764 1.43906 10.7764 1.12313 10.5817 0.928127L9.79954 0.145939C9.60485 -0.0487482 9.28891 -0.0487482 9.09391 0.145939L5.72798 3.5125L2.36173 0.146252C2.16704 -0.0484356 1.8511 -0.0484356 1.6561 0.146252L0.874226 0.928127C0.679539 1.12281 0.679539 1.43875 0.874226 1.63375L4.24048 5L0.874226 8.36625C0.679539 8.56094 0.679539 8.87687 0.874226 9.07187L1.65641 9.85406C1.8511 10.0487 2.16704 10.0487 2.36204 9.85406L5.72798 6.4875L9.09423 9.85375C9.28891 10.0484 9.60485 10.0484 9.79985 9.85375L10.582 9.07156C10.7767 8.87688 10.7767 8.56094 10.582 8.36594L7.21548 5Z'></path>
									</svg>
								</div>
								<section className='purchase-details'>
									<div className='basic-information'>
										<h1>Basic information</h1>
										<p>
											<span>Description:</span> I will build professional wordpress website design and e-commerece website
										</p>
										<p>
											<span>Price for single order</span> $80
										</p>
									</div>
									<article className='total-order-wrapper'>
										<p>
											<span>$80</span>
										</p>
										<p>For single order</p>
										<div className='delivery-info-container'>
											<div>
												<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
													<path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z'></path>
													<path d='M9 4H7v5h5V7H9V4z'></path>
												</svg>
												<p className='delivery-days-item'>1 Days Delivery</p>
											</div>
											<div>
												<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
													<path d='M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z'></path>
													<path d='M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z'></path>
												</svg>
												<p className='unlimited-revision-element'>Unlimited Revision</p>
											</div>
										</div>
									</article>
									<div className='pricing-footer'>
										<a href='/payment/64834818525333284e0d17b9'>
											<button className='btn-continue-purchase'>Continue ($80)</button>
										</a>
										<p className='not-charging'>You won't be charged yet</p>
									</div>
								</section>
							</section>
							<div className='main-screen '></div>
						</section>
					</main>
				</main>
			</div>
		</div>
	)
}
