using EC2_FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EC2_FinalProject.Scotia
{
    public partial class dashboard : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            loginClass logged = (loginClass)Session["loginSession"];
            logged userSession = (logged)Session["UserInfo"];

            name.Text = userSession.FirstName + " " + userSession.LastName;
            GridView1.DataSource = BusinessClass.Socita_selectTransactionByName_IEnumerable(name.Text);
            GridView1.DataBind();
            balance.Text = Convert.ToString(BusinessClass.checkAccount(logged.Username, logged.Password));
            user.Text = userSession.FirstName+" "+userSession.LastName;
        }

        protected void signout_Click(object sender, EventArgs e)
        {
            Response.Redirect("/Auth_Customer/Customer.aspx");
        }
    }
}