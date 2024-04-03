const responseTimes = {
  "user1": [
    { "timestamp": "2022-08-10T16:00:00Z", "responseTime": 1000 },
    { "timestamp": "2022-08-10T16:01:00Z", "responseTime": 500 },
    { "timestamp": "2022-08-10T16:02:00Z", "responseTime": 750 }
  ],
  "user2": [
    { "timestamp": "2022-08-10T16:00:00Z", "responseTime": 1200 },
    { "timestamp": "2022-08-10T16:01:00Z", "responseTime": 600 },
    { "timestamp": "2022-08-10T16:02:00Z", "responseTime": 800 }
  ]
};

const calculateAverageResponseTime = (userResponses) => {
  return userResponses.reduce((total, { responseTime }) => total + responseTime, 0) / userResponses.length;
};

const averageResponseTimes = Object.fromEntries(
  Object.entries(responseTimes).map(([user, responses]) => [user, calculateAverageResponseTime(responses)])
);

console.log(averageResponseTimes);
