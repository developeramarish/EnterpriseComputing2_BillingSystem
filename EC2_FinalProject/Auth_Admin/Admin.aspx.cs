using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EC2_FinalProject.Auth_Admin
{
    public partial class Admin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnroles_Click(object sender, EventArgs e)
        {
            Response.Redirect("/Maintenance/Default.aspx");
        }

        protected void btnncb_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/NCBLogin.aspx");
        }
    }
}