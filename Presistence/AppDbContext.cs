using books_app.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace books_app.Presistence
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Book> Books { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //User Constranits
            modelBuilder.Entity<User>()
                .Property(u => u.IsAdmin)
                .HasDefaultValue(0);
            modelBuilder.Entity<User>()
                        .HasIndex(u => u.Name)
                        .IsUnique();

            //BookTag
            modelBuilder.Entity<BookTag>()
            .HasKey(pt => new { pt.BookId, pt.TagId });

            modelBuilder.Entity<BookTag>()
                .HasOne(pt => pt.Book)
                .WithMany(p => p.BookTags)
                .HasForeignKey(pt => pt.BookId);

            modelBuilder.Entity<BookTag>()
                .HasOne(pt => pt.Tag)
                .WithMany(t => t.BookTags)
                .HasForeignKey(pt => pt.TagId);

        }
    }
}