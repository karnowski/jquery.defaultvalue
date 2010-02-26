function fixture(element) {
  $('<div id="fixtures"/>').append(element).appendTo("body");
}

function teardownFixtures() {
  $("#fixtures").remove();
}

describe('defaultvalue', function () {
  afterEach(function(){
    teardownFixtures();
  });
  
  // describe('before the user clicks in the input', function (){
    it('should display the default value', function (){
      fixture('<input type="text" name="stuff" value="" id="stuff"/>');
      $("#stuff").defaultValue("Address");
      expect($("#stuff").val()).toEqual("Address");
    });

    describe("when it gains focus", function(){
      it('should display nothing if no user-entered value', function (){
        fixture('<input type="text" name="stuff" value="" id="stuff"/>');
        $("#stuff").defaultValue("Address");
        $("#stuff").focus();
        expect($("#stuff").val()).toEqual("");
      });
      
      it("should display the user's input if not empty", function (){
        fixture('<input type="text" name="stuff" value="" id="stuff"/>');
        $("#stuff").defaultValue("Address");
        $("#stuff").val("Willowblue")
        $("#stuff").focus();
        expect($("#stuff").val()).toEqual("Willowblue");
      });
      
    });
    
    describe("when it loses focus", function(){
      it("should display the default value if empty", function(){
        fixture('<input type="text" name="stuff" value="" id="stuff"/>');
        $("#stuff").defaultValue("Address");
        $("#stuff").focus();
        $("#stuff").blur();
        expect($("#stuff").val()).toEqual("Address");
      });
      
      it("should display the users input if not empty", function(){
        fixture('<input type="text" name="stuff" value="" id="stuff"/>');
        $("#stuff").defaultValue("Address");
        $("#stuff").focus();
        $("#stuff").val("Willowblue")
        $("#stuff").blur();
        expect($("#stuff").val()).toEqual("Willowblue");
      });
      
      
    });
    
    
    
    
    // it('should display the default value', function (){
    //   fixture('<input type="text" name="stuff" value="stuff"/>');
    //   
    //   
    // });
    
  // });
});