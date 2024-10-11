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

export const moneyFormatter = (fraction) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  minimumFractionDigits: 0,
  maximumFractionDigits: fraction
});

export const numberFormatter = new Intl.NumberFormat('en-US',{
  style: 'decimal',
  notation: 'standard',
  maximumFractionDigits: 2
})

export const getRelativeTime = (date: Date) => {
  const now = new Date();
  const { value, unit } = getTimeDifference(date, now);
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  return rtf.format(-value, unit as any).replace(' ago', '')
}

function getTimeDifference(date1: Date, date2: Date) {
  const seconds = Math.floor((date2 - date1) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return { value: years, unit: 'year' };
  if (months > 0) return { value: months, unit: 'month' };
  if (days > 0) return { value: days, unit: 'day' };
  if (hours > 0) return { value: hours, unit: 'hour' };
  if (minutes > 0) return { value: minutes, unit: 'minute' };
  return { value: seconds, unit: 'second' };
}