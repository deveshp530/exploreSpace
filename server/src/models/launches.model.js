const launches = new Map();

const launch = {
  mission: "kepler expoloration x",
  rocket: "expolorer is1",
  launchDate: new Date("May 30, 2030"),
  destination: "kepler-442 b",
  flightNumber: 100,
  customers: ["nasa", "ztm"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
