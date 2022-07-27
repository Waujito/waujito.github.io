<script setup lang="ts">
import type { GithubEventsResponse } from "@/types/github_events";
import axios from "axios";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
import { ref, type Ref } from "vue";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

const activity_loaded: Ref<boolean> = ref(false);
const gh_activity: Ref<GithubEventsResponse> = ref([]);

const load_gh_news = async () => {
  try {
    const response = await axios.get(
      // By default browser cache get requests
      // This is a CORS request so github does not accept "Cache-Control" header
      // Added timestamp parameter that will prevent caching
      `https://api.github.com/users/${
        import.meta.env.VITE_GITHUB_NICKNAME
      }/events/public?timestamp=${new Date()}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    activity_loaded.value = true;

    gh_activity.value = (<GithubEventsResponse>response.data).filter(
      (q) => q.type == "PushEvent" || q.type == "ReleaseEvent"
    );

    //gh_event.time_ago = timeAgo.format(new Date(gh_event.created_at));
  } catch (error) {
    alert("Cannot load github news");
    console.log(error);
  }
};

load_gh_news();
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
      <div class="news" v-if="activity_loaded">
        <tippy
          class="new"
          v-for="gh_event in gh_activity"
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
            <div class="ev_type">
              {{
                gh_event.type == "PushEvent"
                  ? "Pushed"
                  : gh_event.type == "ReleaseEvent"
                  ? "Released"
                  : gh_event.type
              }}
            </div>
            <a
              class="repo link"
              :href="`https://github.com/${gh_event.repo.name}`"
              target="_blank"
              >{{ gh_event.repo.name }}</a
            >
          </div>

          <div class="timestamp">
            {{ timeAgo.format(new Date(gh_event.created_at)) }}
          </div>

          <template #content>
            <div class="activity_tooltip">
              <div class="ev_type">{{ gh_event.type }}</div>
              <a
                class="repo link"
                :href="`https://github.com/${gh_event.repo.name}`"
                target="_blank"
                >{{ gh_event.repo.name }}</a
              >
              <span v-if="gh_event.type == 'PushEvent'">
                <tippy
                  v-tippy="{
                    animateFill: false,
                    animation: 'scale',
                    arrow: false,
                    interactive: true,
                  }"
                >
                  <span class="link"
                    >{{ gh_event.payload.commits.length }} commits</span
                  >

                  <template #content>
                    <div class="commits_tooltip">
                      <a
                        class="commit_tooltip link"
                        v-for="commit in gh_event.payload.commits"
                        :key="commit"
                        :href="`https://github.com/${gh_event.repo.name}/commit/${commit.sha}`"
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
                  gh_event.type == 'ReleaseEvent' &&
                  gh_event.payload &&
                  gh_event.payload.release &&
                  gh_event.payload.release.name
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
                        :href="`https://github.com/${gh_event.repo.name}/releases/tag/${gh_event.payload.release.tag_name}`"
                      >
                        {{ gh_event.payload.release.name }}
                      </a>
                    </div>
                  </template>
                </tippy>
              </span>

              <div class="timestamp">
                {{ timeAgo.format(new Date(gh_event.created_at)) }}
              </div>
            </div>
          </template>
        </tippy>
      </div>
    </div>
  </div>
</template>
