using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DuAnFptShop.Models.ViewModel
{
    public class CartViewModel
    {

        //bảng OrderItem
        [Key]
        public int OrderItemID { get; set; }
        public Nullable<int> Quantity { get; set; }

        //bảng product detail
        public int ProductDetailID { get; set; }
        public Nullable<decimal> NewPrice { get; set; }
        public Nullable<decimal> OldPrice { get; set; }
        public string ColorImage { get; set; }


        //bảng product
        public int ProductID { get; set; }
        public string ProName { get; set; }
        public string ProImage { get; set; }

        //bảng color
        public Nullable<int> ColorID { get; set; }
        public string ColorName { get; set; }

        //bảng discount
        public int DiscountID { get; set; }
        public string DiscountType { get; set; }
        public Nullable<decimal> DiscountValue { get; set; }
        public string DiscountDecription { get; set; }

        //bảng Order
        public int OrderID { get; set; }
        public Nullable<int> CusID { get; set; }
        public Nullable<System.DateTime> OrderDate { get; set; }
        public string AddressDelivery { get; set; }
        public Nullable<int> PaymentMethodID { get; set; }
        public string OrderStatus { get; set; }
        public string ReceiverName { get; set; }
        public string ReceiverPhone { get; set; }
        public Nullable<decimal> TotalPrice { get; set; }
        public Nullable<decimal> LastPrice { get; set; }

    }
}