

function updateTimeAndDay() {
    const now = new Date();
  const utcTime = now.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour12: false });
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

   document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
   document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
   console.log(utcTime)
console.log(currentDay)
console.log(document.querySelector('[data-testid="currentTimeUTC"]'));
console.log(document.querySelector('[data-testid="currentDay"]'));
}
updateTimeAndDay();
setInterval(updateTimeAndDay, 1000); // Update every second
