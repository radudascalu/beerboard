using Newtonsoft.Json;

namespace beerboard.API.Models
{
    public class Beer
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("abv")]
        public string Abv { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("isOrganic")]
        public string IsOrganic { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("labels")]
        public Labels Labels { get; set; }
    }
}