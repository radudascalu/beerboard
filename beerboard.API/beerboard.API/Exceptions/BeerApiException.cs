using System;
using System.Net;

namespace beerboard.API.Exceptions
{
    public class BeerApiException : Exception
    {
        public BeerApiException(HttpStatusCode statusCode)
        {
            StatusCode = statusCode;
        }

        public HttpStatusCode StatusCode { get; set; }
    }
}