using Newtonsoft.Json;
using SearchingLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Searching.Solution.Web.Logic.Transport
{
  public  class QueryList
    {
        public static async Task<List<Categories>> GetCategories()
        {
            var result = await AccessService.ServiceCalled("GET", "GetCategories","");
            List<Categories> categories=JsonConvert.DeserializeObject<List<Categories>>(result);
            return categories;
        }
        public static async Task<List<Announcing>> GetAnnouncingFilter(AnnFilter _filter)
        {
            var param = JsonConvert.SerializeObject(new { filter = _filter });
            var result= await AccessService.ServiceCalled("POST", "GetAnnouncingFilter", param);
            List<Announcing> announcingForCategory = JsonConvert.DeserializeObject<List<Announcing>>(result);
            return announcingForCategory;
        }

        public static async Task<List<Announcing>> GetAnnouncing() 
        {
            var result = await AccessService.ServiceCalled("GET", "GetAnnouncing", "");
            List<Announcing> la = JsonConvert.DeserializeObject<List<Announcing>>(result);
            return la;
        }

        public static async Task<List<Announcing>> GetMyAnnouncing(int _id )
        {
            var param = JsonConvert.SerializeObject(new { id = _id });
            var result = await AccessService.ServiceCalled("POST", "GetMyAnnouncing", param);
            List<Announcing> MyAnn = JsonConvert.DeserializeObject<List<Announcing>>(result);
            return MyAnn;
        }

        public static async Task<List<Cities>> GetCityForCountry(int country_id)
        {
            var param = JsonConvert.SerializeObject(new { country_id = country_id });
            var result = await AccessService.ServiceCalled("POST", "GetCityForCountry", param);
            List<Cities> cities = JsonConvert.DeserializeObject<List<Cities>>(result);
            return cities;
        }

        public static async Task<List<AreasOfCity>> GetAreasOfCity(int city_id)
        {
            var param = JsonConvert.SerializeObject(new { City_id = city_id });
            var result = await AccessService.ServiceCalled("POST", "GetAreasOfCity", param);
            List<AreasOfCity> areasList = JsonConvert.DeserializeObject<List<AreasOfCity>>(result);
            return areasList;
        }

        public static async Task<string> TestFunction()
        {
            var result = await AccessService.ServiceCalled("GET","TestFunction","");
            List<Announcing> announcingForCategory = JsonConvert.DeserializeObject<List<Announcing>>(result);
            return result;
        }

        public static async Task<Announcing> GetAnnouncingFull(string announcing_id)
        {
            var result = await AccessService.ServiceCalled("POST", "GetAnnouncingFull", announcing_id);
            Announcing ann = JsonConvert.DeserializeObject<Announcing>(result);
            return ann;
        }

        public static async Task<ReturnValue> Registration(UserList _user)
        {
            var param = JsonConvert.SerializeObject(new { user = _user });
            var result = await AccessService.ServiceCalled("POST", "Registration", param);
            ReturnValue returnV = JsonConvert.DeserializeObject<ReturnValue>(result);
            return returnV;
        }

        public static async Task<ReturnValue> Auth(UserList _user)
        {
            var param = JsonConvert.SerializeObject(new { user = _user });
            var result = await AccessService.ServiceCalled("POST", "Auth", param);
            ReturnValue returnV = JsonConvert.DeserializeObject<ReturnValue>(result);
            return returnV;

        }

        public static async Task<UserList> GetMyUser(string mail)
        {
            var param = JsonConvert.SerializeObject(new { mail = mail });
            var result = await AccessService.ServiceCalled("POST", "GetMyUser", param);
            UserList _rUser = JsonConvert.DeserializeObject<UserList>(result);
            return _rUser;
        }

        public static async Task<List<Country>> GetCountries()
        {
            var result = await AccessService.ServiceCalled("GET", "GetCountryList", "");
            List<Country> _countries = JsonConvert.DeserializeObject<List<Country>>(result);
            return _countries;
        }

        public static async Task<ReturnValue> AddtoSelected(Selected_Announcing _ann)
        {
            ReturnValue returnV = new ReturnValue();
            var param =JsonConvert.SerializeObject(new { ann = _ann });
            var result = await AccessService.ServiceCalled("POST", "AddToSelected", param);
            returnV = JsonConvert.DeserializeObject<ReturnValue>(result);
            return returnV;
        }

        public static async Task<ReturnValue> AddtoFavorite(Selected_Announcing _ann)
        {
            ReturnValue returnV = new ReturnValue();
            var param = JsonConvert.SerializeObject(new { ann = _ann });
            var result = await AccessService.ServiceCalled("POST", "AddToFavorite", param);
             returnV = JsonConvert.DeserializeObject<ReturnValue>(result);
            return returnV;
        }

        public static async Task<ReturnValue> AddAnnouncing(Announcing _ann)
        {
            ReturnValue result = new ReturnValue();
            var param = JsonConvert.SerializeObject(new { ann = _ann });
            var jsonResult = await AccessService.ServiceCalled("POST", "AddAnnouncing", param);
            result = JsonConvert.DeserializeObject<ReturnValue>(jsonResult);
            return result;
        }

        public static async Task<ReturnValue> DeleteAnnouncing(int id)
        {
            ReturnValue result = new ReturnValue();
            var param = JsonConvert.SerializeObject(new { Announcing_id = id });
            var jsonResult = await AccessService.ServiceCalled("POST", "DeleteAnnouncing", param);
            result = JsonConvert.DeserializeObject < ReturnValue > (jsonResult);
            return result;
        }

        public static async Task<ReturnValue>AddMessage(Messages msg)
        {
            ReturnValue result = new ReturnValue();
            var param = JsonConvert.SerializeObject(new { message = msg });
            var jsonResult = await AccessService.ServiceCalled("POST", "AddMessage", param);
            result = JsonConvert.DeserializeObject<ReturnValue>(jsonResult);
            return result;
        }

        public static async Task<ReturnValue>EditProfile(UserList user)
        {
            ReturnValue result = new ReturnValue();
            var param = JsonConvert.SerializeObject(new { user = user });
            var jsonResult = await AccessService.ServiceCalled("POST", "EditProfile", param);
            result = JsonConvert.DeserializeObject<ReturnValue>(jsonResult);
            return result;
        }

    }
}
