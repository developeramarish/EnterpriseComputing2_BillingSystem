using EC2_FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EC2_FinalProject.Auth_Customer
{
    public partial class Customer : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            user.Text = User.Identity.Name;
        }

        protected void pay_Click(object sender, EventArgs e)
        {
            try
            {
                string username = bankuser.Text;
                string password = bankpassword.Text;
                int billId = Convert.ToInt32(GridView1.SelectedRow.Cells[1].Text);
                double owing = Convert.ToDouble(GridView1.SelectedRow.Cells[6].Text);
                string fname = Convert.ToString(GridView1.SelectedRow.Cells[2].Text);
                string lname = Convert.ToString(GridView1.SelectedRow.Cells[3].Text);
                string fullName = fname + " " + lname;
                double having = BusinessClass.checkAccount(username, password);

                if (Convert.ToDouble(amount.Text) > having)
                {
                    lblmessage.ForeColor = System.Drawing.Color.Red;
                    lblmessage.Text = "Sorry You Have Insufficient Funds To Carry Out This Transaction!";
                }
                else if (owing == 0.00)
                {
                    lblmessage.ForeColor = System.Drawing.Color.Green;
                    lblmessage.Text = "Bill already paid";
                }
                else if (Convert.ToDouble(amount.Text) > owing)
                {
                    double pay = Convert.ToDouble(amount.Text) - owing;

                    lblmessage.ForeColor = System.Drawing.Color.Green;
                    lblmessage2.ForeColor = System.Drawing.Color.Green;
                    lblmessage.Text = "Transaction Complete: You wanted to pay " + amount.Text + " on a bill owing only " + Convert.ToString(owing) +
                    ". Your account however was only charged " + Convert.ToString(pay);
                    lblmessage2.Text = "The Changes will be reflected when you check your account again";
                    BusinessClass.Scotia_Transaction_Insert(fullName, billId, DateTime.Now, pay);
                    BusinessClass.Scotia_AccountUpdate(username, password, having, pay);
                    BusinessClass.Update_Bill(billId, (owing - pay));
                    BusinessClass.NCB_Transaction_Insert(fullName, billId, DateTime.Now, pay);
                }
                else
                {
                    lblmessage.ForeColor = System.Drawing.Color.Green;
                    lblmessage2.ForeColor = System.Drawing.Color.Green;
                    lblmessage.Text = "Transaction Completed!";
                    lblmessage2.Text = "The Changes will be reflected when you check your account again";
                    BusinessClass.Scotia_Transaction_Insert(fullName, billId, DateTime.Now, Convert.ToDouble(amount.Text));
                    BusinessClass.Scotia_AccountUpdate(username, password, having, Convert.ToDouble(amount.Text));
                    BusinessClass.Update_Bill(billId, (owing - Convert.ToDouble(amount.Text)));
                    BusinessClass.NCB_Transaction_Insert(fullName, billId, DateTime.Now, Convert.ToDouble(amount.Text));
                    double balance = BusinessClass.getLimeBalance();
                    BusinessClass.Update_Lime_Account(balance);
                    //lblmessage2.Text = "Flow's NCB Balance is now "+ Convert.ToString(balance);
                }
            }
            catch (Exception ex)
            {
                lblmessage.ForeColor = System.Drawing.Color.Red;
                lblmessage.Text = "Select the bill you want to pay";
                //lblmessage.Text = Convert.ToString(ex);
            }
            //Response.Redirect("Customer.aspx", false);
        }
    }
}