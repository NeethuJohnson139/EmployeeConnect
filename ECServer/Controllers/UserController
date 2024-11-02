using ECServer.Database;
using ECServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace ECServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataLayer _dataLayer;

        public UserController(DataLayer dataLayer)
        {
            _dataLayer = dataLayer;
        }

        // POST: api/User/Register
        [HttpPost("Register")]
        public IActionResult Register(Employee user)
        {
            try
            {
                // Hash the password using bcrypt
                user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.PasswordHash);

                // Parameters for the stored procedure
                var parameters = new Dictionary<string, object>
                {
                    { "@Username", user.Username },
                    { "@Email", user.Email },
                    { "@PasswordHash", user.PasswordHash },
                    { "@RoleId", user.RoleId },
                    { "@FirstName", user.FirstName },
                    { "@LastName", user.LastName },
                    { "@DateOfJoining", user.DateOfJoining },
                    { "@ProfilePicture", user.ProfilePicture },
                    { "@Phone", user.Phone }
                };

                // Call the stored procedure
                _dataLayer.ExecuteNonQuery("sp_RegisterUser", parameters);

                return Ok("User registered successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/User/Login
        [HttpPost("Login")]
        public IActionResult Login(LoginUser loginUser)
        {
            // Retrieve the user by email
            var parameters = new Dictionary<string, object> { { "@p_Username", loginUser.Username } };
            DataTable dt = _dataLayer.GetFromDb("sp_LoginUser", parameters);

            if (dt.Rows.Count == 0)
            {
                return Unauthorized("Invalid credentials.");
            }

            DataRow row = dt.Rows[0];
            string storedHash = row["PasswordHash"].ToString();

            // Verify the password with bcrypt
            if (!BCrypt.Net.BCrypt.Verify(loginUser.Password, storedHash))
            {
                return Unauthorized("Invalid credentials.");
            }

            var user = new Employee
            {
                UserId = Convert.ToInt32(row["UserId"]),
                Username = row["Username"].ToString(),
                Email = row["Email"].ToString(),
                RoleId = row["RoleId"] != DBNull.Value ? Convert.ToInt32(row["RoleId"]) : (int?)null,
                FirstName = row["FirstName"].ToString(),
                LastName = row["LastName"].ToString(),
                IsActive = Convert.ToBoolean(row["IsActive"])
            };

            return Ok(user);
        }
    }
}
