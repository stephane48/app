import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './BlogPost'
import { Observable } from 'rxjs';


const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(page,tag,category): Observable<BlogPost[]>{
    let url = `https://peaceful-shelf-12976.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`
    if(tag) url += `&tag=${tag}`;
    if(category) url += `&category=${category}`
    
    return this.http.get<BlogPost[]>(url);
  }

  getPostById(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://peaceful-shelf-12976.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(`https://peaceful-shelf-12976.herokuapp.com/api/categories`);
  } 

   getTags(): Observable<string[]>{
    return this.http.get<string[]>(`https://peaceful-shelf-12976.herokuapp.com/api/tags`);
    } 



     getAllPosts():Observable<BlogPost[]>{
     return this.http.get<BlogPost[]>(`https://peaceful-shelf-12976.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`)
     }

    

     newPost(data:BlogPost):Observable<any>{
       return this.http.post<any>(`https://peaceful-shelf-12976.herokuapp.com/api/posts`,data);
     }


     // must invoke the "put" method
  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://peaceful-shelf-12976.herokuapp.com/api/posts/${id}`, data);
  }

  // must invoke the "delete" method
  deletePostById(id: string): Observable<any>{
    return this.http.delete<any>(`https://peaceful-shelf-12976.herokuapp.com/api/posts/${id}`);

  }
}
