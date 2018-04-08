using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EC2_FinalProject.Models
{
    
    public class calculate
    {
        public Double Having { get; set; }
        public Double Owing { get; set; }


        public int checkAccountBalance(Double owe, Double have)
        {
           if(owe > have)
            {
                return 1;
            }
            return 0;
        }

    }
}