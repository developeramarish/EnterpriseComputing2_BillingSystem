<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Dashboard.aspx.cs" Inherits="EC2_FinalProject.Scotia.dashboard" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="../content/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="../content/bootstrap-theme.css" rel="stylesheet" type="text/css">
    <link href="../content/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="../content/B2ELab-RUIFW.css" rel="stylesheet" type="text/css">
    <link href="../content/B2ELab-RUIFW-static.css" rel="stylesheet" type="text/css">
    <link href="https://www2.online.scotiabank.com/signon15/retail/desktop/images/scotiabank.ico" rel="shortcut icon">
    <link href="../content/desktop.css" type="text/css" rel="stylesheet">
    <link href="../content/print.css" type="text/css" rel="stylesheet">
  </head>
  <body>
    <div class="RUIFW-page-wrap">
        <form runat="server">
        <header class="RUIFW-container-header" role="navigation">
          <div class="RUIFW-page-header">
            <a class="sr-only RUIFW-skip-main" href="">Skip to main content</a>
            <h1 class="RUIFW-brand">
            <span class="RUIFW-sr sr-only sr-only">Scotiabank Group</span>
            </h1>
          </div>
          <div class="RUIFW-container-quick-links">
            <ul class="RUIFW-nav-quick-links nav navbar-nav">
              <li class="lftbox bold-txt"><span>
                 Welcome <asp:Label ID="user" runat="server" Text="Label"></asp:Label></span></li>
              <li>
                  <asp:Button ID="signout" runat="server" Text="Sign Out" class="RUIFW-btn-primary signout-btn btn btn-primary" OnClick="signout_Click" />
                <div id="ActSumryTimeOut" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" data-backdrop="static" class="RUIFW-modal fade modal in modal fade">
                  <div class="RUIFW-modal-dialog modal-dialog modal-dialog">
                    <div class="RUIFW-modal-content modal-content modal-content" role="document">
                      <div class="RUIFW-modal-header modal-header modal-header">
                        <button data-dismiss="modal" class="close_icon" type="button"></button>
                        <h4 id="myModalLabel" class="RUIFW-modal-title modal-title modal-title">
                        <img src="/Content/scotiabank-group.gif">
                        </h4>
                      </div>
                      
                      <div class="RUIFW-modal-body modal-body modal-body">Due to inactivity your session will expire in 1 min. Do you need more time to complete your banking?</div>
                      
                      <div class="RUIFW-modal-footer btn-holder modal-footer" id="aunth_sect_btns">
                        <button data-dismiss="modal" class="RUIFW-btn btn btn-default btn btn-default" type="button">No</button>
                        <input id="menuForm:timeoutYes" type="submit" name="menuForm:timeoutYes" value="Yes" class="RUIFW-btn-primary btn btn-primary btn btn-primary">
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="lftbox">
                <span class="h-separator">
                  Last Sign On:
                  <br>
                  Monday, April 09, 2018 10:06 AM
                </span>
              </li>
              <li><span class="h-separator"><i class="icon-lock icon-lock-signout"></i>
                <a class="pull-right">Security Guarantee</a> </span></li>
              </ul>
            </div>
            <div class="RUIFW-bg-bar hidden-xs">
              <div class="RUIFW-bg-main-nav"></div>
            </div>
            <nav class="RUIFW-container-nav-main">
              <ul class="RUIFW-nav-main nav navbar-nav pad-lft-10 nav navbar-nav">
                <li id="accountOverview"><a href="" title="My Accounts" ">My Accounts</a>
              </li>
              <li id="accountDetail">
                <a href="" title="Account Activity">Account Activity</a>
              </li>
              <li id="payment" class="has-submenu">
                <a class="RUIFW-dropdown-toggle dropdown-toggle" data-toggle="dropdown" href=""><span class="sr-only RUIFW">Open</span>Pay</a>
                <ul id="menuItems_payment" class="RUIFW-dropdown-menu dropdown-menu dropdown-menu dropdown-menu two-col payIEholder_Caribbean no-banner dropdown-menu dropdown-menu">
                  <li id="add">
                    <a href="" title="Pay a Bill">Pay a Bill</a>
                    <div>Make a bill payment</div>
                  </li>
                  <li class="clear"></li>
                  <li id="payee">
                    <a href="" title="Manage Payees">Manage Payees</a>
                    <div>Add/edit/delete bill payment companies</div>
                  </li>
                  <li class="clear"></li>
                  
                  <li class="clear"></li>
                  <li class="clear"></li>
                  <li class="banner">
                    <div id="cmContentOnlyMenu_payment"></div>
                  </li>
                </ul>
              </li>
              <li id="transfer" class="has-submenu">
                <a class="RUIFW-dropdown-toggle dropdown-toggle" data-toggle="dropdown" href="">Open</span>Transfer</a>
                <ul id="menuItems_transfer" class="RUIFW-dropdown-menu dropdown-menu dropdown-menu dropdown-menu two-col TransferHolder_Caribbean no-banner dropdown-menu dropdown-menu">
                  
                  <li id="transferBetweenOwnAcct"><a href="" title="Transfer Between My Accounts">Transfer Between My Accounts</a>
                  <div>Move money between my own accounts including my Scotiabank credit card(s)</div></li>
                  <li class="clear"></li>
                  
                  <li id="manage_recipients">
                    <a href="" title="Manage Recipients">Manage Recipients</a>
                    <div>Add/edit/delete recipients</div>
                  </li>
                  <li class="clear"></li>
                  <li id="transfer_to_others">
                    <a href="" title="Transfer to Others">Transfer to Others</a>
                    <div>Move money to a person at another bank or at Scotiabank </div>
                  </li>
                  <li class="clear"></li>
                  
                  
                  <li class="clear"></li>
                  <li class="clear"></li>
                  <li class="banner">
                    <div id="cmContentOnlyMenu_transfer">
                    </div>
                  </li>
                </ul>
              </li>
              <li id="topUpMenu" class="has-submenu">
                <a class="RUIFW-dropdown-toggle dropdown-toggle" data-toggle="dropdown" href="">Open</span>Top Up</a>
                <ul id="menuItems_topUpMenu" class="RUIFW-dropdown-menu dropdown-menu two-col TopHolder_Caribbean no-banner dropdown-menu dropdown-menu">
                  
                  <li id="topUp"><a href="" title="Top Up Mobile">Top Up Mobile</a></li>
                  <li class="clear"></li>
                  <li id="manageMobileNumber"><a href="" title="Manage Numbers">Manage Numbers</a></li>
                  <li class="clear"></li>
                  <li id="topUpActivity"><a href="" title="Top Up Activity">Top Up Activity</a>
                </li>
                <li class="clear"></li>
                <li class="clear"></li>
                <li class="banner">
                  <div id="cmContentOnlyMenu_topUpMenu">
                  </div>
                </li>
              </ul>
            </li>
            <li id="offers"><a href="" title="Offers">Offers</a></li>
          </ul>
          <div class="main-icons">
            
            <ul class="RUIFW-nav-main nav navbar-nav nav navbar-nav">
              <li id="nav-settings" class="has-submenu"><a class="RUIFW-dropdown-toggle icon-cog dropdown-toggle" href=""><span class="sr-only RUIFW">Open</span></a>
              <ul id="menuItems_settings" class="RUIFW-dropdown-menu dropdown-menu two-col settings_caribbean  no-banner dropdown-menu dropdown-menu">
                <li id="eStatement"><a href="" title="Online Statements">Online Statements</a>
                <div>Set up, modify and view my online statements</div></li>
                <li class="clear"></li>
                
                <li id="">
                  <a id="menuForm:accountSettingsCmdLink" href="" title="Account Settings">Account Settings</a>/li>
                  <li class="clear"></li>
                  <li id=""><a href="">Security Settings</a></li>
                  <li class="clear"></li>
                  <li id=""><a href="" title="Cheque Management">Cheque Management</a></li>
                  <li class="clear"></li>
                  <li class="banner">
                    <div id="cmContentOnlySettings">
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div class="RUIFW-row row" id="printHeader">
        <div class="RUIFW-col-12 col-sm-12">
          <img src="./Scotia OnLine_files/scotiabank_r_logo@2x.png" width="304" height="52" class="mrgn-btm-15">
          <div id="headerData" class="noprint">
            <div class="RUIFW-row row">
              <div class="RUIFW-col-6 col-sm-6">Page created on: April 10, 2018 11:33 AM EDT</div>
            </div>
          </div>
          <div id="headerData_transaction_receipt" class="noprint">
          </div>
          <div id="headerData_sap" class="noprint">
          </div>
          <div id="headerData_Rec" class="noprint">
          </div>
        </div>
      </div>
      <section id="RUIFW-main-content" class="RUIFW-container-main" tabindex="-1"><div id="messages" class="success-msg"></div>
      <div class="RUIFW-row pad-lft-20 row">
        <h1 class="RUIFW-col-9 col-sm-9 col-sm-9">Account Balance<br />
            <em><strong>
            <span class="auto-style1">$</span><asp:Label ID="balance" runat="server" CssClass="auto-style1" ></asp:Label>
            </strong></em>
            </h1>
          <h1 class="RUIFW-col-9 col-sm-9 col-sm-9">Transaction List<br />
              </span></h1>
            <asp:GridView ID="GridView1" runat="server" CellPadding="4" ForeColor="#333333" GridLines="None">
                <AlternatingRowStyle BackColor="White" />
                <FooterStyle BackColor="#990000" Font-Bold="True" ForeColor="White" />
                <HeaderStyle BackColor="#990000" Font-Bold="True" ForeColor="White" />
                <PagerStyle BackColor="#FFCC66" ForeColor="#333333" HorizontalAlign="Center" />
                <RowStyle BackColor="#FFFBD6" ForeColor="#333333" />
                <SelectedRowStyle BackColor="#FFCC66" Font-Bold="True" ForeColor="Navy" />
                <SortedAscendingCellStyle BackColor="#FDF5AC" />
                <SortedAscendingHeaderStyle BackColor="#4D0000" />
                <SortedDescendingCellStyle BackColor="#FCF6C0" />
                <SortedDescendingHeaderStyle BackColor="#820000" />
          </asp:GridView>
            </section>
            <br />
            
            
      </form>
    </div>
    <div class="quick-menu-box equal">
      <form>
        <style>
        .error-msgPA {
        color: #D81E05;
        nowhitespace: afterproperty;
        display: inline-block!important;
        margin: 5px 0 0 20px!important;
        text-align: left!important;
        word-wrap: break-word!important;
        white-space: pre-wrap!important;
        width: 70%!important;
        }
            .auto-style1 {
                font-size: xx-large;
            }
            .auto-style2 {
                font-size: small;
            }
        </style>
        
      </section>
    </div>
    <footer class="RUIFW-page-footer">
      <div class="footer-icons" id="footerImage">
        <div class="clear"></div>
      </div>
      <div class="RUIFW-row noprint row-margin row">
        <ul class="RUIFW-nav-footer RUIFW-col-8 col-sm-8">
          <div id="footerLinks">
            <li><a href="">Legal</a></li>
            <li class="separator">&nbsp;</li>
            <li><a href="">Privacy</a></li>
            <li class="separator">&nbsp;</li>
            <li><a href="">Security</a></li>
            <li class="separator">&nbsp;</li>
            <li><a href="">Contact Us</a></li>
            <li class="separator">&nbsp;</li>
            <li><a href="">FATCA</a></li>
          </div>
        </ul>
        <ul class=" RUIFW-nav-footer RUIFW-col-4 col-sm-4">
          <li class="copyright">© 2018 Scotiabank.com All Rights Reserved</li>
        </ul>
      </div>
        <asp:TextBox ID="name" runat="server"  Visible="false" Width="199px"></asp:TextBox>
    </footer>
  </form>
</body>
</html>
