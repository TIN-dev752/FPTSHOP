using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DuAnFptShop.Models
{
    public class CartItem
    {
        FPTSHOPEntities2 db = new FPTSHOPEntities2();
        public int ProductID { get; set; }
        public string NamePro { get; set; }
        public string ImagePro { get; set; }
        public decimal Price { get; set; }
        public int Number { get; set; }

        public decimal FinalPrice()
        {
            return Number * Price;
        }

        public CartItem(int productID)
        {
            this.ProductID = productID;
            var productDB = db.Products.Single(s => s.ProductID == this.ProductID);
            this.NamePro = productDB.ProName;
            this.ImagePro = productDB.ProImage;
            this.Price = (decimal)productDB.Price;
            this.Number = 1;
        }
    }
}