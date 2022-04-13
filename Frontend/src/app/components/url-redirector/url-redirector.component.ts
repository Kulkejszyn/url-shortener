import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UrlShortenerService} from "../../services/url-shortener.service";

@Component({
	selector: 'app-url-redirector',
	templateUrl: './url-redirector.component.html',
	styleUrls: ['./url-redirector.component.less']
})
export class UrlRedirectorComponent implements OnInit {

	constructor(private route: ActivatedRoute, private urlShortenerService: UrlShortenerService, private router: Router) {
	}

	ngOnInit(): void {
		let routeParams = this.route.snapshot.paramMap;
		let shortUrl = routeParams.get('shortUrl') as string;
		this.urlShortenerService.getBaseUrl(shortUrl).subscribe(
			{
				error: err => {
					this.router.navigate(['404'])
				},
				next: value => {
					window.location.href = value.baseUrl
				}
			}
		)
	}
}
