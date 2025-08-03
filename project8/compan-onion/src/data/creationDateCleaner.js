export function cleanCreationDate(created_at)
{
    return new Date(created_at).toISOString().split('T')[0];
}

export function cleanCreationTime(created_at)
{
    const date = new Date(created_at);
    const isoDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
    const hours = String(date.getHours()).padStart(2, '0');   // HH
    const minutes = String(date.getMinutes()).padStart(2, '0'); // MM
    return `${isoDate} ${hours}:${minutes}`;
}
