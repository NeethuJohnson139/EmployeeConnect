namespace ECServer.Models
{
    // TO DO - Why do we need Employee class ?
    public class Employee
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public int? RoleId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? DateOfJoining { get; set; }
        public string? ProfilePicture { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string? Phone { get; set; }
    }
}
