using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EC2_FinalProject
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.User.IsInRole("admin"))
            {
                isAdmin.Visible = false;

            }
            if (!Page.User.IsInRole("customer"))
            {
                isCustomer.Visible = false;

            }
            if (Page.IsPostBack)
            {
                Context.GetOwinContext().Authentication.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
                Response.Redirect("/Default");
               
            }
        }
        protected void Unnamed_LoggingOut(object sender, LoginCancelEventArgs e)
        {
            //Response.Redirect("/Default");
            Context.GetOwinContext().Authentication.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
        }
    }
}