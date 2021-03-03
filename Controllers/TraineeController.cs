using AngularJsMvcProject_Elias.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJsMvcProject_Elias.Controllers
{
    public class TraineeController : Controller
    {
        // GET Trainee/GetTrainee
        [HttpGet]
        public JsonResult GetTrainee()
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                List<Trainee> trnList = db.Trainees.ToList();
                return Json(trnList, JsonRequestBehavior.AllowGet);
            }

        }

        //POST Trainee/AddTrainee  
        [HttpPost]
        public JsonResult Insert(Trainee trainee)
        {
            if (trainee != null)
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    db.Trainees.Add(trainee);
                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
            else
            {
                return Json(new { success = false });
            }
        }


        //POST Trainee/Update     
        [HttpPost]
        public JsonResult Update(Trainee updatedTrainee)
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                Trainee existingTrainee = db.Trainees.Find(updatedTrainee.TraineeID);
                if (existingTrainee == null)
                {
                    return Json(new { success = false });
                }
                else
                {
                    existingTrainee.TraineeName = updatedTrainee.TraineeName;
                    existingTrainee.MSID = updatedTrainee.MSID;
                    existingTrainee.ExamCode = updatedTrainee.ExamCode;
                    existingTrainee.Score = updatedTrainee.Score;               
                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        //POST trainee/Delete/1
        [HttpPost]
        public JsonResult Delete(int id)
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                Trainee trainee = db.Trainees.Find(id);
                if (trainee == null)
                {
                    return Json(new { success = false });
                }
                db.Trainees.Remove(trainee);
                db.SaveChanges();
                return Json(new { success = true });
            }

        }
    }
}