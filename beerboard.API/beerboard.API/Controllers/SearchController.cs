using beerboard.API.Client;
using beerboard.API.Exceptions;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace beerboard.API.Controllers
{
    [EnableCors("*", "*", "*")]
    public class SearchController : ApiController
    {
        private readonly IBeerApiClient breweryApiClient;

        public SearchController(IBeerApiClient breweryApiClient)
        {
            this.breweryApiClient = breweryApiClient;
        }

        public async Task<IHttpActionResult> Get(string query)
        {
            try
            {
                var searchResult = await breweryApiClient.SearchAsync(query);
                return Ok(searchResult);
            }
            catch(BeerApiException ex)
            {
                return ResponseMessage(new HttpResponseMessage(ex.StatusCode));
            }
        }
    }
}
