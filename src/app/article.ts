interface ArticleJSON {
    title: string;
    url: string;
    urlToImage: string;
    votes: number;
    publishedAt: string;
    description: string;
    author: string;
}

export class Article {

    public urlToImage: string;
    public url: string;

  // Article.fromJSON()
  static fromJSON(json: ArticleJSON): Article {
      let article = Object.create(Article.prototype);
      return Object.assign(article, json, { 
          votes: json.votes ? json.votes : 0,
          publishedAt: json.publishedAt ? new Date(json.publishedAt) : new Date()
        });
  }

  constructor(
    public title: string, 
    public description: string,
    public publishedAt: Date,
    public votes?: number ) {
      this.votes = votes || 0;
  }

  public upVote(): void {
    this.votes++;
  }

  public downVote(): void {
    this.votes--;
  }
}
