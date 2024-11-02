using ECServer.Database;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace ECServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly DataLayer _dataLayer;

        public ProjectController(DataLayer dataLayer)
        {
            _dataLayer = dataLayer;
        }

        // GET: api/Project
        [HttpGet]
        public IActionResult GetAllProjects()
        {
            var dt = _dataLayer.GetFromDb("sp_GetAllProjects");
            if (dt == null) return StatusCode(500, "Internal server error.");

            var projects = new List<Project>();

            foreach (DataRow row in dt.Rows)
            {
                projects.Add(new Project
                {
                    ProjectId = Convert.ToInt32(row["ProjectId"]),
                    ProjectName = row["ProjectName"].ToString(),
                    Description = row["Description"].ToString(),
                    StartDate = Convert.ToDateTime(row["StartDate"]),
                    EndDate = Convert.ToDateTime(row["EndDate"]),
                    ManagerId = Convert.ToInt32(row["ManagerId"]),
                    Status = row["Status"].ToString(),
                    CreatedAt = Convert.ToDateTime(row["CreatedAt"])
                });
            }

            return Ok(projects);
        }

        // GET: api/Project/{id}
        [HttpGet("{id}")]
        public IActionResult GetProjectById(int id)
        {
            var parameters = new Dictionary<string, object>
            {
                { "@ProjectId", id }
            };

            var dt = _dataLayer.GetFromDb("sp_GetProjectById", parameters);
            if (dt == null || dt.Rows.Count == 0) return NotFound("Project not found.");

            var row = dt.Rows[0];
            var project = new Project
            {
                ProjectId = Convert.ToInt32(row["ProjectId"]),
                ProjectName = row["ProjectName"].ToString(),
                Description = row["Description"].ToString(),
                StartDate = Convert.ToDateTime(row["StartDate"]),
                EndDate = Convert.ToDateTime(row["EndDate"]),
                ManagerId = Convert.ToInt32(row["ManagerId"]),
                Status = row["Status"].ToString(),
                CreatedAt = Convert.ToDateTime(row["CreatedAt"])
            };

            return Ok(project);
        }

        // POST: api/Project
        [HttpPost]
        public IActionResult CreateProject(Project project)
        {
            var parameters = new Dictionary<string, object>
            {
                { "@ProjectName", project.ProjectName },
                { "@Description", project.Description },
                { "@StartDate", project.StartDate },
                { "@EndDate", project.EndDate },
                { "@ManagerId", project.ManagerId },
                { "@Status", project.Status }
            };

            var result = _dataLayer.ExecuteNonQuery("sp_AddProject", parameters);
            if (result == -1) return StatusCode(500, "Error creating project.");

            return CreatedAtAction(nameof(GetProjectById), new { id = project.ProjectId }, project);
        }

        // PUT: api/Project/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateProject(int id, Project project)
        {
            var parameters = new Dictionary<string, object>
            {
                { "@ProjectId", id },
                { "@ProjectName", project.ProjectName },
                { "@Description", project.Description },
                { "@StartDate", project.StartDate },
                { "@EndDate", project.EndDate },
                { "@ManagerId", project.ManagerId },
                { "@Status", project.Status }
            };

            var result = _dataLayer.ExecuteNonQuery("sp_UpdateProject", parameters);
            if (result == -1) return StatusCode(500, "Error updating project.");

            return NoContent();
        }

        // DELETE: api/Project/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteProject(int id)
        {
            var parameters = new Dictionary<string, object>
            {
                { "@ProjectId", id }
            };

            var result = _dataLayer.ExecuteNonQuery("sp_DeleteProject", parameters);
            if (result == -1) return StatusCode(500, "Error deleting project.");

            return NoContent();
        }
    }

    public class ProjectInsert
    {
       
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public
 DateTime StartDate
        { get; set; }
        public DateTime EndDate { get; set; }
        public int ManagerId { get; set; }
        public
 string Status
        { get; set; }
      
    }

    public class Project
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public
 DateTime StartDate
        { get; set; }
        public DateTime EndDate { get; set; }
        public int ManagerId { get; set; }
        public
 string Status
        { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
