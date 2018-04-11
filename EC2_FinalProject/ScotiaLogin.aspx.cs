using EC2_FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EC2_FinalProject
{
    public partial class ScotiaLogin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnsignin_Click(object sender, EventArgs e)
        {
            loginClass log = new loginClass();

            log.Username = username.Text;
            log.Password = passwrd.Text;

            Session["loginSession"] = log;
            Response.Redirect("Scotia/dashboard.aspx");
        }
    }
}