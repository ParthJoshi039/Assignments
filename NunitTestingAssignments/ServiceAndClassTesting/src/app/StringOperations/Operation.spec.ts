import { Operatios } from './Operations';


describe('String Operation Testing', () => {
    let string : Operatios;


beforeEach(() => {
    string = new Operatios();
  
    });
  
    afterEach(() => {
     // string = null;
  });

  it('Uppercase Success',()=>{

    // Arrange
    let str="parth";
    // Act
    let result=string.convertToUpperCase(str);
    // Assert
    expect(result=="PARTH").toBeTruthy();
});
it('Uppercase Failed',()=>{

    // Arrange
    let str="parth";
    // Act
    let result=string.convertToUpperCase(str);
    // Assert
    expect(result=="parth").toBeFalsy();
});

it('Lowercase Success',()=>{

    // Arrange
    let str="PARTH";
    // Act
    let result=string.convertToLowerCase(str);
    // Assert
    expect(result=="parth").toBeTruthy();
});

it('ToString Success',()=>{

    // Arrange
    let str="PARTH";
    // Act
    let result=string.convertToString(str);
    // Assert
    expect(result=="PARTH").toBeTruthy();
});

it('ToString Failed',()=>{

    // Arrange
    let str="PARTH";
    // Act
    let result=string.convertToString(str);
    // Assert
    expect(result=="parth").toBeFalsy();
});

it('Concat Success',()=>{

    // Arrange
    let str1="PARTH";
    let str2="JOSHI";
    // Act
    let result=string.Concat(str1,str2);
    // Assert
    expect(result=="PARTHJOSHI").toBeTruthy();
});

it('Concat Failed',()=>{

    // Arrange
    let str1="PARTH";
    let str2="JOSHI";
    // Act
    let result=string.Concat(str1,str2);
    // Assert
    expect(result=="PARTH JOSHI").toBeFalsy();
});
});