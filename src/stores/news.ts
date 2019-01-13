import {NewsItem} from '@/models';
import {EventBus} from '@/stores/eventBus';

export const NewsStoreEvents = {
    UPDATED: 'newsstore.updated',
};

class NewsStore {
    private _news: NewsItem[];
    constructor() {
        this._news = [];
    }

    set news(ns: NewsItem[]) {
        this._news = ns;
        EventBus.$emit(NewsStoreEvents.UPDATED, this._news);
    }

    get news(): NewsItem[] {
        return this._news;
    }
}

export default new NewsStore();
