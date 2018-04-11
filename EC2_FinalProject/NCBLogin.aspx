<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="NCBLogin.aspx.cs" Inherits="EC2_FinalProject.NCBLogin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <style id="stndz-style">        .auto-style2 {
            margin-left: 182px;
        }
        .auto-style3 {
            width: 95px;
        }
        .auto-style4 {
            width: 95px;
            height: 30px;
        }
        .auto-style5 {
            height: 30px;
        }
    </style>
    <title>NCB Online - Login</title>
    <link rel="SHORTCUT ICON" href="https://retail.ncbelink.com/corp/web/L001/images/favicon.ico">
    <link href="Content/default.css" type="text/css" rel="stylesheet">
</head>
<body data-gr-c-s-loaded="true">
    <form id="form1" runat="server">
        <div id="greycontainer">
            <div id="top"><a href="" class="logo"></a></div>
            <div id="body">
                <div class="content">
                    <div id="informationmsg" style="display: block"></div>
                    <div class="top20">
                        <div class="left">
                            <div id="darkbluecontainer" class="">
                                <div class="top"></div>
                                <div class="body">
                                    <div class="glare">
                                        <div class="marginleft20 ">
                                            <h1>Login</h1>
                                            <p>To sign in to NCB Online banking , enter your User ID in the field below: </p>
                                        </div>
                                        <hr>
                                        <table >
                                            <tr>
                                                <td class="auto-style3">
                                                    <asp:Label ID="user" runat="server" Text="Username:"></asp:Label></td>
                                                <td>
                                                    <asp:TextBox ID="TextBox1" runat="server" CssClass="auto-style2" Height="25px" Width="317px"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="auto-style4">
                                                    <br />
                                                    <asp:Label ID="pass" runat="server" Text="Password:"></asp:Label></td>
                                                <td class="auto-style5">
                                                    <br />
                                                    <asp:TextBox ID="password" runat="server" Height="25px" Width="314px" TextMode="Password"></asp:TextBox></td>
                                            </tr>
                                            <tr colspan="2">
                                                <td class="auto-style3">
                                                    <br /><br />
                                                    <asp:Button ID="login" runat="server" Text="Login" Width="92px" OnClick="login_Click" /></td>
                                            </tr>
                                        </table>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="left"></div>
                    </div>
                </div>
                <div class="top40">
                    <ul id="footer-menu">
                        <br>
                        <link rel="stylesheet" type="text/css" href="./NCB Online - Login_files/tinybox.css">
                        <li><a href="">Online Security</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Internet Banking Demos</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div class="top10 border-solid-bottom border-solid-top height5pxi"></div>
                <div class="center top10 text11">
                    For more details, call us toll free at 1-888-NCB-FIRST (1-888-622-3477) or message us at ncbinfo@jncb.com.
                </div>
            </div>
        </div>
    </form>
    <div id="footer">
        <div class="left">
            ©  Copyright 2011 NCB Ja. Ltd. All rights reserved.
        </div>
        <ul class="footer right">
            <li><a href="">Privacy Statement</a></li>
            <li class="bd"><a href="">Legal Information</a></li>
        </ul>
    </div>
</body>
</html>
