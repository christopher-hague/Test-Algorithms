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

  describe("#includesSubstr", function() {
    var preamble = "We the People of the United States, in Order to form..."

    describe("should return true if the first str includes the second str", function() {
      it("includesSubstr(preamble, 'People') returns true", function() {
        assert.equal(algorithms._test.includesSubstr(preamble, "People"), true)
      })
      it("includesSubstr(preamble, '...') returns true", function() {
        assert.equal(algorithms._test.includesSubstr(preamble, "..."), true)
      })
      it("includesSubstr(preamble, 'ited States') returns true", function() {
        assert.equal(algorithms._test.includesSubstr(preamble, "ited States"), true)
      })
    })

    describe("should return false if the first str does not include the second str", function() {
      it("includesSubstr(preamble, 'we the people') returns false", function() {
        assert.equal(algorithms._test.includesSubstr(preamble, "we the people"), false)
      })
    })
  })

  describe("#confirmEnding", function() {
    describe("Should return true if str ends with target", function() {
      it("confirmEnding('once upon a time', 'time') returns true", function() {
        assert.equal(algorithms._test.confirmEnding("once upon a time", "time"), true)
      })
      it("confirmEnding('once upon a time', 'n a time') returns true", function() {
        assert.equal(algorithms._test.confirmEnding("once upon a time", "n a time"), true)
      })
    })

    describe("Should return false unless the str ends with target", function() {
      it("confirmEnding('If I only had a heart', 'If I') returns false", function() {
        assert.equal(algorithms._test.confirmEnding("If I only had a heart", "Heart"), false)
      })
    })
  })

  describe("#chunkArrInGroups", function() {
    describe("Should split an array into subarrays with a length equal to size", function() {
      it("chunkArrInGroups([1,2,3,4,5,6,7,8], 4) returns [ [1,2,3,4], [5,6,7,8] ]", function() {
        assert.deepEqual(algorithms._test.chunkArrInGroups([1,2,3,4,5,6,7,8], 4), [[1,2,3,4], [5,6,7,8]])
      })
      it("chunkArrInGroups([1,2,3,4], 3) returns [[1,2,3], [4]]", function() {
        assert.deepEqual(algorithms._test.chunkArrInGroups([1,2,3,4], 3), [[1,2,3], [4]])
      })
    })
  })

  describe("#slasher", function() {
    describe("Should return the remaining elements of arr after removing n elements from the head", function() {
      it("slasher([1,2,3], 2) returns [3]", function() {
        assert.equal(algorithms._test.slasher([1,2,3], 2), [3])
      })
    })
  })
})
