using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace books_app.Domain.Models
{
    public class Tag
    {
        public int Id { get; set; }
        [Required]

        [MinLength(5), MaxLength(30)]
        public string Name { get; set; }

        //Dont NEVER EVER FORGET TO INITIALIZE LISTS & COLLECTIONS in Models
        public ICollection<BookTag> BookTags { get; set; } = new List<BookTag>();

    }
}