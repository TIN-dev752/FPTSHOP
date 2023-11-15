using DuAnFptShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DuAnFptShop.Controllers
{
    public class CartsController : Controller
    {
        private FPTSHOPEntities2 db = new FPTSHOPEntities2();
        public ActionResult CartItemPartialView(int id)
        {
            var item = db.OrderItems.Where(q => q.ProductDetailID == id).FirstOrDefault();
            return PartialView(item);
        }
    }
}