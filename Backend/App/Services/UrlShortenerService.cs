using App.Data;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.Enitites;

namespace App.Services;

public interface IUrlShortenerService
{
	IEnumerable<ShortenedUrlModel> GetUrls();
	void DeleteUrl(long id);
	ShortenedUrlModel CreateShortenedUrl(ShortUrlRequestModel model);
	ShortUrlDto? GetBaseUrl(string shortUrl);
}

public class UrlShortenerService : IUrlShortenerService
{
	private readonly DatabaseContext _databaseContext;
	private readonly ILogger<UrlShortenerService> _logger;
	public UrlShortenerService(DatabaseContext databaseContext, ILogger<UrlShortenerService> logger)
	{
		_databaseContext = databaseContext;
		_logger = logger;
	}

	public IEnumerable<ShortenedUrlModel> GetUrls()
	{
		return _databaseContext.ShortenedUrls
			.ToList()
			.Select(ShortenedUrlModel.FromEntity);
	}

	public void DeleteUrl(long id)
	{
		var shortenedUrl = _databaseContext.ShortenedUrls.SingleOrDefault(course => course.UrlId == id);
		if (shortenedUrl is null) return;
		_databaseContext.Remove(shortenedUrl);
		_databaseContext.SaveChanges();
	}

	public ShortenedUrlModel CreateShortenedUrl(ShortUrlRequestModel model)
	{
		var shortenedUrl = new ShortenedUrl
		{
			ShortUrl = Convert.ToBase64String(Guid.NewGuid().ToByteArray()).Replace("=", ""),
			BaseUrl = model.Url,
			CreatedOn = DateTime.Now
		};
		_databaseContext.ShortenedUrls.Add(shortenedUrl);
		_databaseContext.SaveChanges();
		return ShortenedUrlModel.FromEntity(shortenedUrl);
	}

	public ShortUrlDto? GetBaseUrl(string shortUrl)
	{
		var shortenedUrl = _databaseContext.ShortenedUrls.FirstOrDefault(url => url.ShortUrl == shortUrl);
		if (shortenedUrl is null)
		{
			_logger.LogWarning("{@ShortUrl} not found", shortUrl);
			return null;
		}
		shortenedUrl.UsageCount++;
		shortenedUrl.LastAccessDate = DateTime.Now;
		_databaseContext.SaveChanges();
		
		_logger.LogInformation("{ShortUrl} visited on {AccessDate}", shortenedUrl.ShortUrl, shortenedUrl.LastAccessDate);
		return new ShortUrlDto()
		{
			ShortUrl = shortenedUrl.ShortUrl,
			BaseUrl = shortenedUrl.BaseUrl
		};
	}
}
