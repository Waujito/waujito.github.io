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
        <div class="new" v-for="gh_new in gh_news" :key="gh_new">
          <div class="data">
            <div class="ev_type">{{ gh_new.type }}</div>
            <div class="repo">{{ gh_new.repo.name }}</div>
          </div>

          <div class="timestamp">{{ gh_new.time_ago }}</div>
        </div>
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
        "https://api.github.com/users/waujito/events",
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
