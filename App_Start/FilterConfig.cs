using System.Web;
using System.Web.Mvc;

namespace _25DH110874___Nguyen_Chau_Hoang_Long___Lab03
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
