import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShortenedUrlModel} from "../../models/shortenedUrlModel";
import {UrlShortenerService} from "../../services/url-shortener.service";
import {ShortUrlRequestModel} from "../../models/shortUrlRequestModel";

@Component({
	selector: 'app-url-creator',
	templateUrl: './url-creator.component.html',
	styleUrls: ['./url-creator.component.less']
})
export class UrlCreatorComponent implements OnInit {
	public urlShortenerForm: FormGroup;
	public isLoading: boolean = false;
	public createdUrl?: ShortenedUrlModel;

	public readonly httpUrlRegex = '(http?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})'
	baseShorUrl: string;

	constructor(private urlShortenerService: UrlShortenerService) {
	}

	ngOnInit(): void {
		this.baseShorUrl = window.location.origin + '/s/';
		this.urlShortenerForm = new FormGroup({
			url: new FormControl('', [
				Validators.required,
				Validators.maxLength(2048),
				Validators.pattern(this.httpUrlRegex)])
		});
	}

	createShortenedUrl() {
		this.urlShortenerForm.markAllAsTouched()
		if (!this.urlShortenerForm.valid) return;

		let model = {
			url: this.urlShortenerForm.controls['url'].value
		} as ShortUrlRequestModel

		this.isLoading = true;
		this.urlShortenerService.createShortenedUrl(model).subscribe(res => {
			this.isLoading = false;
			this.createdUrl = res;
		})
	}
}
