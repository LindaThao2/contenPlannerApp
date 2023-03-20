import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { Observable } from 'rxjs';
import { ContentPost } from './ContentPost';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ContentPlannerService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getContentPosts(): Observable<ContentPost[]> {
    return this.http.get<ContentPost[]>(`${this.apiServerUrl}/posts/all`);
  }

  public addContentPost(contentPost: ContentPost): Observable<ContentPost> {
    return this.http.post<ContentPost>(`${this.apiServerUrl}/posts/add`, contentPost);
  }

  public updateContentPost(contentPost: ContentPost): Observable<ContentPost> {
    return this.http.put<ContentPost>(`${this.apiServerUrl}/posts/update`, contentPost);
  }

  public deleteContentPost(contentPostID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/posts/delete/${contentPostID}`);
  }

}
