using Models.Enitites;

namespace Models;

public class ShortenedUrlModel
{
	public long UsageCount { get; set; }
	public int UrlId { get; set; }
	public DateTime CreatedOn { get; set; }
	public DateTime? LastAccessDate { get; set; }
	public string ShortUrl { get; set; }
	public string BaseUrl { get; set; }

	public static ShortenedUrlModel FromEntity(ShortenedUrl shortenedUrl)
	{
		return new ShortenedUrlModel()
		{
			BaseUrl = shortenedUrl.BaseUrl,
			CreatedOn = shortenedUrl.CreatedOn,
			LastAccessDate = shortenedUrl.LastAccessDate,
			UrlId = shortenedUrl.UrlId,
			UsageCount = shortenedUrl.UsageCount,
			ShortUrl = shortenedUrl.ShortUrl
		};
	}
}
