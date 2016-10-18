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
    public class AnnController : Controller
    {
        // GET: Ann

        public ActionResult AnnouncingList()
        {
            return View();
        }
        public async Task<ActionResult> GetAnnFilter(AnnFilter filter)
        {
            List<Announcing> la = new List<Announcing>();
            la = await QueryList.GetAnnouncingFilter(filter);
            return Json(la);
        }
       
        public async Task<ActionResult> GetAnnFull(int announcing_id)
        {
            Announcing ann = new Announcing();
            ann = await QueryList.GetAnnouncingFull(announcing_id.ToString());
            return Json(ann);
        }

        public async Task<ActionResult> AddtoSelected(Selected_Announcing ann)
        {
            ReturnValue result = new ReturnValue();
            result=await QueryList.AddtoSelected(ann); 
            return Json(result);
        }

        public async Task<ActionResult> AddtoFavorite(Selected_Announcing ann)
        {
            ReturnValue result = new ReturnValue();
            result = await QueryList.AddtoFavorite(ann);
            return Json(result);
        }

        public async Task<ActionResult>GetCountries()
        {
            List<Country> lc = new List<Country>();
            lc = await QueryList.GetCountries();
            return Json(lc);
        }
        public async Task<ActionResult> GetCityOfCountries(int country_id)
        {
            List<Cities> lc = new List<Cities>();
            lc = await QueryList.GetCityForCountry(country_id);
            return Json(lc);
        }
        public async Task<ActionResult>GetAreasOfCity(int city_id)
        {
            List<AreasOfCity> la = new List<AreasOfCity>(city_id);
            la = await QueryList.GetAreasOfCity(city_id);
            return Json(la);
        }

        public async Task<ActionResult> AddAnnouncing(Announcing ann)
        {
            ReturnValue result = new ReturnValue();
            result = await QueryList.AddAnnouncing(ann);
            return Json(result);
        }
    }
}