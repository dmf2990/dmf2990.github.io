

describe ('removeClass', () => {
    let myParagraph;
    
    beforeEach(() => {
       //arrange
        myParagraph = document.createElement('p');
        myParagraph.classList.add('test-class');
    });
    
    test('should remove a class from an element', () => {
        //act
        removeClass(myParagraph, 'test-class');

        //assert
        expect(myParagraph.classList.contains('test-class')).toBeFalsy();
        

    })
    //this goes in production code, since learning, just adding here to get the concept of testing
    function removeClass(element, classToRemove) {
            element.classList.remove(classToRemove);
        }
})

function removeClass(element, classToRemove) {}
