using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DuAnFptShop.Models;

namespace DuAnFptShop.Areas.Admin.Controllers
{
    public class ProductsController : Controller
    {
        private FPTSHOPEntities2 db = new FPTSHOPEntities2();

        // GET: Admin/Products
        public ActionResult Index()
        {
            var products = db.Products.Include(p => p.Category).Include(p => p.PerformanceBattery).Include(p => p.ScreenSize);
            return View(products.ToList());
        }

        // GET: Admin/Products/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // GET: Admin/Products/Create
        public ActionResult Create()
        {
            ViewBag.CateID = new SelectList(db.Categories, "CateID", "CateName");
            ViewBag.PerformanceBatteryID = new SelectList(db.PerformanceBatteries, "PerformanceBatteryID", "Performance");
            ViewBag.ScreenSizeID = new SelectList(db.ScreenSizes, "ScreenSizeID", "Size");
            return View();
        }

        // POST: Admin/Products/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ProductID,CateID,ProName,ProDecription,Screen,Camera,CameraSelfie,Cpu,Battery,Sim,OperatingSystem,Origin,LaunchTime,PerformanceBatteryID,ScreenSizeID,ProImage,ProDescriptionTitle")] Product product)
        {
            if (ModelState.IsValid)
            {
                db.Products.Add(product);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CateID = new SelectList(db.Categories, "CateID", "CateName", product.CateID);
            ViewBag.PerformanceBatteryID = new SelectList(db.PerformanceBatteries, "PerformanceBatteryID", "Performance", product.PerformanceBatteryID);
            ViewBag.ScreenSizeID = new SelectList(db.ScreenSizes, "ScreenSizeID", "Size", product.ScreenSizeID);
            return View(product);
        }

        // GET: Admin/Products/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            ViewBag.CateID = new SelectList(db.Categories, "CateID", "CateName", product.CateID);
            ViewBag.PerformanceBatteryID = new SelectList(db.PerformanceBatteries, "PerformanceBatteryID", "Performance", product.PerformanceBatteryID);
            ViewBag.ScreenSizeID = new SelectList(db.ScreenSizes, "ScreenSizeID", "Size", product.ScreenSizeID);
            return View(product);
        }

        // POST: Admin/Products/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ProductID,CateID,ProName,ProDecription,Screen,Camera,CameraSelfie,Cpu,Battery,Sim,OperatingSystem,Origin,LaunchTime,PerformanceBatteryID,ScreenSizeID,ProImage,ProDescriptionTitle")] Product product)
        {
            if (ModelState.IsValid)
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CateID = new SelectList(db.Categories, "CateID", "CateName", product.CateID);
            ViewBag.PerformanceBatteryID = new SelectList(db.PerformanceBatteries, "PerformanceBatteryID", "Performance", product.PerformanceBatteryID);
            ViewBag.ScreenSizeID = new SelectList(db.ScreenSizes, "ScreenSizeID", "Size", product.ScreenSizeID);
            return View(product);
        }

        // GET: Admin/Products/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // POST: Admin/Products/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Product product = db.Products.Find(id);
            db.Products.Remove(product);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
