using System;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using static FluentAssertionsDemo.STD;

namespace FluentAssertionsDemo.Tests
{
    public class TestStudent
    {
        [OrderedTest(1)]
        public void Test_GetAllStudent()
        {
            // Act
            Student result = STD.GetStudentById(2);
            // Assert
            Assert.That(result, Has.Property("Name").EqualTo("Parth"));
        }
        [OrderedTest(3)]
        public void Test_TotalStudent()
        {
            // Assert
            Assert.That(STD.GetAllStudent(), Has.Count.EqualTo(3).And.All.Property("Name").Not.Null.And.All.Property("Percentage").GreaterThan(95));
        }
        [OrderedTest(2)]
        public void Test_GetStudentNameById()
        {
            // Assert
            Assert.That(STD.GetStudentNameById(1), Is.EqualTo("Parth"));
        }
        [OrderedTest(0)]
        public void Test_GetFirstRank()
        {
            // Arrange
            Student result = new Student() { Id = 1, Name = "Parth", Branch = "IT", Percentage = 99 };

            // Assert
            Assert.That(STD.GetFirstRank(), Has.Property("Name").EqualTo(result.Name).And.Property("Branch").EqualTo(result.Branch));
        }

        [TestCaseSource(sourceName: "TestSource")]
        public void MainTest(TestStructure test)
        {
            test.Test();
        }

        public static IEnumerable<TestCaseData> TestSource
        {
            get
            {
                var assembly = Assembly.GetExecutingAssembly();
                Dictionary<int, List<MethodInfo>> methods = assembly
                .GetTypes()
                .SelectMany(x => x.GetMethods())
                .Where(y => y.GetCustomAttributes().OfType<OrderedTestAttribute>().Any())
                .GroupBy(z => z.GetCustomAttribute<OrderedTestAttribute>().Ord)
                .ToDictionary(gdc => gdc.Key, gdc => gdc.ToList());
                foreach (var order in methods.Keys.OrderBy(x => x))
                {
                    foreach (var methodInfo in methods[order])
                    {
                        MethodInfo info = methodInfo;
                        yield return new TestCaseData(
                        new TestStructure
                        {
                            Test = () =>
                            {
                                object classInstance =
                                Activator.CreateInstance(info.DeclaringType, null);
                                info.Invoke(classInstance, null);
                            }
                        }).SetName(methodInfo.Name);
                    }
                }
            }
        }
    }
    public class TestStructure
    {
        public Action Test;
    }

    public class OrderedTestAttribute : Attribute
        {
            public int Ord { get; set; }
            public OrderedTestAttribute(int ord)
            {
                this.Ord = ord;
            }
        }
    }

