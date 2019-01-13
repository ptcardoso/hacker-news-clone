<template>
    <article class="container">
        <header>
            <h1>Hacker News</h1>
        </header>
        <ul>
            <li v-for="(newsItem, index) in newsItems" :key="newsItem.id">
                <NewsItemCmp :index="index + 1" :newsItem="newsItem"/>
            </li>
        </ul>

    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {loadTopStories} from '@/services/news'
import NewsItemCmp from '@/components/NewsItemCmp';
import {NewsItem} from '@/models'
import {EventBus} from '@/stores/eventBus'
import {NewsStoreEvents} from '@/stores/news'

@Component({
    components: {
        NewsItemCmp,
    }
})
export default class NewsList extends Vue {
    newsItems: NewsItem[] = [];

    created() {
        loadTopStories(25);
        EventBus.$on(NewsStoreEvents.UPDATED, this.updateNewsItems);
    }

    beforeDestroy() {
        EventBus.$off(NewsStoreEvents.UPDATED, this.updateNewsItems);
    }

    updateNewsItems(newsItems: NewsItem[]) {
        this.newsItems = newsItems;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
article.container {
    max-width: 1024px;
    background-color: #f6f6ef;
    margin: 0 auto;
}
header {
    background-color: #fc6721;
    padding: 5px;
}
h1 {
    margin: 0;
    font-size: 13px;
}
ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
</style>
