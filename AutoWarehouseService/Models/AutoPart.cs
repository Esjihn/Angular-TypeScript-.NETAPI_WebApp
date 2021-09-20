using System;
using System.ComponentModel.DataAnnotations;

namespace AutoWarehouseService.Models
{
    public class AutoPart
    {
        [Key] 
        public int AutoPartId { get; set; }
        
        [Required]
        public string PartName { get; set; }
        
        [StringLength(100)] 
        public string LastModifiedBy { get; set; }
        
        public DateTime? LastModifiedDate { get; set; }
    }
}