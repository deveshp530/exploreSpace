const url = "http://localhost:3001";

async function httpGetPlanets() {
  const response = await fetch(`${url}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${url}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return (a.flightNumber = b.flightNumber);
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
