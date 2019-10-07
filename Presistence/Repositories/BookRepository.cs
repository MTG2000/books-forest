using System.Linq;
using System.Threading.Tasks;
using books_app.Domain.Models;
using books_app.Domain.Repositories;
using books_app.Services;
using Microsoft.EntityFrameworkCore;

namespace books_app.Presistence.Repositories
{
    public class BookRepository : Repository<Book>, IBookRepository
    {
        private readonly IAuthService auth;

        public BookRepository(AppDbContext _appDbContext, IAuthService _auth) : base(_appDbContext)
        {
            auth = _auth;
        }

        public async Task<string> AddBookAsync(Book book, int[] tagsIds)
        {
            var tags = await AppDbContext.Tags.Where(t => tagsIds.Contains(t.Id)).ToListAsync();
            await AddAsync(book);
            foreach (var tag in tags)
            {
                book.BookTags.Add(new BookTag { BookId = book.Id, TagId = tag.Id });
            }
            await SaveAsync();
            // var tempTags = book.BookTags.ToList();
            // foreach (var i in tempTags)
            // {
            //     System.Console.WriteLine(i.Tag.Name);
            // }
            return book.Id.ToString();
        }
    }
}