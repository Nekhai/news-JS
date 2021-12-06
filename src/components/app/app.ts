import AppController from '../controller/controller';
import { AppView } from '../view/appView';

export interface ISource {
    id: string;
    name: string;
}

export interface IArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: ISource;
    title: string;
    url: string;
    urlToImage: string;
}

export interface IData {
    status: string;
    totalResults?: number;
    articles?: IArticle[];
    sources?: ISource[];
}

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: IData) => this.view.drawNews(data)));
        this.controller.getSources((data: IData) => this.view.drawSources(data));
    }
}

export default App;
