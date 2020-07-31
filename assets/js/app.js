

  Dropzone.options.myDrop1 = {
    init: function() {
      this.on("addedfile", function(file) { 
        file.previewElement.addEventListener('click', function(){
            document.querySelector('.dz-preview').remove()
        })
      });
    }
  };

  Dropzone.options.myDrop = {
    init: function() {
      this.on("addedfile", function(file) { 
        file.previewElement.addEventListener('click', function(){
            document.querySelector('.dz-preview').remove()
        })
      });
    }
  };
