var expect = require('chai').expect;
var assert = require('chai').assert;
var stringCalculator = require('../index').stringCalculator;
var getFunctionCount = require('../index').getFunctionCount;

describe('#TestCases stringCalculator()', function () {

  context('Testcase 1: Empty String', function () {
    it('should return 0', function () {
      expect(stringCalculator('')).to.equal(0)
    })
  })

  context(`Testcase 2: Handle an unknown amount of numbers`, function () {
    it('Handle an unknown amount of numbers', function () {
      expect(stringCalculator('1\n2,3, 6, 7, 8, 9, 10')).to.equal(46)
    })
  })

  context(`Testcase 3: with 1\\n2,3  == 6`, function () {
    it('should return sum of arguments, 1\\n2,3  == 6', function () {
      expect(stringCalculator('1\n2,3')).to.equal(6)
    })
  })

  context(`Testcase 4: with “//;\\n1;2” == 3`, function () {
    it('should return sum of arguments', function () {
      expect(stringCalculator('//;\n1;2')).to.equal(3)
    })
  })

  context('Testcase 5: With negative Number Params', function () {
    it('negatives not allowed', function () {
      expect(stringCalculator('//;\n1;-2')).to.equal('negatives not allowed')
    })
  })
  
  context('Testcase 6: With multiple negative Number Params', function () {
    it('negatives not allowed', function () {
      expect(stringCalculator('//;\n1;-2;-5,-6')).to.equal('negatives not allowed')
    })
  })

  context(`Testcase 7: returns how many times stringCalculator() was invoked`, function () {
    it('should return sum of arguments', function () {
      expect(getFunctionCount(4)).to.equal(4)
    })
  });

  context(`Testcase 9:  2 + 1001 == 2`, function () {
    it('should return sum of arguments', function () {
      expect(stringCalculator('2 + 1001')).to.equal(2)
    })
  })

  context(`Testcase 10: with //[***]\\n1***2***3  == 6`, function () {
    it('should return sum of arguments', function () {
      expect(stringCalculator('//[***]\n1***2***3')).to.equal(6)
    })
  })

  context(`Testcase 11: with //[*][%]\\n1*2%3  == 6`, function () {
    it('should return sum of arguments', function () {
      expect(stringCalculator('//[*][%]\n1*2%3')).to.equal(6)
    })
  })

  context(`Testcase 12: with //[**][%%]\\n1**2%%3  == 6`, function () {
    it('should return sum of arguments', function () {
      expect(stringCalculator('//[**][%%]\n1**2%%3')).to.equal(6)
    })
  })


});