import {Component, OnInit, ViewChild} from '@angular/core';
import {UrlShortenerService} from "../../services/url-shortener.service";
import {ShortenedUrlModel} from "../../models/shortenedUrlModel";
import {MatTable} from "@angular/material/table";

@Component({
	selector: 'app-url-list',
	templateUrl: './url-list.component.html',
	styleUrls: ['./url-list.component.less']
})
export class UrlListComponent implements OnInit {
	public urls: ShortenedUrlModel[] = [];
	public displayedColumns = ['shortUrl', 'usageCount', 'createdOn', 'lastAccessDate', 'actions'];

	@ViewChild(MatTable) table: MatTable<ShortenedUrlModel>;

	constructor(private urlShortenerService: UrlShortenerService) {
	}

	ngOnInit(): void {
		this.urlShortenerService.getUrls().subscribe(res => {
			this.urls = res;
			this.table.renderRows();
		})
	}

	public deleteUrl(urlToRemove: ShortenedUrlModel){
		this.urlShortenerService.deleteUrl(urlToRemove.urlId).subscribe(() =>{
			this.urls = this.urls.filter(url => url !== urlToRemove);
			this.table.renderRows();
		})
	}

}
