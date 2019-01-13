<template>
    <div class="item-container">
        <div>
            {{ index }}.
        </div>
        <div class="item-info-container">
            <h2>
                <a :href="newsItem.url" target="_blank">{{newsItem.title}}</a>
            </h2>
            <div class="item-score-info">
                {{newsItem.score}} points by {{newsItem.by}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {NewsItem} from '@/models'
@Component
export default class NewsItemCmp extends Vue {
    @Prop() index: number;
    @Prop() newsItem: NewsItem;
}
</script>

<style scoped lang="scss">
div.item-container {
    display: flex;
    font-size: 13px;
    padding: 5px;
}
div.item-info-container {
    margin-left: 5px;
    > div.item-score-info {
        font-size: 9px;
        margin-top: 2px;
        color: #828282;
    }
}
h2 {
    font-size: 13px;
    font-weight: 400;
    margin: 0;
    > a {
        color: black;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
        &:visited {
            color: #828282;
        }
    }
}
</style>