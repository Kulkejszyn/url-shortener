namespace App.Utils;

public class Validators
{
	public static bool IsHttpUrlValid(string url)
	{
		if (Uri.TryCreate(url, UriKind.Absolute, out var uriResult))
		{
			return (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
		}

		return false;
	}
}
