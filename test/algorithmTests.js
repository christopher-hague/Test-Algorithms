var assert = require('assert')
var algorithms = require("../algorithms.js")

describe("Algorithm Tests", function() {
  describe("#testing", function() {
    it("should return string 'testing 123'", function() {
      assert.equal(algorithms._test.testing(), "testing 123")
    })
  })

  describe("#palindrome", function() {
    describe("should determine if a string is a palindrome", function() {
      it("palindrome('noon') should return true", function() {
        assert.equal(algorithms._test.palindrome("noon"), true)
      })
      it("palindrome('moon') should return false", function() {
        assert.equal(algorithms._test.palindrome("moon"), false)
      })
    })
  })

  describe("#largestNums", function() {
    describe("should return an arr of all the greatest nums from each subarray", function() {
      var arr1 = [ [1,2,3], [4,5,6] ]
      var arr2 = [ [4], [5,9,1,5,3], [5,9,4] ]

      it("largestNums(arr1) returns an array", function() {
        assert.equal(Array.isArray(algorithms._test.largestNums(arr1)), true)
      })
      it("largestNums(arr1) returns [3, 6]", function() {
        assert.deepEqual(algorithms._test.largestNums(arr1), [3, 6])
      })
      it("largestNums(arr2) return [4, 9, 9]", function() {
        assert.deepEqual(algorithms._test.largestNums(arr2), [4, 9, 9])
      })
    })
  })

})
