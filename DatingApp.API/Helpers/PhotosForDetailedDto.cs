using System;
using DatingApp.API.Helpers;


namespace DatingApp.API.Helpers
{
    public class PhotosForDetailedDto
    {
        
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
      
    }
}