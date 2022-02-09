/**
  
  Create a better version of "Continue Shopping" on the cart page by storing
  the latest collection that the user was shopping in and updating the link
  on the cart page accordingly.

**/

<script>
  if(Storage !== undefined) {
    
    //  Set a default here, this could be set in liquid pretty easily
    var defaultLink = "/collections/new-in";
    
    // If we're on a collection template page right now, then set this as the stored collection
    {% if template contains 'collection' %}
      sessionStorage.collection = "{{ collection.url }}";
    {% endif %}

    // Now if we're on the cart page, fetch the collection and update the continue shopping link
    {% if template contains 'cart' %}
    
      if( !sessionStorage.collection ) {
        sessionStorage.collection = defaultLink;
      }
     
      // Either update this according to your element or set the id on the link
      document.getElementById("continue-shopping").href = sessionStorage.collection;
     
    {% endif %}

    }
</script>
