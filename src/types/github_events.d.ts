export type GithubEventPayload = any;

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
