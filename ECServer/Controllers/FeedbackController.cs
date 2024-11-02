using ECServer.Database;
using ECServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace ECServer.Controllers
{
    public class Feedback
    {
        public int FeedbackId { get; set; }
        public int? SenderId { get; set; }
        public int? ReceiverId { get; set; }
        public string? FeedbackText { get; set; }
        public int? Rating { get; set; }
        public DateTime? SubmittedAt { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly DataLayer _dataLayer;

        public FeedbackController(DataLayer dataLayer)
        {
            _dataLayer = dataLayer;
        }
        // GET: api/feedback
        [HttpGet]
        public IActionResult GetAllFeedBacks()
        {
           
                var dt = _dataLayer.GetFromDb("sp_GetAllFeedback"); 
                if (dt == null) return StatusCode(500, "Internal server error.");

                var feedbacks = new List<Feedback>();

                foreach (DataRow row in dt.Rows)
                {
                    feedbacks.Add(new Feedback
                    {
                        FeedbackId = Convert.ToInt32(row["FeedbackId"]),
                        SenderId = row["SenderId"] != DBNull.Value ? Convert.ToInt32(row["SenderId"]) : (int?)null,
                        ReceiverId = row["ReceiverId"] != DBNull.Value ? Convert.ToInt32(row["ReceiverId"]) : (int?)null,
                        FeedbackText = row["FeedbackText"].ToString(),
                        Rating = row["Rating"] != DBNull.Value ? Convert.ToInt32(row["Rating"]) : (int?)null,
                        SubmittedAt = row["SubmittedAt"] != DBNull.Value ? Convert.ToDateTime(row["SubmittedAt"]) : (DateTime?)null
                    });
                }

                return Ok(feedbacks);
            
        }

        // DELETE: api/feedback/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteFeedback(int id)
        {
            var parameters = new Dictionary<string, object>
    {
        { "@FeedbackId", id }
    };

            var result = _dataLayer.ExecuteNonQuery("sp_DeleteFeedback", parameters);
            if (result == -1) return StatusCode(500, "Error deleting feedback.");

            return NoContent();
        }

    }
}
