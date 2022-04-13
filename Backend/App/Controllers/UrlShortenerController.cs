using App.Services;
using App.Utils;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace App.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UrlShortenerController : ControllerBase
{
	private IUrlShortenerService _urlShortenerService;

	public UrlShortenerController(IUrlShortenerService urlShortenerService)
	{
		_urlShortenerService = urlShortenerService;
	}

	[HttpGet("GetUrls")]
	public IEnumerable<ShortenedUrlModel> GetUrls()
	{
		return _urlShortenerService.GetUrls();
	}

	[HttpDelete("{urlId}")]
	public void DeleteUrl(long urlId)
	{
		_urlShortenerService.DeleteUrl(urlId);
	}

	[HttpPost("CreateShortenedUrl")]
	public IActionResult CreateShortenedUrl(ShortUrlRequestModel model)
	{
		if (!Validators.IsHttpUrlValid(model.Url))
		{
			return BadRequest("Provided url is not valid http url");
		}
		return Ok(_urlShortenerService.CreateShortenedUrl(model));
	}

	[HttpGet("{shortUrl}")]
	public IActionResult GetBaseUrl(string shortUrl)
	{
		var shortUrlDto = _urlShortenerService.GetBaseUrl(shortUrl);
		if (shortUrlDto is null) return NotFound();
		return Ok(shortUrlDto);
	}
}
