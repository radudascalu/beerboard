using beerboard.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace beerboard.API.Client
{
    public interface IBeerApiClient
    {
        /// <summary>
        /// Searches the beer database given a query.
        /// </summary>
        Task<IEnumerable<Beer>> SearchAsync(string query);

        /// <summary>
        /// Gets beers based on a list of their ids.
        /// </summary>
        Task<IEnumerable<Beer>> GetBeersByIdsAsync(IEnumerable<string> beerIds);
    }
}