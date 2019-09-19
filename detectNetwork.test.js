describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901231') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });

});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {

  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011123412341234').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011123456789012345').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6511123412341234').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6511123456789012345').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      var ccNumber = "1234567890123";
      var ccNumber1 = "1234567890123456";
      it('has a prefix of ' + prefix + ' and a length of 16',function(){
        detectNetwork(prefix+ccNumber).should.equal("Discover");
      });
      it('has a prefix of ' + prefix + ' and a length of 19',function(){
        detectNetwork(prefix+ccNumber1).should.equal("Discover");
      });

    })(prefix)}

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();

  for (var length = 12; length <= 19; length++){
    (function(length){
      var cardNumber = "1234567890123456";

      it("has a prefix of 5018 and a length of " + length, function(){
        detectNetwork(5018+cardNumber.slice(0,length-4)).should.equal('Maestro');
      });
      it("has a prefix of 5020 and a length of " + length, function(){
        detectNetwork(5020+cardNumber.slice(0,length-4)).should.equal('Maestro');
      });
      it("has a prefix of 5038 and a length of " + length, function(){
        detectNetwork(5038+cardNumber.slice(0,length-4)).should.equal('Maestro');
      });
      it("has a prefix of 6304 and a length of " + length, function(){
        detectNetwork(6304+cardNumber.slice(0,length-4)).should.equal('Maestro');
      });


    })(length)}

});

describe('China UnionPay', function() {

  var should = chai.should();

  for (var prefix = 622126; prefix <= 622925; prefix++){
    (function(length){
      var cardNumber = "1234567890123456789";

      it("has a prefix of" + prefix + "and a length of 16" + length, function(){
        detectNetwork(prefix+cardNumber.slice(0,10)).should.equal('China UnionPay')});
      it("has a prefix of" + prefix + "and a length of 17" + length, function(){
        detectNetwork(prefix+cardNumber.slice(0,11)).should.equal('China UnionPay')});
      it("has a prefix of" + prefix + "and a length of 18" + length, function(){
        detectNetwork(prefix+cardNumber.slice(0,12)).should.equal('China UnionPay')});
        it("has a prefix of" + prefix + "and a length of 19" + length, function(){
        detectNetwork(prefix+cardNumber.slice(0,13)).should.equal('China UnionPay')});
    })(prefix)}

    for (var prefix = 624; prefix <= 626; prefix++){
      (function(length){
        var cardNumber = "1234567890123456789";

        it("has a prefix of" + prefix + "and a length of 16" + length, function(){
          detectNetwork(prefix+cardNumber.slice(0,13)).should.equal('China UnionPay')});
        it("has a prefix of" + prefix + "and a length of 17" + length, function(){
          detectNetwork(prefix+cardNumber.slice(0,14)).should.equal('China UnionPay')});
        it("has a prefix of" + prefix + "and a length of 18" + length, function(){
          detectNetwork(prefix+cardNumber.slice(0,15)).should.equal('China UnionPay')});
          it("has a prefix of" + prefix + "and a length of 19" + length, function(){
          detectNetwork(prefix+cardNumber.slice(0,16)).should.equal('China UnionPay')});
      })(prefix)}

      for (var prefix = 6282; prefix <= 6288; prefix++){
        (function(length){
          var cardNumber = "1234567890123456789";

          it("has a prefix of" + prefix + "and a length of 16" + length, function(){
            detectNetwork(prefix+cardNumber.slice(0,12)).should.equal('China UnionPay')});
          it("has a prefix of" + prefix + "and a length of 17" + length, function(){
            detectNetwork(prefix+cardNumber.slice(0,13)).should.equal('China UnionPay')});
          it("has a prefix of" + prefix + "and a length of 18" + length, function(){
            detectNetwork(prefix+cardNumber.slice(0,14)).should.equal('China UnionPay')});
            it("has a prefix of" + prefix + "and a length of 19" + length, function(){
            detectNetwork(prefix+cardNumber.slice(0,15)).should.equal('China UnionPay')});
        })(prefix)}
});

describe('Switch', function() {

  var should = chai.should();

  for (var length = 12; length <= 19; length++){
    (function(length){
      var cardNumber = "1234567890123456";

      it("has a prefix of 5018 and a length of " + length, function(){
        detectNetwork(5018+cardNumber.slice(0,length-4)).should.equal('Maestro');
      });
      it("has a prefix of 5020 and a length of " + length, function(){
        detectNetwork(5020+cardNumber.slice(0,length-4)).should.equal('Maestro');
      });
      it("has a prefix of 5038 and a length of " + length, function(){
        detectNetwork(5038+cardNumber.slice(0,length-4)).should.equal('Maestro');
      });
      it("has a prefix of 6304 and a length of " + length, function(){
        detectNetwork(6304+cardNumber.slice(0,length-4)).should.equal('Maestro');
      });


    })(length)}

});




