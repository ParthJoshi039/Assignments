using Control_StructuresTesting;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using static Control_StructuresTesting.STD;

namespace ControlStructuresTesting.Tests
{
    [TestFixture]
    public class TestOperation
    {
        [Test]
        public void Test_SumOfnNumbers()
        {
            // Act
            var result = Operation.SumOfnNumbers(20);

            // Assert
            Assert.AreEqual(210, result);
        }

        [Test]
        public void Test_Max()
        {
            // Act
            var result = Operation.Max(4,3);
            var result1 = Operation.Max(3,4);
            var result2 = Operation.Max(30,40);

            // Assert
            Assert.AreEqual(4, result);
            Assert.AreNotEqual(3, result1);
            Assert.AreEqual(40, result2);
        }

        [Test]
        public void Test_Fact()
        {
            // Act
            var result = Operation.Fact(3);

            // Assert
            Assert.AreEqual(6, result);
        }

        [Test]
        [TestCase(1, 50, 50, 100)]
        [TestCase(2, 100, 20, 80)]
        [TestCase(3, 100, 20, 2000)]
        [TestCase(4, 100, 20, 5)]
        [TestCase(5, 100, 20, 0)]
        public void Test_Calc(int ch,int a,int b, float exp)
        {
            // Act
            var result = Operation.calc(ch,a,b);
            // Assert
            Assert.AreEqual(exp, result);
        }

        [Test]
        public void Test_Sum()
        {
            // Arrange
            var numbers = new List<int> { 5, 8, 3, 14, 9, 17, 0, 4};

            // Act
            var result = Operation.Sum(numbers);

            // Assert
            Assert.AreEqual(60, result);
        }   
        [Test]
        public void Test_Subtraction()
        {
            // Assert
            Assert.Catch<SystemException>(() => Operation.Subtraction(4,5));
            Assert.Throws<ArgumentException>(() => Operation.Subtraction(4,5));
        }

        [Test]
        public void Test_GetStudentById()
        {
            // Assert
            Assert.Throws<Exception>(() => STD.GetStudentById(4));
        }
        [Test]
        public void Test_GetStudentNameById()
        {
            Assert.Throws<NullReferenceException>(() => STD.GetStudentNameById(4));
        }
        [Test]
        public async Task Test_GetTotalStudent()
        {
            // Act
            int result = await STD.GetTotalStudent();

            // Assert
            Assert.AreEqual(3, result);
            Assert.AreNotEqual(4, result);
        }
        [Test]
        public async Task Test_GetFirstRank()
        {
            // Act
            Student result = await STD.GetFirstRank();

            // Assert
            Assert.AreEqual(99, result.Percentage);
        }
    }
}
