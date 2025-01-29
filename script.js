const searchbar=
document.getelementbyid('search-bar');
const searchbutton =
document.getelementbyid('search-btn');
 searchbutton.addeventlisetner ('click', () => 
    { 
      const query =searchbar.value.trim() ;
      if (query) {
        alert('searching for"$(query)"....');
      }
    });