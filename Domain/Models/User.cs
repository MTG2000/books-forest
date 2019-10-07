using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace books_app.Domain.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]

        [MinLength(5), MaxLength(30)]
        public string Name { get; set; }

        [Required]
        [MinLength(8), MaxLength(30)]

        public string Password { get; set; }

        [Column("IsAdmin", TypeName = "bit")]   //This is neccessary otherwise it wont work (I dont know WHYYYYY !!!!)
        public bool IsAdmin { get; set; }
    }
}