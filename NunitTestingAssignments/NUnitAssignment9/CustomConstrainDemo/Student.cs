using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CustomConstrainDemo
{
        public class STD
        {
            List<Student> student = new List<Student>()
            {
                new Student(){Id=1,Name="Parth",Branch="IT",Percentage=99},
                new Student(){Id=2,Name="Parth",Branch="CE",Percentage=98},
                new Student(){Id=3,Name="Parth",Branch="EE",Percentage=97},
                new Student(){Id=3,Name="Parth",Branch="IT",Percentage=96},
                new Student(){Id=3,Name="Parth",Branch="IT",Percentage=95},
                new Student(){Id=3,Name="Parth",Branch="IT",Percentage=94},
            };
            public virtual List<Student> GetAllStudent()
            {
                return student;
            }
            public virtual List<Student> GetStudentsByBranch(string branch)
            {
                List<Student> std = student.Where(x => x.Branch == branch).ToList();
                if (std != null)
                {
                    throw new Exception("Not Found");
                }
                return std;
            }

            public Student GetStudentById(int id)
            {
                Student std = student.Where(x => x.Id == id).FirstOrDefault();
                if (std == null)
                {
                    throw new Exception("Not Found");
                }
                return std;
            }
            public virtual string GetStudentNameById(int id)
            {
                Student std = student.Where(x => x.Id == id).FirstOrDefault();
                return std.Name;
            }
            public virtual int GetTotalStudent()
            {
                int c = 0;
                c = GetAllStudent().Count();
                return c;
            }
            public virtual Student GetFirstRank()
            {
                Student std = new Student();
                std = GetAllStudent().OrderByDescending(x => x.Percentage).FirstOrDefault();
                return std;

            }
            public class Student
            {
                public int Id { get; set; }
                public String Name { get; set; }
                public String Branch { get; set; }
                public decimal Percentage { get; set; }
            }
        }
}
