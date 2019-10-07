using System.Collections.Generic;
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

        public override async Task<IEnumerable<Book>> GetAllAsync()
        {
            var books = await AppDbContext.Books
                                        .Include(b => b.BookTags)
                                        .ThenInclude(bt => bt.Tag)
                                        .ToListAsync();
            return books;
        }

        public override async Task<Book> GetAsync(int id)
        {
            return await AppDbContext.Books
                                    .Where(b => b.Id == id)
                                    .Include(b => b.BookTags)
                                    .ThenInclude(bt => bt.Tag)
                                    .FirstOrDefaultAsync();
        }
    }
}