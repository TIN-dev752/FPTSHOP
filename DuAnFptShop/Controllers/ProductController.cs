using DuAnFptShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DuAnFptShop.Controllers
{
    public class ProductController : Controller
    {
        private FPTSHOPEntities2 db = new FPTSHOPEntities2();
        // GET: Products
        public ActionResult ProductSliderPartialView(int id)
        {
            var productDetail = db.ProductDetails.Find(id);

            int productid = (int)productDetail.ProductID;

            var item = db.ProductSliders.Where(q => q.ProductID == productid).Take(5).ToList();
            return PartialView(item);
        }

        public ActionResult ProductQuestionPartialView(int id)
        {
            var productDetail = db.ProductDetails.Find(id);

            int productid = (int)productDetail.ProductID;

            var item = db.ProductQuestions.Where(q => q.ProductID == productid).ToList();
            return PartialView(item);
        }

        public ActionResult ProductNewsPartialView(int id)
        {
            var productDetail = db.ProductDetails.Find(id);

            int productid = (int)productDetail.ProductID;

            var item = db.ProductNews.Where(q => q.ProductID == productid && q.TypeNews == "Tin tức").ToList();
            return PartialView(item);
        }

        public ActionResult ProductAdvisoryPartialView(int id)
        {
            var productDetail = db.ProductDetails.Find(id);

            int productid = (int)productDetail.ProductID;

            var item = db.ProductNews.Where(q => q.ProductID == productid && q.TypeNews == "Hướng dẫn tư vấn").ToList();
            return PartialView(item);
        }

        public ActionResult ProductParamSliderPartialView(int id)
        {
            var productDetail = db.ProductDetails.Find(id);

            int productid = (int)productDetail.ProductID;

            var item = db.ProductSliders.Where(q => q.ProductID == productid).OrderBy(q => q.ProductSliderID).Skip(5).Take(6).ToList();
            return PartialView(item);
        }
    }
}