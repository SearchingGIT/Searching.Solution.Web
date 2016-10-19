using Searching.Solution.Web.Logic.Transport;
using SearchingLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Searching.Solution.Web.Controllers
{
    public class MessageController : Controller
    {
        public async Task<ActionResult> AddMessage(Messages msg)
        {
            ReturnValue result = new ReturnValue();
            result = await QueryList.AddMessage(msg);
            return Json(result);
        } 
        
    }
}