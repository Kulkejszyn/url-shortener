using Microsoft.EntityFrameworkCore;
using Models.Enitites;

namespace App.Data;

public class DatabaseContext : DbContext
{
	public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
	{
	}

	public DbSet<ShortenedUrl> ShortenedUrls { get; set; }
}
