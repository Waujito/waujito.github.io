<script setup>
import axios from "axios";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
</script>

<template>
  <div id="root">
    <div class="about">
      <div class="text">
        Hello there and welcome to my personal website!<br /><br />
        My name is Waujito. Real name is Vetrov Vadim.<br />
        I am a programer. Programming is a really fun and cool hobby for me. I
        love it 💖<br />
        I'm currently learning programming languages such as Python, PHP(with
        Laravel), JavaScript(with Vue.js)
      </div>
      <div class="links">
        <a
          class="github_button link"
          href="https://github.com/Waujito"
          target="_blank"
        >
          <img alt="View project on github" src="/img/github.png" />
        </a>

        <a class="link" href="https://t.me/waujito" target="_blank"
          ><img alt="" src="/img/telegram.svg"
        /></a>
      </div>
    </div>

    <div class="gh-news">
      <div class="title">Github Activity</div>
      <div class="news">
        <tippy
          class="new"
          v-for="gh_new in gh_news"
          :key="gh_new"
          v-tippy="{
            arrow: true,
            animateFill: false,
            animation: 'scale',
            theme: 'translucent',
            interactive: true,
            followCursor: 'horizontal',
          }"
        >
          <div class="data">
            <div class="ev_type">{{ gh_new.type }}</div>
            <a
              class="repo link"
              :href="`https://github.com/${gh_new.repo.name}`"
              target="_blank"
              >{{ gh_new.repo.name }}</a
            >
          </div>

          <div class="timestamp">{{ gh_new.time_ago }}</div>

          <template #content>
            <div class="activity_tooltip">
              <div class="ev_type">{{ gh_new.type }}</div>
              <a
                class="repo link"
                :href="`https://github.com/${gh_new.repo.name}`"
                target="_blank"
                >{{ gh_new.repo.name }}</a
              >
              <span v-if="gh_new.type == 'Pushed to '">
                <tippy
                  v-tippy="{
                    animateFill: false,
                    animation: 'scale',
                    arrow: false,
                    interactive: true,
                  }"
                >
                  <span class="link"
                    >{{ gh_new.payload.commits.length }} commits</span
                  >

                  <template #content>
                    <div class="commits_tooltip">
                      <a
                        class="commit_tooltip link"
                        v-for="commit in gh_new.payload.commits"
                        :key="commit"
                        :href="`https://github.com/${gh_new.repo.name}/commit/${commit.sha}`"
                        target="_blank"
                      >
                        {{ commit.message }}
                      </a>
                    </div>
                  </template>
                </tippy></span
              >
              <span
                v-else-if="
                  gh_new.type == 'Released ' &&
                  gh_new.payload &&
                  gh_new.payload.release &&
                  gh_new.payload.release.name
                "
              >
                <tippy
                  v-tippy="{
                    animateFill: false,
                    animation: 'scale',
                    interactive: true,
                    arrow: false,
                  }"
                >
                  <span class="link">Release details</span>
                  <template #content>
                    <div class="release_tooltip">
                      <a
                        class="release_name link"
                        target="_blank"
                        :href="`https://github.com/${gh_new.repo.name}/releases/tag/${gh_new.payload.release.tag_name}`"
                      >
                        {{ gh_new.payload.release.name }}
                      </a>
                    </div>
                  </template>
                </tippy>
              </span>

              <div class="timestamp">{{ gh_new.time_ago }}</div>
            </div>
          </template>
        </tippy>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news_loaded: false,
      gh_news: [],
    };
  },
  mounted() {
    this.load_gh_news();
  },
  methods: {
    async load_gh_news() {
      let response = await axios.get(
        // By default browser cache get requests
        // Because this is a CORS request and github does not accept "Cache-Control" header
        // Added timestamp parameter that will prevent caching
        `https://api.github.com/users/waujito/events?timestamp=${new Date()}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status == 200) {
        //this.gh_news = response.data;
        this.news_loaded = true;

        const timeAgo = new TimeAgo("en_US");

        for (let n in response.data) {
          let gh_event = response.data[n];

          if (gh_event.type == "PushEvent") {
            gh_event.type = "Pushed to ";
          } else if (gh_event.type == "ReleaseEvent") {
            gh_event.type = "Released ";
          } else {
            continue;
          }

          gh_event.time_ago = timeAgo.format(new Date(gh_event.created_at));

          this.gh_news.push(gh_event);
        }
      } else {
        alert("Cannot load github news");
        console.log(response);
      }
    },
  },
};
</script>
