using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularJsMvcProject_Elias.Models
{
    public class Trainee
    {
        [Key]
        public int TraineeID { get; set; }
        public string TraineeName { get; set; }
        public string MSID { get; set; }
        public int ExamCode { get; set; }
        public decimal Score { get; set; }
        

    }
}