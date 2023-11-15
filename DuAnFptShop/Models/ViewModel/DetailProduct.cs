using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DuAnFptShop.Models.ViewModel
{
    public class DetailProduct
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
        public string ProDecription { get; set; }
        public string Screen { get; set; }
        public string Camera { get; set; }
        public string CameraSelfie { get; set; }
        public string Cpu { get; set; }
        public string Battery { get; set; }
        public string Sim { get; set; }
        public string OperatingSystem { get; set; }
        public string Origin { get; set; }
        public Nullable<int> LaunchTime { get; set; }
        public Nullable<int> PerformanceBatteryID { get; set; }
        public Nullable<int> ScreenSizeID { get; set; }
        public string ProImage { get; set; }
        public string ProDescriptionTitle { get; set; }
        public string ColorImage { get; set; }


        //bảng ram
        public int RamID { get; set; }
        public string RamName { get; set; }

        //bảng storage
        public int StorageID { get; set; }
        public string StorageName { get; set; }

        //bảng color
        public int ColorID { get; set; }
        public string ColorName { get; set; }

        //bảng product slider
        public int ProductSliderID { get; set; }
        public string ProductSliderImage { get; set; }

        //bảng product question
        public int QuestionID { get; set; }
        public string QuestionTitle { get; set; }
        public string Answer { get; set; }

        //bảng product news
        public int ProductNewsID { get; set; }
        public string NewsTitle { get; set; }
        public string NewsImage { get; set; }
        public string NewsTags { get; set; }
    }
}