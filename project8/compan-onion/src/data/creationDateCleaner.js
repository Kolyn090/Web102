function cleanCreationDate(created_at)
{
    return new Date(created_at).toISOString().split('T')[0];
}

export default cleanCreationDate;
