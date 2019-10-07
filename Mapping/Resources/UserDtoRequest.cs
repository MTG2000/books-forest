
using System.ComponentModel.DataAnnotations;

namespace books_app.Mapping.Resources
{
    public class UserDtoRequest
    {
        public int Id { get; set; }


        [Required]
        [MaxLength(30)]
        [MinLength(5)]
        public string Name { get; set; }


        [MaxLength(30)]
        [MinLength(8)]
        public string Password { get; set; }
    }
}