<template>
  <div class="projects">
    <div class="projects_header">My projects:</div>
    <div class="projects_list">
      <div class="project_border">
        <div class="project">
          <div class="title">Cat bot</div>
          <div class="desc">A bot for messengers.</div>
          <div class="buttons">
            <RouterLink
              to="/projects/cat_bot"
              class="about_project_button green_button"
              >About project</RouterLink
            >
            <a
              class="github_button"
              href="https://github.com/Cat-TheBot"
              target="_blank"
            >
              <img alt="View project on github" src="/img/github.png" />
            </a>
          </div>
        </div>
      </div>
      <div class="project_border">
        <div class="project">
          <div class="title">Manga parser</div>
          <div class="desc">
            A python script that parses manga from websites with online view
            mode.
          </div>

          <div class="buttons">
            <RouterLink
              to="/projects/manga_parser"
              class="about_project_button green_button"
              >About project</RouterLink
            >
            <a
              class="github_button"
              href="https://github.com/Waujito/manga_parser"
              target="_blank"
            >
              <img alt="View project on github" src="/img/github.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
