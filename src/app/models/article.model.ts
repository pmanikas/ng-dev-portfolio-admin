export class Article {
  _id?: string | undefined;
  title: string;
  image: string;
  excerpt: string;
  medium: any;
  type: string;
  url: string;
  _model?: string;

  constructor() {
    this.title = '';
    this.image = '';
    this.excerpt = '';
    this.medium = null;
    this.type = '';
    this.url = '';
  }
}
