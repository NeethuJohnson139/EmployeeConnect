using ECServer.Database;
using ECServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace ECServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly DataLayer _dataLayer;

        public EmployeeController(DataLayer dataLayer)
        {
            _dataLayer = dataLayer;
        }

        // GET: api/Department
        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            var dt = _dataLayer.GetFromDb("sp_GetAllEmployees");
            if (dt == null) return StatusCode(500, "Internal server error.");

            var employees = new List<Emp>();

            foreach (DataRow row in dt.Rows)
            {
                employees.Add(new Emp
                {
                    // TO DO - wrong col name
                    EmployeeId = Convert.ToInt32(row["EmployeeId"]),
                    EmployeeName = row["EmployeeName"].ToString(),
                    DateOfJoining = Convert.ToDateTime(row["Dateofjoining"]),
                    Status = row["Status"].ToString(),
                    JobTitle = row["JobTitle"].ToString()

                });
            }

            return Ok(employees);
        }

        // GET: api/Employee /{id}
        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(int id)
        {
            var parameters = new Dictionary<string, object>
            {
                { "@EmployeeId", id }
            };

            var dt = _dataLayer.GetFromDb("sp_GetEmployeeById", parameters);
            if (dt == null || dt.Rows.Count == 0) return NotFound("Employee not found.");

            var row = dt.Rows[0];
            var employee = new Emp
            {
                EmployeeId = Convert.ToInt32(row["EmployeeId"]),
                EmployeeName = row["EmployeeName"].ToString(),
                DateOfJoining = Convert.ToDateTime(row["Dateofjoining"]),
                Status = row["Status"].ToString(),
                JobTitle = row["JobTitle"].ToString()
            };

            return Ok(employee);
        }

        // POST: api/Employee
        [HttpPost]
        public IActionResult CreateEmployee(Emp employee)
        {
            var parameters = new Dictionary<string, object>
            {
                { "@EmployeeName", employee.EmployeeName },
                { "@JobTitle", employee.JobTitle },
                { "@Dateofjoining", employee.DateOfJoining },
                { "@Status", employee.Status }
            };

            var result = _dataLayer.ExecuteNonQuery("sp_AddEmployee", parameters);
            if (result == -1) return StatusCode(500, "Error creating employee.");

            return CreatedAtAction(nameof(GetEmployeeById), new { id = employee.EmployeeId }, employee);
        }

        // PUT: api/Employee/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(int id, Emp employee)
        {
            var parameters = new Dictionary<string, object>
            {
                { "@EmployeeId", id },
                { "@EmployeeName", employee.EmployeeName },
                { "@JobTitle", employee.JobTitle },
                { "@Dateofjoining", employee.DateOfJoining },
                { "@Status", employee.Status }
            };

            var result = _dataLayer.ExecuteNonQuery("sp_UpdateEmployee", parameters);
            if (result == -1) return StatusCode(500, "Error updating employee.");

            return NoContent();
        }

        // DELETE: api/Employee/{id}
        [HttpDelete("{id}")]
        public IActionResult EmployeeDepartment(int id)
        {
            var parameters = new Dictionary<string, object>
            {
                { "@EmployeeId", id }
            };

            var result = _dataLayer.ExecuteNonQuery("sp_DeleteEmployee", parameters);
            if (result == -1) return StatusCode(500, "Error deleting employee.");

            return NoContent();
        }
    }
}
