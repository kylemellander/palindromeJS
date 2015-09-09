describe('palindrome', function() {
  it('return false if a word is not a palindrome', function() {
    expect(palindrome("alyssa")).to.equal(false);
  });

  it("returns true if a word is a palindrome", function() {
    expect(palindrome("hello olleh")).to.equal(true);
  })

});
