class GitHub {
  constructor() {
    this.client_id = "33954ab1cf1731d67c45";
    this.client_secret = "2a79f182c3a7709d67e97c30a62d3509dd8dcb27";
    this.headers = {
      Authorization: "Basic " + btoa(this.client_id + ":" + this.client_secret),
    };
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      {
        method: "GET",
        headers: this.headers,
      }
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      {
        method: "GET",
        headers: this.headers,
      }
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return { profile: profile, repos: repos };
  }
}
