export function makeGamesStats(id, year, gameData) {
  const stats = { year };
  if (!gameData) { return stats };
  const raw = gameData.games.filter(game => {
    return game.ateamid === id || game.hteamid === id;
  })
  stats.played = raw.length;
  stats.won = raw.reduce((curr, next) => next.winnerteamid === id ? curr + 1 : curr + 0, 0);
  stats.lost = stats.played - stats.won;
  return stats;
}

// Our function to sort the data based on the user selection
// See the HTML select element for the sort - there are two possible values, which in this function are the "key"
// 1. "a-z", 2. "z-a"
export function sortTeamData(teams, key) {

  // initial load, so bypass the sorting logic enitrely
  if (key === "-") { return teams; }

  const sorted = teams.sort((a, b) => {
    if (a.name > b.name) {
      return key === "a-z" ? 1 : -1;
    }
    if (a.name < b.name) {
      return key === "a-z" ? -1 : 1;
    }
    return 0;
  })
  return sorted;
}

// Our function to filter the data based on the user selection
// See the HTML select element for the filter - there are three possible values, which in this function are the "key"
// 1. "-", 2. "pre-1980", 3. "post-1980"
export function filterTeamData(teams, key) {
  const filtered = teams.filter((team) => {
    if (key === "-") {
      return team;
    } else {
      return key === "pre-1980" ? team.debut < 1980 : team.debut > 1980;
    }
  });
  return filtered;
}
