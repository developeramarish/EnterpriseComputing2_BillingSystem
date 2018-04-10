<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ScotiaLogin.aspx.cs" Inherits="EC2_FinalProject.ScotiaLogin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
	<head id="j_idt3">
		<title>Scotia OnLine</title>
		<link href="content/bootstrap.css" rel="stylesheet" type="text/css">
		<link href="content/bootstrap-theme.css" rel="stylesheet" type="text/css">
		<link href="content/bootstrap-datepicker.css" rel="stylesheet" type="text/css">
		<link href="content/font-awesome.css" rel="stylesheet" type="text/css">
		<link href="content/B2ELab-RUIFW.css" rel="stylesheet" type="text/css">
		<link href="content/B2ELab-RUIFW-static.css" rel="stylesheet" type="text/css">
		<link href="content/bootstrap-slider.css" rel="stylesheet" type="text/css">
		<link href="content/desktop.css" type="text/css" rel="stylesheet">
		<link href="content/signon.css" type="text/css" rel="stylesheet">
		<link href="content/print.css" type="text/css" rel="stylesheet">
		<link href="images/scotiabank.ico" rel="shortcut icon">
        
	</head>
	<body data-gr-c-s-loaded="true">
		<div class="RUIFW-page-wrap">
			<header class="RUIFW-container-header" role="navigation">
				<div id="header" class="RUIFW-page-header">
					<h1 class="RUIFW-brand RUIFW-col-6 col-sm-6">
					<span class="RUIFW-sr sr-only sr-only">Scotiabank Group</span>
					</h1>
					<div class="RUIFW-col-6 headTopLinks col-sm-6">
						<form id="header_links_form" name="header_links_form" method="post" >
							<a href="#" id="tcSwitch">Terms and Conditions</a>
						</form>
						<a href="#">Contact Us</a>
						<a href="#">Accessibility</a>
					</div>
				</div>
				<div class="RUIFW-bg-bar hidden-xs">
					<div class="RUIFW-bg-main-nav"></div>
				</div>
				<nav class="RUIFW-container-nav-main">
					<ul class="RUIFW-nav-main nav navbar-nav nav navbar-nav">
						<li class="" id=""></li>
					</ul>
				</nav>
			</header>
			<section id="RUIFW-main-content" class="RUIFW-container-main" tabindex="-1">
				<div id="messages" class="success-msg"></div>
				<div id="messages01" class="success-msg"></div>
				<div id="content_block">
					<form id="contentForm" name="contentForm">
						<h1 class="RUIFW-col-9 col-sm-9">Sign In to Scotia OnLine (Jamaica)</h1>
						<div class="RUIFW-content-main RUIFW-col-9 col-md-9 col-sm-9">
							<div class="wizard-form-content wrapfrom">
								<div class="RUIFW-row row">
									<div class="RUIFW-col-6 vertical-separator col-sm-6">
										<div class="RUIFW-row row">
											<div class="RUIFW-col-12 col-sm-12 col-sm-12">
												
												<label id="contentForm:scotiacard_SG">ScotiaCard number</label>
												<input id="contentForm:nscard" type="text" name="contentForm:nscard" autocomplete="off" value="" class="RUIFW-form-el RUIFW-input-lg form-control form-control" maxlength="16" size="16">
												<fieldset class="RUIFW-inline">
													<span class="checkbox">
														<input id="contentForm:remember" type="checkbox" name="contentForm:remember">
														<label for="contentForm:remember">Remember my card (Optional)</label>
													</span>
													<br>(Not advised for public computers)
												</fieldset>
												
												<div class="RUIFW-input-lg"></div>
											</div>
										</div>
										<br>
										<div class="RUIFW-row row">
											<div class="RUIFW-col-12 col-sm-12"><label>Password:</label>
											<div id="contentForm:pwField" class="RUIFW-input-lg">
												<input id="contentForm:pwdnMasked" type="password" name="contentForm:pwdnMasked" autocomplete="off" value="" maxlength="16" size="16" class="RUIFW-form-el form-control">
											</div>
										</div>
									</div>
								</div>
								<div class="RUIFW-col-6 col-sm-6">
									<div class="RUIFW-row row">
										<div class="RUIFW-col-12 col-sm-12">
											<span id="contentForm:newToScotiaWeb">New to Scotia OnLine?</span>
											<br>
											<a id="contentForm:activate" href="#">Enroll now</a>
										</div>
									</div>
									<div class="RUIFW-row row">
										<div class="RUIFW-col-12 col-sm-12">
											<span id="contentForm:forgotPassword">Forgot your password?</span>
											<br><a id="contentForm:forgottenPassword" href="#">Reset now</a>
										</div>
									</div>
								</div>
							</div>
							<div class="clear"></div>
							<br>
							<div class="btn-holder">
								<a id="contentForm:signIn" href="#" class="RUIFW-btn-primary btn btn-primary" onclick="">
									<span class="icon-lock padd-rt-3px"></span> Sign In</a>
								</div>
							</div>
							<span class="gap"></span>
						</div>
					</form>
				</div>
				<div class="RUIFW-content-side RUIFW-col-3 col-md-3 col-sm-3" id="default_page_content_right_sideid">
					<span id="rightSideContent">
						<div class="right-box">
							<div class="exp-collapse">
								<h4>
								<a href="javascript:undefined;" class="Open">Security Guarantee</a>
								</h4>
							</div>
							<div id="scotia_security" class="RUIFW-container-well fade right-box-item-holder in" aria-hidden="false">
								<ul class="right-box-item">
									<li class="rightbox-icon-lock">
										<span>We're committed to keeping your financial information safe and secure.</span>
									</li>
									<li class="more-link"><a href="#" title="Learn More">Learn More</a>
									</li>
								</ul>
							</div>
						</div>
						<div id="help_section_div" class="right-box">
							<div class="exp-collapse">
								<h4><a href="#" class="">Need Help?</a></h4>
							</div>
							<div id="help_section" class="RUIFW-hide RUIFW-container-well fade right-box-item-holder" aria-hidden="true">
								<ul class="right-box-item">
									<li>
										<a href="#" title="Help with this page">Help with this page</a>
									</li>
									<li class="rightbox-icon-video">
										<a href="#" title="How-to video">How-to video</a>
									</li>
								</ul>
							</div>
						</div>
					
						<div class="right-box noprint">
							<div class="exp-collapse">
								<h4><a href="#">Contact Us</a></h4>
							</div>
							<div id="contact_us" class="RUIFW-hide RUIFW-container-well fade right-box-item-holder" aria-hidden="true">
								<ul class="right-box-item">
									<li class="rightbox-icon-phone">
										<span>Call us at (876) 960-2675 or Toll free 1-888-472-6842</span>
									</li>
									<li class="rightbox-icon-comment">
										<a id="general_feedback_rhs_link" title="General Feedback" href="#" aria-hidden="false">General Feedback</a>
									</li>
									<li class="more-link">
										<a title="More" href="#" aria-hidden="false">More</a>
									</li>
								</ul>
							</div>
						</div>
					</span>
				</div>		
			</section>
		</div>
		<footer class="RUIFW-page-footer">
			<div class="footer-icons" id="footerImage">
				<div class="clear"></div>
			</div>
			<div class="RUIFW-row noprint row-margin row">
				<ul class="RUIFW-nav-footer RUIFW-col-8 col-sm-8">
					<div id="footerLinks">
						<li><a href="#">Legal</a></li>
						<li class="separator">&nbsp;</li>
						<li><a href="#">Privacy</a></li>
						<li class="separator">&nbsp;</li>
						<li><a href="#">Security</a></li>
						<li class="separator">&nbsp;</li>
						<li><a href="#">Contact Us</a></li>
						<li class="separator">&nbsp;</li>
						<li><a href="#">FATCA</a></li>
					</div>
				</ul>
				<ul class=" RUIFW-nav-footer RUIFW-col-4 col-sm-4">
					<li class="copyright">
						© 2018 Scotiabank.com All Rights Reserved
					</li>
				</ul>
			</div>
		</footer>	
	</body>
</html>

