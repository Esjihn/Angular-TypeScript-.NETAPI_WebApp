using System.Collections.Generic;
using System.Linq;
using AutoWarehouseService.Models;

namespace AutoWarehouseService.Controllers
{
    public class AutoWarehouseService
    {
        private readonly AutoWarehouseContext _whContext;

        public AutoWarehouseService(AutoWarehouseContext whContext)
        {
            _whContext = whContext;
        }

        public List<AutoPart> GetAutoParts()
        {
            return _whContext.AutoPart.ToList();
        }
    }
}