using System;

namespace books_app.Controllers
{
    public class Response
    {
        public string message { get; }

        public Response(string message)
        {
            this.message = message;
        }

    }
}