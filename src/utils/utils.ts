export const formatDate = (date: Date) => {
  // Define options for formatting the date part
  let dateOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  };
  
  // Define options for formatting the time part
  let timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  
  // Create date and time formatters
  let dateFormatter = new Intl.DateTimeFormat('en-GB', dateOptions);
  let timeFormatter = new Intl.DateTimeFormat('en-GB', timeOptions);
  
  // Format the date and time parts separately
  let datePart = dateFormatter.format(date).replace(/\//g, '.'); // Replace slashes with dots
  let timePart = timeFormatter.format(date);

  // Combine date and time parts
  return `${datePart}, ${timePart}`;
}