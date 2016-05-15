            var link = document.querySelector(".feedback-btn");
            var popup = document.querySelector(".feedback-form-window");
            var close = popup.querySelector(".feedback-close-btn");
            var form = popup.querySelector("form");
            var user_name = popup.querySelector("[name=user_name]");
            var overlay = document.querySelector(".overlay");
        
            link.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.add("modal-content-show");
                overlay.classList.add("modal-content-show-standart");
                user_name.focus();
            });
        
            close.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.remove("modal-content-show");
                overlay.classList.remove("modal-content-show-standart");
            });
            
            window.addEventListener("keydown",          function(event) {
                if (event.keyCode === 27) {
                if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
                }  
                if (overlay.classList.contains("modal-content-show-standart")) {
                overlay.classList.remove("modal-content-show-standart");  
                }
                }
                });