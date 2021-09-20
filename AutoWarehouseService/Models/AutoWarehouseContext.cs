using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AutoWarehouseService.Models
{
    public class AutoWarehouseContext : DbContext
    {
        public DbSet<AutoPart> AutoPart { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // connection configured from appsettings.json
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(
                    "Data Source=localhost;Initial Catalog=AutoWarehouse;Integrated Security=True;", 
                    b => b.MigrationsAssembly("AutoWarehouseService"));
            }
        }

        public AutoWarehouseContext()
        {
            
        }

        protected AutoWarehouseContext(DbContextOptions<AutoWarehouseContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("dbo");
        }
    }
}
