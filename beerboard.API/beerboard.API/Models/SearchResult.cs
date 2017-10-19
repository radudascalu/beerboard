using Newtonsoft.Json;
using System.Collections.Generic;

namespace beerboard.API.Models
{
    public class SearchResult
    {
        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("data")]
        public IEnumerable<Beer> Data { get;set; }
    }
}