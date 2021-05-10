using System;
using System.Collections.Generic;
using System.Text;
using Moq;
using NUnit.Framework;
using static CustomConstrainDemo.STD;

namespace CustomConstrainDemo.Tests
{
    public class TestStudent
    {
        STD std;

        [SetUp]
        public void Setup()
        {
            std = new STD();
        }
        [Test]
        public void TestITStudentByBranch()
        {
            // Arrange 
            string branch = "IT";
            // Act
            List<Student> students = std.GetStudentsByBranch(branch);
            // Assert
            Assert.That(students, Is.checkBranch(branch));
        }
        [Test]
        public void TestCEStudentByBranch()
        {
            // Arrange 
            string branch = "CE";
            // Act
            List<Student> students = std.GetStudentsByBranch(branch);
            // Assert
            Assert.That(students, Is.checkBranch(branch));
        }
        [Test]
        public void TestGetAllStudents()
        {
            // Arrange 
            List<Student> student = new List<Student>()
            {
                new Student(){Id=1,Name="Parth",Branch="IT",Percentage=99},
                new Student(){Id=3,Name="Parth",Branch="IT",Percentage=96},
                new Student(){Id=3,Name="Parth",Branch="IT",Percentage=95},
                new Student(){Id=3,Name="Parth",Branch="IT",Percentage=94},
            };
            var mock = new Mock<STD>();
            mock.Setup(x => x.GetAllStudent()).Returns(student);
            // Act
            StudentData stdData = new StudentData(mock.Object);
            List<Student> students = stdData.GetAllStudent();
            // Assert
            Assert.That(Is.Equals(students.Count, student.Count));
        }
        [Test]
        public void TestITTotalStudentsByBranch()
        {
            // Arrange 
            List<Student> student = new List<Student>()
            {
                new Student(){Id=1,Name="Parth",Branch="IT",Percentage=99},
                new Student(){Id=3,Name="Parth",Branch="IT",Percentage=96},
                new Student(){Id=3,Name="Parth",Branch="IT",Percentage=95},
                new Student(){Id=3,Name="Parth",Branch="IT",Percentage=94},
            };
            var mock = new Mock<STD>();
            mock.Setup(x => x.GetAllStudent()).Returns(student);
            // Act
            StudentData stdData = new StudentData(mock.Object);
            List<Student> students = stdData.GetAllStudent();
            // Assert
            Assert.That(Is.Equals(students.Count, student.Count));
        }

        [Test]
        public void TestCETotalStudentsByBranch()
        {
            // Arrange 
            List<Student> student = new List<Student>()
            {
                new Student(){Id=1,Name="Parth",Branch="CE",Percentage=99},
                new Student(){Id=3,Name="Parth",Branch="CE",Percentage=96},
                new Student(){Id=3,Name="Parth",Branch="CE",Percentage=95},
                new Student(){Id=3,Name="Parth",Branch="CE",Percentage=94},
            };
            var mock = new Mock<STD>();
            mock.Setup(x => x.GetAllStudent()).Returns(student);
            // Act
            StudentData stdData = new StudentData(mock.Object);
            int actual = stdData.GetTotalStudentByBranch("CE");
            // Assert
            Assert.That(actual, Is.EqualTo(4));
        }

        [Test]
        public void TestITTotalStudents()
        {
            // Arrange 
            var mock = new Mock<STD>();
            mock.Setup(x => x.GetTotalStudent()).Returns(4);
            //Act
            StudentData stdData = new StudentData(mock.Object);
            int actual = stdData.GetTotalStudent();
            //Assert
            Assert.That(actual, Is.EqualTo(4));
        }

        [Test]
        public void TestFirstRank()
        {
            // Arrange 
            var student = new Student()
            {
                Id=1,Name="Parth",Branch="CE",Percentage=99
            };
            var mock = new Mock<STD>();
            mock.Setup(x => x.GetFirstRank()).Returns(student);
            // Act
            StudentData stdData = new StudentData(mock.Object);
            Student actual = stdData.GetFirstRank();
            // Assert
            Assert.That(Is.Equals(actual.Id,student.Id));
        }

    }
}
