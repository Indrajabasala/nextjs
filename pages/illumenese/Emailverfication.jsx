import React from 'react' 

function Emailverfication() {

    return(
        <>
        <section className="login-gradient-bg">
	<div className="login-details-white-card">
		<div className="login-white-card-left-details">
			<div className="login-logo">
				<img src="images/login/logo.png" alt="login LOGO"/>
			</div>
			<div className="patientregistrationtext login-text">
				<h2>Resend Email Verfication Link</h2>
			</div>
			<div className="emailverficationform patientregistrationform login-form">
				<form>
					<div className="custom-form-group form-group  input-space-68">
						<input className="input-field" type="text" placeholder="Email" name="email"/>
						<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M26 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H26C26.5304 20 27.0391 19.7893 27.4142 19.4142C27.7893 19.0391 28 18.5304 28 18V2C28 1.46957 27.7893 0.960859 27.4142 0.585786C27.0391 0.210714 26.5304 0 26 0ZM23.8 2L14 8.78L4.2 2H23.8ZM2 18V2.91L13.43 10.82C13.5974 10.9361 13.7963 10.9984 14 10.9984C14.2037 10.9984 14.4026 10.9361 14.57 10.82L26 2.91V18H2Z" fill="#0E7D94"/>
							</svg>
					  </div>
				</form>
				<div className="email-verfication-btn patient-text-btn login-text-btn register-text-btn">
					<a href="login.html" className="primary-button">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15 18.75C15 18.9489 14.921 19.1397 14.7803 19.2803C14.6397 19.421 14.4489 19.5 14.25 19.5H2.25C2.05109 19.5 1.86032 19.421 1.71967 19.2803C1.57902 19.1397 1.5 18.9489 1.5 18.75L1.5 5.25C1.5 5.05109 1.57902 4.86032 1.71967 4.71967C1.86032 4.57902 2.05109 4.5 2.25 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25L15 8.25C15 8.44891 15.079 8.63968 15.2197 8.78033C15.3603 8.92098 15.5511 9 15.75 9C15.9489 9 16.1397 8.92098 16.2803 8.78033C16.421 8.63968 16.5 8.44891 16.5 8.25V5.25C16.5 4.65326 16.2629 4.08097 15.841 3.65901C15.419 3.23705 14.8467 3 14.25 3H2.25C1.65326 3 1.08097 3.23705 0.65901 3.65901C0.237053 4.08097 0 4.65326 0 5.25V18.75C0 19.3467 0.237053 19.919 0.65901 20.341C1.08097 20.7629 1.65326 21 2.25 21H14.25C14.8467 21 15.419 20.7629 15.841 20.341C16.2629 19.919 16.5 19.3467 16.5 18.75V15.75C16.5 15.5511 16.421 15.3603 16.2803 15.2197C16.1397 15.079 15.9489 15 15.75 15C15.5511 15 15.3603 15.079 15.2197 15.2197C15.079 15.3603 15 15.5511 15 15.75V18.75Z" fill="white"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.219 11.469C6.14915 11.5387 6.09374 11.6214 6.05593 11.7125C6.01812 11.8037 5.99866 11.9013 5.99866 12C5.99866 12.0986 6.01812 12.1963 6.05593 12.2874C6.09374 12.3786 6.14915 12.4613 6.219 12.531L10.719 17.031C10.7887 17.1007 10.8715 17.156 10.9626 17.1938C11.0537 17.2315 11.1514 17.2509 11.25 17.2509C11.3486 17.2509 11.4463 17.2315 11.5374 17.1938C11.6285 17.156 11.7113 17.1007 11.781 17.031C11.8507 16.9613 11.906 16.8785 11.9438 16.7874C11.9815 16.6963 12.0009 16.5986 12.0009 16.5C12.0009 16.4014 11.9815 16.3037 11.9438 16.2126C11.906 16.1215 11.8507 16.0387 11.781 15.969L8.5605 12.75H21.75C21.9489 12.75 22.1397 12.671 22.2803 12.5303C22.421 12.3897 22.5 12.1989 22.5 12C22.5 11.8011 22.421 11.6103 22.2803 11.4697C22.1397 11.329 21.9489 11.25 21.75 11.25H8.5605L11.781 8.031C11.8507 7.96127 11.906 7.87848 11.9438 7.78737C11.9815 7.69627 12.0009 7.59861 12.0009 7.5C12.0009 7.40138 11.9815 7.30373 11.9438 7.21262C11.906 7.12151 11.8507 7.03873 11.781 6.969C11.7113 6.89927 11.6285 6.84395 11.5374 6.80621C11.4463 6.76848 11.3486 6.74905 11.25 6.74905C11.1514 6.74905 11.0537 6.76848 10.9626 6.80621C10.8715 6.84395 10.7887 6.89927 10.719 6.969L6.219 11.469Z" fill="white"/>
						</svg>
						Go to Login </a>
					<a className="primary-button">Submit </a>
				</div>
			</div>
		</div>
		<div className="login-white-card-right-details">
			<div id="demo" className="logincarousel carousel slide" data-ride="carousel">

				{/* <!-- Indicators --> */}
				<ul className="carousel-indicators">
				  <li data-target="#demo" data-slide-to="0" className="active"></li>
				  <li data-target="#demo" data-slide-to="1"></li>
				  <li data-target="#demo" data-slide-to="2"></li>
				  <li data-target="#demo" data-slide-to="3"></li>
				</ul>

				{/* <!-- The slideshow --> */}
				<div className="carousel-inner">
					<div className="carousel-item active">
					  <img src="images/login/banner.jpg" alt="banner"/>
					</div>
					<div className="carousel-item">
					  <img src="images/login/banner2.jpg" alt="banner"/>
					</div>
					<div className="carousel-item">
					  <img src="images/login/banner3.jpg" alt="banner"/>
					</div>
					<div className="carousel-item">
					  <img src="images/login/banner4.jpg" alt="banner"/>
					</div>
				  </div>

			  </div>
			  <div className="loginfooter">
				<ul>
					<li><a href="#">About Us </a></li>
					<li><span></span></li>
					<li><a href="#">Contact and Support  </a></li>
					<li><span></span></li>
					<li><a href="#">FAQ </a></li>
					<li><span></span></li>
					<li><a href="#">Terms & Conditions </a></li>
				</ul>
			  </div>
		</div>
	</div>
</section>
        </>

    )
}
export default Emailverfication