using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GuestBookAPI.Models;
using Newtonsoft.Json;
using System.Net.Http;

namespace GuestBookAPI.Controllers
{
    [Route("api/[controller]")]
    public class GuestBookController : Controller
    {
        // GET api/values
        [HttpGet]
        public string Get()
        {
            using (QuestbookDBContext db = new QuestbookDBContext())
            {
                List<Questbook> questbook = db.Questbook.Select(x => x).ToList();
                string gJson = JsonConvert.SerializeObject(new {
                    jsonObj = questbook
                    });
                return gJson;

            }
                //return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{url}")]
        public string Get(string url)
        {
            using (QuestbookDBContext db = new QuestbookDBContext())
            {
                List<Questbook> questbook = db.Questbook.Where(x=>x.Url.Contains(url)).ToList();
                string gJson = JsonConvert.SerializeObject(new
                {
                    jsonObj = questbook
                });
                return gJson;

            }
        }

        // POST api/values
        [HttpPost]
        public string Post([FromBody]Questbook questbook)
        {
            try
            {
                using (QuestbookDBContext db = new QuestbookDBContext())
                {
                    db.Questbook.Add(questbook);
                    db.SaveChanges();


                    return "fgfg";
                }
            }
            catch (Exception ex)
            {

                return ex.ToString();
            }

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
