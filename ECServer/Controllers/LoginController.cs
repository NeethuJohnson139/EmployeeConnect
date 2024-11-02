using ECServer.Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ECServer.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        DataLayer dataLayer;
        readonly IConfiguration _iconfiguration;

        public LoginController(IConfiguration iconfiguration)
        {
            _iconfiguration = iconfiguration;
            dataLayer = new DataLayer(_iconfiguration);
        }
        
        
    }
}
