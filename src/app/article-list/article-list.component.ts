import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article'
import { Observable } from 'rxjs'
import { ArticleService } from '../article.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute) {
    this.articles = articleService.orderedArticles;
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const sourceKey = params['sourceKey'];
      this.articleService.updateArticles(sourceKey);
    })
  }

}
