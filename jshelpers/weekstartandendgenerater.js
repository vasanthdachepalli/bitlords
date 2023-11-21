function getMondayAndSunday(date) {
    // Clone the input date to avoid modifying the original
    const inputDate = new Date(date);
  
    // Find the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = inputDate.getDay();
  
    // Calculate the difference between the current day and Monday
    const daysUntilMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  
    // Calculate the date of Monday by subtracting the difference
    const monday = new Date(inputDate);
    monday.setDate(inputDate.getDate() - daysUntilMonday);
  
    // Calculate the date of Sunday by adding the remaining days (6 - daysUntilMonday)
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
  
    // Format the dates to 'DD/MM/YYYY'
    const formatDate = (date) => {
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth()).padStart(2, '0'); // January is 0!
      const yyyy = date.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    };
  
    return {
      monday: formatDate(monday),
      sunday: formatDate(sunday),
    };
  }


  module.exports = getMondayAndSunday;
  
  