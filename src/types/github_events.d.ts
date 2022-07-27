// export type GithubUser = {
//   name?: string | null;
//   email?: string | null;
//   login: string;
//   id: number;
//   node_id: string;
//   avatar_url: string;
//   gravatar_id: string | null;
//   url: string;
//   html_url: string;
//   followers_url: string;
//   following_url: string;
//   gists_url: string;
//   starred_url: string;
//   subscriptions_url: string;
//   organizations_url: string;
//   repos_url: string;
//   events_url: string;
//   received_events_url: string;
//   type: string;
//   site_admin: boolean;
//   starred_at?: string;
// };

// export type GithubReactions = {
//   url: string;
//   total_count: number;
//   "+1": number;
//   "-1": number;
//   laugh: number;
//   confused: number;
//   heart: number;
//   hooray: number;
//   eyes: number;
//   rocket: number;
// };

// export type GithubCommitComment = {
//   html_url: string;
//   url: string;
//   id: number;
//   node_id: string;
//   body: string;
//   path: string | null;
//   position: number | null;
//   line: number | null;
//   commit_id: string;
//   user: GithubUser;
//   created_at: string;
//   updated_at: string;
//   author_association:
//     | "COLLABORATOR"
//     | "CONTRIBUTOR"
//     | "FIRST_TIMER"
//     | "FIRST_TIME_CONTRIBUTOR"
//     | "MANNEQUIN"
//     | "MEMBER"
//     | "NONE"
//     | "OWNER";
//   reactions?: GithubReactions;
// };
// export type GithubRepository = {
//   id: number; //
//   node_id: number; //
//   name: string; //
//   full_name: string; //
//   license: {
//     //
//     key: string;
//     name: string;
//     url: string | null;
//     spdx_id: string | null;
//     node_id: string;
//     html_url?: string;
//   };
//   organization?: GithubUser;
//   forks: number; //
//   permissions: {
//     admin: boolean;
//     maintain?: boolean;
//     push: boolean;
//     triage?: boolean;
//     pull: boolean;
//   };
//   owner: GithubUser; //
//   private: boolean; //
//   html_url: string; //
//   description: string | null; //
//   fork: boolean; //

//   url: string; //
//   archive_url: string; //
//   assignees_url: string; //
//   blobs_url: string; //
//   branches_url: string; //
//   collaborators_url: string; //
//   comments_url: string; //
//   commits_url: string; //
//   compare_url: string; //
//   contents_url: string; //
//   contributors_url: string; //
//   deployments_url: string; //
//   downloads_url: string; //
//   events_url: string; //
//   forks_url: string; //
//   git_commits_url: string; //
//   git_refs_url: string; //
//   git_tags_url: string; //
//   git_url: string; //
//   issue_comment_url: string; //
//   issue_events_url: string; //
//   issues_url: string; //
//   keys_url: string; //
//   labels_url: string; //
//   languages_url: string; //
//   merges_url: string; //
//   milestones_url: string; //
//   notifications_url: string; //
//   pulls_url: string; //
//   releases_url: string; //
//   ssh_url: string; //
//   stargazers_url: string; //
//   statuses_url: string; //
//   subscribers_url: string; //
//   subscription_url: string; //
//   tags_url: string; //
//   teams_url: string; //
//   trees_url: string; //
//   clone_url: string; //
//   mirror_url: string | null; //
//   hooks_url: string; //
//   svn_url: string; //

//   homepage: string | null; //
//   language: string | null; //
//   forks_count: number; //
//   stargazers_count: number;
//   watchers_count: number; //
//   size: number; //
//   default_branch: string; //
//   open_issues_count: number; //
//   is_template: boolean;
//   topics: string[];
//   has_issues: boolean; //
//   has_projects: boolean; //
//   has_wiki: boolean; //
//   has_pages: boolean; //
//   has_downloads: boolean; //
//   archived: boolean; //
//   disabled: boolean;
//   visibility: "public" | "private" | "internal";
//   pushed_at: string; //
//   created_at: string; //
//   updated_at: string; //
//   allow_rebase_merge?: boolean;
//   template_repository?: Gut;
//   temp_clone_token?: string | null;
//   allow_squash_merge?: boolean;
//   allow_auto_merge?: boolean;
//   delete_branch_on_merge?: boolean;
//   allow_update_branch?: boolean;
//   use_squash_pr_title_as_default?: boolean;
//   allow_merge_commit?: boolean;
//   allow_forking?: boolean;
//   subscribers_count?: number;
//   network_count?: number;
//   open_issues: number; //
//   watchers: number; //
//   master_branch?: string;
//   starred_at?: string;
// };
// export type GithubFullRepository = GithubRepository & {
//   template_repository?: GithubRepository;
//   temp_clone_token?: {
//     type: ["string", "null"];
//   };

//   subscribers_count: number;
//   network_count: number;

//   parent?: GithubRepository;
//   source?: GithubRepository;
//   anonymous_access_enabled?: boolean;
//   code_of_conduct?: {
//     title: "Code Of Conduct Simple";
//     description: "Code of Conduct Simple";
//     type: "object";
//     properties: {
//       url: {
//         type: "string";
//         format: "uri";
//         examples: [
//           "https://api.github.com/repos/github/docs/community/code_of_conduct"
//         ];
//       };
//       key: {
//         type: "string";
//         examples: ["citizen_code_of_conduct"];
//       };
//       name: {
//         type: "string";
//         examples: ["Citizen Code of Conduct"];
//       };
//       html_url: {
//         type: ["string", "null"];
//         format: "uri";
//         examples: [
//           "https://github.com/github/docs/blob/main/CODE_OF_CONDUCT.md"
//         ];
//       };
//     };
//     required: ["url", "key", "name", "html_url"];
//   };
//   security_and_analysis?: {
//     type: ["object", "null"];
//     properties: {
//       advanced_security: {
//         type: "object";
//         properties: {
//           status: {
//             type: "string";
//             enum: ["enabled", "disabled"];
//           };
//         };
//       };
//       secret_scanning: {
//         type: "object";
//         properties: {
//           status: {
//             type: "string";
//             enum: ["enabled", "disabled"];
//           };
//         };
//       };
//       secret_scanning_push_protection: {
//         type: "object";
//         properties: {
//           status: {
//             type: "string";
//             enum: ["enabled", "disabled"];
//           };
//         };
//       };
//     };
//   };
// };

// export type GithubEventPayloadCommitCommentEvent = {
//   action: "created";
//   comment: GithubCommitComment;
// };

// export type GithubEventPayloadCreateEvent = {
//   ref: string;
//   ref_type: string;
//   master_branch: string;
//   description: string;
// };

// export type GithubEventPayloadDeleteEvent = {
//   ref: string;
//   ref_type: string;
// };

// export type GithubEventPayloadForkEvent = {
//   forkee: {};
// };

// export type GithubEventPayloadGollumEvent = {
//   pages: {
//     page_name: string;
//     title: string;
//     action: string;
//     sha: string;
//     html_url: string;
//   }[];
// };

// export type GithubEventPayloadIssueCommentEvent = {
//   action: string;
//   changes?: {};
//   issue: {};
//   comment: {};
// };

// export type GithubEventPayloadIssuesEvent = {
//   action: string;
//   issue: {};
//   changes?: {};
//   assignee?: {};
//   label?: {};
// };

// export type GithubEventPayloadMemberEvent = {
//   action: string;
//   issue: {};
//   changes?: {};
//   assignee?: {};
//   label?: {};
// };

// export type GithubEventPayloadPublicEvent = {};

// export type GithubEventPayloadPullRequestEvent = {
//   action: string;
//   number: number;
//   changes?: any;
//   pull_request: {};
// };

// export type GithubEventPayloadPullRequestReviewEvent = {
//   action: string;
//   pull_request: {};
//   review: {};
// };

// export type GithubEventPayloadPullRequestReviewCommentEvent = {
//   action: string;
//   changes?: any;
//   pull_request: {};
//   comment: {};
// };

// export type GithubEventPayloadPushEvent = {
//   push_id: number;
//   size: number;
//   distinct_size: number;
//   ref: string;
//   head: string;
//   before: string;
//   commits: {
//     sha: string;
//     message: string;
//     author: {
//       name: string;
//       email: string;
//     };
//     url: string;
//     distinct: boolean;
//   }[];
// };

// export type GithubEventPayloadReleaseEvent = {
//   action: string;
//   changes?: any;
//   release: {};
// };

// export type GithubEventPayloadSponsorshipEvent = {
//   action: string;
//   effective_date: string;
//   changes?: any;
// };

// export type GithubEventPayloadWatchEvent = {
//   action: string;
// };

export type GithubEventPayload = any;
// | GithubEventPayloadCommitCommentEvent
// | GithubEventPayloadCreateEvent
// | GithubEventPayloadDeleteEvent
// | GithubEventPayloadForkEvent
// | GithubEventPayloadGollumEvent
// | GithubEventPayloadIssueCommentEvent
// | GithubEventPayloadMemberEvent
// | GithubEventPayloadPublicEvent
// | GithubEventPayloadPullRequestEvent
// | GithubEventPayloadPullRequestReviewEvent
// | GithubEventPayloadPullRequestReviewCommentEvent
// | GithubEventPayloadPushEvent
// | GithubEventPayloadReleaseEvent
// | GithubEventPayloadSponsorshipEvent
// | GithubEventPayloadWatchEvent;

export type GithubEventActor = {
  id: string | number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
};

export type GithubEventRepo = {
  id: string | number;
  name: string;
  url: string;
};

export type GithubEventOrganisation = {
  id: string | number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
};

export type GithubEvent = {
  type: string;
  public: boolean;
  payload: GithubEventPayload;
  repo: GithubEventRepo;
  actor: GithubEventActor;
  org: GithubEventOrganisation;
  created_at: string;
  id: string | number;
};

export type GithubEventsResponse = GithubEvent[];
