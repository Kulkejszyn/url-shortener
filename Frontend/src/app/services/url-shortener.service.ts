import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ShortenedUrlModel} from "../models/shortenedUrlModel";
import {ShortUrlDto} from "../models/shortUrlDto";
import {ShortUrlRequestModel} from "../models/shortUrlRequestModel";

@Injectable({
	providedIn: 'root'
})
export class UrlShortenerService {

	readonly httpOptions = {
		headers: new HttpHeaders({'Content-Type': 'application/json'})
	}

	constructor(private http: HttpClient) {
	}

	get controllerUrl() {
		return `${environment.apiUrl}/UrlShortener`;
	}

	public deleteUrl(urlId: number): Observable<Object> {
		return this.http.delete(`${this.controllerUrl}/${urlId}`)
	}

	public createShortenedUrl(model: ShortUrlRequestModel): Observable<ShortenedUrlModel> {
		return this.http.post<ShortenedUrlModel>(`${this.controllerUrl}/CreateShortenedUrl`, model)
	}

	public getUrls(): Observable<ShortenedUrlModel[]> {
		return this.http.get<ShortenedUrlModel[]>(`${this.controllerUrl}/GetUrls`)
	}

	public getBaseUrl(shortUrl: string): Observable<ShortUrlDto> {
		return this.http.get<ShortUrlDto>(`${this.controllerUrl}/${shortUrl}`);
	}
}
