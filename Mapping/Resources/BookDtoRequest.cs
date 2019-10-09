using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace books_app.Domain.Models
{
    public class BookDtoRequest
    {
        [Required]
        [MinLength(5), MaxLength(30)]
        public string Title { get; set; }

        [MinLength(5), MaxLength(30)]
        public string Author { get; set; }

        public int NumberOfPages { get; set; }

        public string Image { get; set; }


        public IList<int> Tags { get; set; } = new List<int>();
    }
}