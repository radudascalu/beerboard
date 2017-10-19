using Newtonsoft.Json;

namespace beerboard.API.Models
{
    public class Labels
    {
        [JsonProperty("medium")]
        public string Medium { get; set; }

        [JsonProperty("large")]
        public string Large { get; set; }

        [JsonProperty("icon")]
        public string Icon { get; set; }
    }
}