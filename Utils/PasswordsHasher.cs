using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
namespace books_app.Utils
{

    public sealed class PasswordHasher
    {
        //     public static string Create(string value, string salt)
        //     {
        //         var valueBytes = KeyDerivation.Pbkdf2(
        //                             password: value,
        //                             salt: Encoding.UTF8.GetBytes(salt),
        //                             prf: KeyDerivationPrf.HMACSHA512,
        //                             iterationCount: 10000,
        //                             numBytesRequested: 256 / 8);

        //         return Convert.ToBase64String(valueBytes);
        //     }

        //     public static bool Validate(string value, string salt, string hash)
        //     {
        //         var newHash = Create(value, salt);
        //         return newHash == hash;
        //     }

        //     public static string CreateSalt()
        //     {
        //         byte[] randomBytes = new byte[128 / 8];
        //         using (var generator = RandomNumberGenerator.Create())
        //         {
        //             generator.GetBytes(randomBytes);
        //             return Convert.ToBase64String(randomBytes);
        //         }
        //     }
        private const int SaltSize = 16; // 128 bit 
        private const int KeySize = 32; // 256 bit
        private const int Iterations = 1000; // 256 bit




        public static string Hash(string password)
        {
            using (var algorithm = new Rfc2898DeriveBytes(
              password,
              SaltSize,
              Iterations,
              HashAlgorithmName.SHA512))
            {
                var key = Convert.ToBase64String(algorithm.GetBytes(KeySize));
                var salt = Convert.ToBase64String(algorithm.Salt);

                return $"{Iterations}.{salt}.{key}";
            }
        }

        public static (bool Verified, bool NeedsUpgrade) Check(string hash, string password)
        {
            var parts = hash.Split('.', 3);

            if (parts.Length != 3)
            {
                throw new FormatException("Unexpected hash format. " +
                  "Should be formatted as `{iterations}.{salt}.{hash}`");
            }

            var iterations = Convert.ToInt32(parts[0]);
            var salt = Convert.FromBase64String(parts[1]);
            var key = Convert.FromBase64String(parts[2]);

            var needsUpgrade = iterations != Iterations;

            using (var algorithm = new Rfc2898DeriveBytes(
              password,
              salt,
              iterations,
              HashAlgorithmName.SHA512))
            {
                var keyToCheck = algorithm.GetBytes(KeySize);

                var verified = keyToCheck.SequenceEqual(key);

                return (verified, needsUpgrade);
            }
        }
    }


}