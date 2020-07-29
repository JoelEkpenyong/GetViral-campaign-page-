fileUpload = document.querySelector('#my-awesome-dropzone')

Dropzone.options.myAwesomeDropzone = {
    init: function() {
      this.on("addedfile", function(file) { 
        file.previewElement.addEventListener('click', function(){
            document.querySelector('.dz-preview').remove()
        })
      });
    }
  };
