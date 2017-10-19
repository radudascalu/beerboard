using beerboard.API.Exceptions;
using beerboard.API.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace beerboard.API.Client
{
    public class BreweryDbApiClient : IBeerApiClient
    {
        private const string baseURL = "http://api.brewerydb.com/v2";
        private readonly string apiKey;

        public BreweryDbApiClient()
        {
            apiKey = ConfigurationManager.AppSettings["ApiKey"];
        }

        /// <summary>
        /// Searches beers after a give query using BreweryDB's API. Since the Search API of
        /// BreweryDB doesn't also return the beers' images, this method does additional requests 
        /// using GetBeersByIds to get them.
        public async Task<IEnumerable<Beer>> SearchAsync(string query)
        {
            using (var httpClient = new HttpClient())
            {
                var url = $"{baseURL}/search?q={query}&type=beer&key={apiKey}";
                var response = await httpClient.GetAsync(url);
                if (!response.IsSuccessStatusCode)
                    throw new BeerApiException(response.StatusCode);

                var searchResult = await response.Content.ReadAsAsync<SearchResult>();
                var beerIds = searchResult.Data.Select(x => x.Id);

                return await GetBeersByIdsAsync(beerIds);
            }
        }

        /// <summary>
        /// Gets beers by their ids from BreweryDB. Note that BreweryDB's API accepts a maximum
        /// of 10 ids per request. So depending on how many beerIds this method receives, it will
        /// do it in one or multiple requests.
        /// </summary>
        public async Task<IEnumerable<Beer>> GetBeersByIdsAsync(IEnumerable<string> beerIds)
        {
            if (beerIds == null)
                throw new ArgumentNullException(nameof(beerIds));

            var result = new List<Beer>();
            for (var batchNo = 0; batchNo <= beerIds.Count() / 10; batchNo++)
            {
                IEnumerable<string> beerIdsBatch = beerIds.Skip(batchNo * 10).Take(10);
                if (!beerIdsBatch.Any())
                    break;

                using (var httpClient = new HttpClient())
                {
                    var beerIdsConcatenated = string.Join(",", beerIdsBatch); 
                    var url = $"{baseURL}/beers?ids={beerIdsConcatenated}&key={apiKey}";
                    var response = await httpClient.GetAsync(url);
                    if (!response.IsSuccessStatusCode)
                        throw new BeerApiException(response.StatusCode);

                    var beerResult = await response.Content.ReadAsAsync<SearchResult>();
                    result.AddRange(beerResult.Data);
                }
            }

            return result;
        }
    }
}