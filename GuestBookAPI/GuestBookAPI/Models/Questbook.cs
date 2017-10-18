using System;
using System.Collections.Generic;

namespace GuestBookAPI.Models
{
    public partial class Questbook
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string Category { get; set; }
    }
}
