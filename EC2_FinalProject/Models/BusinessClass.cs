using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace EC2_FinalProject.Models
{
    [DataObject]
    public class BusinessClass
    {
        private static string GetConnectionString(string database)
        {
            if (database == "ncb")
            {
                return ConfigurationManager.ConnectionStrings["NCBConnectionString"].ConnectionString;
            }
            else if (database == "scotia")
            {
                return ConfigurationManager.ConnectionStrings["ScotiaBankConnectionString"].ConnectionString;
            }
            else if (database == "lime")
            {
                return ConfigurationManager.ConnectionStrings["LimeConnectionString"].ConnectionString;
            }

            return null;
        }

        public static double checkAccount(String bankUser, String bankPassword)
        {
            SqlConnection con = new SqlConnection(GetConnectionString("scotia"));
            SqlCommand cmd = new SqlCommand("SoctiaLogin", con);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            try
            {
                cmd.Parameters.AddWithValue("@username", bankUser);
                cmd.Parameters.AddWithValue("@password", bankPassword);

                con.Open();
                double having = Convert.ToDouble(cmd.ExecuteScalar());
                con.Close();
                return having;
            }
            catch (Exception ex)
            {
                return -1;
            }
        }

        public static int Scotia_Transaction_Insert(string fullName, int BillId, DateTime TransactionDate, double Cost)
        {
            try
            {
                SqlConnection con = new SqlConnection(GetConnectionString("scotia"));
                SqlCommand cmd = new SqlCommand("CustomerTransaction_Insert", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //Stored Procedure Parameters

                cmd.Parameters.AddWithValue("@fullname", fullName);
                cmd.Parameters.AddWithValue("@billId", BillId);
                cmd.Parameters.AddWithValue("@TransactionDate", TransactionDate);
                cmd.Parameters.AddWithValue("@Amount", Cost);

                con.Open();
                int result = cmd.ExecuteNonQuery();
                con.Close();

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static double Scotia_AccountUpdate(string username, String password, double having, double owing)
        {
            try
            {
                SqlConnection con = new SqlConnection(GetConnectionString("scotia"));
                SqlCommand cmd = new SqlCommand("Account_UpdateById", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //Stored Procedure Parameters

                double balance = having - owing;

                cmd.Parameters.AddWithValue("@user", username);
                cmd.Parameters.AddWithValue("@password", password);
                cmd.Parameters.AddWithValue("@amount", balance);

                con.Open();
                int result = cmd.ExecuteNonQuery();
                con.Close();

                return balance;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static int Update_Bill(int billId, double owing)
        {
            try
            {
                SqlConnection con = new SqlConnection(GetConnectionString("lime"));
                SqlCommand cmd = new SqlCommand("Bill_Update", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //Stored Procedure Parameters

                cmd.Parameters.AddWithValue("@BillId", billId);
                cmd.Parameters.AddWithValue("@Amount", owing);

                con.Open();
                int result = cmd.ExecuteNonQuery();
                con.Close();

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static int NCB_Transaction_Insert(string fullName, int BillId, DateTime TransactionDate, double Cost)
        {
            try
            {
                SqlConnection con = new SqlConnection(GetConnectionString("ncb"));
                SqlCommand cmd = new SqlCommand("CustomerTransaction_Insert", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //Stored Procedure Parameters

                cmd.Parameters.AddWithValue("@fullname", fullName);
                cmd.Parameters.AddWithValue("@billId", BillId);
                cmd.Parameters.AddWithValue("@TransactionDate", TransactionDate);
                cmd.Parameters.AddWithValue("@Amount", Cost);

                con.Open();
                int result = cmd.ExecuteNonQuery();
                con.Close();

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static double getLimeBalance()
        {
            SqlConnection con = new SqlConnection(GetConnectionString("ncb"));
            SqlCommand cmd = new SqlCommand("getTotalTransaction", con);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            try
            {
               
                con.Open();
                double balance = Convert.ToDouble(cmd.ExecuteScalar());
                con.Close();
                return balance;
            }
            catch (Exception ex)
            {
                return -1;
            }
        }

        public static int Update_Lime_Account(double Amount)
        {
            try
            {
                SqlConnection con = new SqlConnection(GetConnectionString("ncb"));
                SqlCommand cmd = new SqlCommand("Account_UpdateAmount", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //Stored Procedure Parameters

                cmd.Parameters.AddWithValue("@Amount", Amount);
              
                con.Open();
                int result = cmd.ExecuteNonQuery();
                con.Close();

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}