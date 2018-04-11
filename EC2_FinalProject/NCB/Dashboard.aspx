<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Dashboard.aspx.cs" Inherits="EC2_FinalProject.NCB.Dashboard" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<title>NCB Online - Dashboard</title>
	<link rel="icon" href="https://retail.ncbelink.com/corp/web/L001/images/favicon.ico">
	<link href="../Content/dashboard.css" type="text/css" rel="stylesheet">
	<link href="../Content/dashboard(1).css" type="text/css" rel="stylesheet">
	<link href="../Content/print(1).css" type="text/css" rel="stylesheet" media="print">
	<link href="../Content/print.css" type="text/css" rel="stylesheet" media="print">
    <style type="text/css">
        .auto-style1 {
            font-size: x-large;
        }
    </style>
</head>

<body data-gr-c-s-loaded="true">
	<form id="form1" runat="server">
	<div id="maincontainer">
	    <div id="top">
	        <div id="left"></div>
	             <div id="body">
				    <a href="" id="logo" title="Return to Online Banking Home"></a>

	                <div id="userinfo">
	                	<%--<a href="" class="logout">Logout</a>--%>
                        <asp:HyperLink class="logout" ID="HyperLink1" NavigateUrl="~/Auth_Admin/Admin.aspx" runat="server">Logout</asp:HyperLink>
	                	<span>Welcome, <span class="ucase">FLOW JAMAICA</span></span><br>
	                	<span>Your password expires in 500 days</span><br>
	                	<span>Last Visit: <span class="ucase"> 08/04/18 12:27:14 PM</span></span>
	                </div>
				</div>
	        <div id="right"></div>
	    </div>

		<div class="TopMenu">
			<ul class="dropdown">
				<li class="active"><a href=""><span>Account Summary</span></a>
					<div class="clr"></div>
					<ul class="sub_menu">
						<li><a href="">Bank Accounts</a></li>
						<li><a href="">Credit Cards</a></li>
						<li><a href="">NCB Insurance</a></li>
						<li><a href="">NCB Capital Markets</a></li>
						<li class="bs">
							<div class="bs">
								<div class="left">
									<div class="body"></div>
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li>
					<a href=""><span>Transfer Funds</span></a>
					<div class="clr"></div>
					<ul class="sub_menu">
						<li><a href="">Make A Transfer</a></li>
						<li><a href="">View Completed Transfer</a></li>
						<li><a href="">Stop Scheduled Transfers</a></li>
						<li><a href="">Add Beneficiary</a> </li>
						<li><a href="">Manage Beneficiaries</a></li>
						<li class="bs">
							<div class="bs">
								<div class="left">
									<div class="body"></div>
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li>
					<a href=""><span>Bill Payment</span></a>
					<div class="clr"></div>
					<ul class="sub_menu">
						<li><a href="">Pay Bills</a></li>
						<li><a href="">View Paid Bills</a></li>
						<li><a href="">Add Bill Payee</a></li>
						<li><a href="">Manage Bill Payees</a></li>
					 	<li class="bs">
					 		<div class="bs">
					 			<div class="left">
					 				<div class="body"></div>
					 			</div>
					 		</div>
					 	</li>
					</ul>
				</li>
				<li></li>
				<li>
					<a href=""><span>Messages</span></a>
					<div class="clr"></div>
					<ul class="sub_menu">
						<li><a href="">Inbox</a></li>
						<li><a href="">Compose Message</a></li>
						<li><a href="">Sent Messages</a></li>
						<li><a href="">Trash</a></li>
						<li class="bs">
							<div class="bs">
								<div class="left">
									<div class="body"></div>
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li>
					<a href=""><span>My Profile</span></a>
					<div class="clr"></div>
					<ul class="sub_menu">
						<li><a href="">Change Passwords</a></li>
						<li><a href="">Edit Security Details</a></li>
						<li><a href="">Edit Profile</a></li>
						<li><a href="">Switch Token Type</a></li>
						<li><a href="">RSA Set Pin</a></li>
						<li><a href="">Switch Software Token</a></li>
						<li class="bs">
							<div class="bs">
								<div class="left">
									<div class="body"></div>
								</div>
							</div>
						</li>
					</ul>
				</li>

				<li><a href=""><span>Alerts</span></a>
					<div class="clr"></div>
					<ul class="sub_menu">
						<li><a href="">View Alerts</a></li>
						<li><a href="">Manage Alerts</a></li>
						<li class="bs">
							<div class="bs">
								<div class="left">
									<div class="body"></div>
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li><a href=""><span>Pensions Online</span></a>

					<div class="clr"></div>

					<ul class="sub_menu">
						<li>
								<a href="">Member Access</a>
							</li>
						<li>
							<a href="">Plan Sponsor Access</a>
							</li>
						<li>
								<a href="">Plan Employer Access</a>
							</li>
						<li>
								<a href="">Plan Fund Manager Access</a>
							</li>
						<li>
								<a href="">Plan Trustee Access</a>
							</li>
						<li class="bs">
							<div class="bs">
								<div class="left">
									<div class="body"></div>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
			<div class="helpleft"><a href="">Help</a></div>
		</div>

	    <div class="clr"></div>
	    <div id="content">
			<h1 class="pageheading">Account Summary</h1>
			<div id="maingrid">
				<div id="left">
					<div class="msg">
						<a href="">0 Messages</a>
					</div>

		            <div id="menugrid">
		                <h1>Account</h1>
		                <ul>
							<li class="active"><a href="">Account Summary</a></li>
						    <li><a href="">Bank Accounts</a></li>
							<li><a href="">Credit Cards</a></li>
							<li><a href="">NCB Insurance</a></li>
							<li><a href="">NCB Capital Markets</a></li>
		                </ul>
		            </div>
	                <div class="chat">
						<img src="../images/livechatoffline.gif" alt="Live Chat is Offline">
					</div>
		            <div id="menugrid">
		            	<h1>Quick Links</h1>
		                <ul>
		                    <li><a href="">Bill Payment</a></li>
		                    <li><a href="">Transfer Funds</a></li>
							<form>
								<li><a>View Statements</a></li>
							</form>
							<li>
									<a href="">Transfer to Other Banks</a>
								</li>
							<li>
									<a href="">NCBCM Transactions</a>
								</li>
							<li>
									<a href="">
										<span>New Accounts, Credit Cards and Loans</span>
									</a>
							</li>
		                </ul>
		            </div>
						<fieldset>
							<legend>Help Tips</legend>
							<p>Please contact our Customer Care Centre and we will show you how you can conduct your banking transactions securely, from anywhere in the world. </p>
							<p>For more details, call us toll free at 1-888-NCB-FIRST (1-888-622-3477) or message us at ncbinfo@jncb.com.</p>
						</fieldset>
		            </div>
				<div id="right">
					<ul class="acc" id="acc">
						<li>
							<h3 class="selected"><a href="">Bank Account Balance</a></h3>
							<div class="acc-section" style="height: auto;">
								<div class="acc-content">
									<h1>
                                        &nbsp;</h1>
                                    <h1>
                                        <span class="auto-style1">Flow Jamaica - $</span><strong><asp:Label ID="ncbAccount" runat="server" Text="Label" CssClass="auto-style1"></asp:Label></strong></h1>
&nbsp;</div>
							</div>
						    <br>
						<li>
							<h3 class="selected"><a href="">Payments Made to Account</a></h3>
							<div class="acc-section" style="height: auto; opacity: 1;">
								<div class="acc-content">
									<strong>
                                    <asp:GridView ID="GridView1" runat="server" CellPadding="4" CssClass="auto-style1" ForeColor="#333333" GridLines="None" Height="106px" Width="397px">
                                        <AlternatingRowStyle BackColor="White" />
                                        <EditRowStyle BackColor="#2461BF" />
                                        <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                                        <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                                        <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
                                        <RowStyle BackColor="#EFF3FB" />
                                        <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                        <SortedAscendingCellStyle BackColor="#F5F7FB" />
                                        <SortedAscendingHeaderStyle BackColor="#6D95E1" />
                                        <SortedDescendingCellStyle BackColor="#E9EBEF" />
                                        <SortedDescendingHeaderStyle BackColor="#4870BE" />
                                    </asp:GridView>
                                    </strong>
								</div>
							</div>
						</li>
					</ul>
					<p class="morelinksbottom">
					<a href="">Print</a> | Download as
					<a class="infolinks" href="">PDF</a>
					<a class="infolinks" href="">CSV</a>
					<a class="infolinks" href="">TXT</a></p>
				</div>
			</div>
		</div>
	    <div class="clr"></div>
	    <div id="base">
	        <div id="left"></div>
	        <div id="body">
	         	<div class="content">
	                <div>
	                	<ul><br>
							<link rel="stylesheet" type="text/css" href="images/tinybox.css">
							<script type="text/javascript" src="images/tinybox.js.download"></script>

							<li><a href="">Online Security</a></li>
							<li><a href="">FAQs</a></li>
							<li><a href="">Internet Banking Demos</a></li>
							<li><a href="">Privacy Policy</a></li>
							<li><a href="">Terms and Conditions</a></li>
	                    </ul>
	                </div>
	                <div class="clr"></div>
	                <div id="copyright">
	                	Copyright © 2011 National Commercial Bank.<br>
	Customer Care Centre: 1-888-NCB-FIRST (1-888-622-3477) | email ncbinfo@jncb.com
					</div>
	            </div>
	        </div>
	        <div id="right"></div>
	    </div>
	</div>
        </form>
</body>
</html>