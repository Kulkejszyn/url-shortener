using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Models.Enitites;

[Index(nameof(ShortUrl), IsUnique = true)]
public class ShortenedUrl
{
	[Key]
	public int UrlId { get; set; }
	
	[MaxLength(2048)]
	public string BaseUrl { get; set; }
	
	[MaxLength(24)]
	public string ShortUrl { get; set; }
	
	[DefaultValue(0)]
	public long UsageCount { get; set; }
	public DateTime? LastAccessDate { get; set; }
	public DateTime CreatedOn { get; set; }
}
