import {getTopStories, getNewsItem} from '@/api';
import NewsStore from '@/stores/news';

export function loadTopStories(numberOfStores: number): void {
    getTopStories().then((topStoryIds) => {
        const storyIds = topStoryIds.slice(0, numberOfStores);
        Promise.all(storyIds.map((id) => getNewsItem(id)))
            .then((values) => {
                NewsStore.news = values;
            });
    });
}
