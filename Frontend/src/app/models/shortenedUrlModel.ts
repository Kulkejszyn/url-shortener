import {ShortUrlDto} from "./shortUrlDto";

export interface ShortenedUrlModel extends ShortUrlDto {
	usageCount: number;
	urlId: number;
	createdOn: Date;
	lastAccessDate?: Date;
}
