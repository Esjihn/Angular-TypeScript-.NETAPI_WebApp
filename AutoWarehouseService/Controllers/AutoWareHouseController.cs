using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoWarehouseService.Models;

namespace AutoWarehouseService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AutoWareHouseController : Controller
    {
        private readonly AutoWarehouseService _warehouseService;

        public AutoWareHouseController(AutoWarehouseService warehouseService)
        {
            _warehouseService = warehouseService;
        }
        
        [HttpGet]
        public IEnumerable<AutoPart> GetAutoParts()
        {
            return _warehouseService.GetAutoParts();
        }
    }
}
