using EC2_FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EC2_FinalProject.NCB
{
    public partial class Dashboard : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ncbAccount.Text = Convert.ToString(BusinessClass.NcbAccount());
            GridView1.DataSource = BusinessClass.NCB_TransactionSelectAll_IEnumerable();
            GridView1.DataBind();
        }

        //protected void LinkButton1_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("~/Auth_Admin/Admin.aspx");
        //}
    }
}