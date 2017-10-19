using System.Web.Http;
using Microsoft.Practices.Unity;
using beerboard.API.Client;
using System.Net.Http.Headers;

namespace beerboard.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.EnableCors();
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "SearchApi",
                routeTemplate: "api/{controller}/{query}",
                defaults: new { query = RouteParameter.Optional }
            );

            var container = new UnityContainer();
            container.RegisterType<IBeerApiClient, BreweryDbApiClient>();

            config.DependencyResolver = new UnityResolver(container);
        }
    }
}
