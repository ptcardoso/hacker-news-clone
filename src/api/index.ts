import {NewsItem} from '@/models';

const BASE_URL = 'https://hacker-news.firebaseio.com/';

const Endpoints = {
    v0: {
        topStories: () => `${BASE_URL}/v0/topstories.json`,
        newsItem: (id: number) => `${BASE_URL}/v0/item/${id}.json`,
    },
};

export function getTopStories(): Promise<number[]> {
    return fetch(Endpoints.v0.topStories())
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}

export function getNewsItem(id: number): Promise<NewsItem> {
    return fetch(Endpoints.v0.newsItem(id))
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}
