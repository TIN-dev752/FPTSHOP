using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DuAnFptShop.Models.ViewModel
{
    public class HomeViewModel
    {
        //bảng product detail
        [Key]
        public int ProductDetailID { get; set; }
        public Nullable<decimal> NewPrice { get; set; }
        public Nullable<decimal> OldPrice { get; set; }

        //bảng product
        public int ProductID { get; set; }
        public Nullable<int> CateID { get; set; }
        public string ProName { get; set; }
        public string Screen { get; set; }
        public string Cpu { get; set; }
        public string ProImage { get; set; }
        public Nullable<int> LaunchTime { get; set; }

        //bảng ram
        public int RamID { get; set; }
        public string RamName { get; set; }

        //bảng storage
        public int StorageID { get; set; }
        public string StorageName { get; set; }

    }
}