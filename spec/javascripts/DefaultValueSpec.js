function fixture(element) {
  $('<div id="fixtures"/>').append(element).appendTo("body");
}

function teardownFixtures() {
  $("#fixtures").remove();
}

describe('defaultValue', function () {
  beforeEach(function() { fixture('<input type="text" id="address"/>'); });
  afterEach(function()  { teardownFixtures();                           });
  
  describe('before gaining focus', function (){
    it('displays the default value', function (){
      $("#address").defaultValue("Address");
      expect($("#address").val()).toEqual("Address");
    });
  });

  describe("when gaining focus", function(){
    it('displays nothing if no user-entered value', function (){
      $("#address").defaultValue("Address");
      $("#address").focus();
      expect($("#address").val()).toEqual("");
    });
    
    it("displays the user's input if not empty", function (){
      $("#address").defaultValue("Address");
      $("#address").val("Willowblue").focus();
      expect($("#address").val()).toEqual("Willowblue");
    });
  });
  
  describe("when losing focus", function(){
    it("displays the default value if empty", function(){
      $("#address").defaultValue("Address");
      $("#address").focus().blur();
      expect($("#address").val()).toEqual("Address");
    });
    
    it("displays the users input if not empty", function(){
      $("#address").defaultValue("Address");
      $("#address").focus().val("Willowblue").blur();
      expect($("#address").val()).toEqual("Willowblue");
    });
  });
  
  //TODO: test passing multiple default values to multiple inputs
});