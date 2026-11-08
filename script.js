// ১. পাসওয়ার্ড চেক করার ফাংশন (ডকুমেন্ট লকার)
function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    var secretDocs = document.getElementById("secretDocs");

    // এখানে আপনার পছন্দের পাসওয়ার্ড দিন (যেমন: 1234)
    var correctPassword = "1234"; 

    if (passwordInput === correctPassword) {
        secretDocs.style.display = "block"; // পাসওয়ার্ড ঠিক থাকলে লিঙ্ক দেখা যাবে
        alert("সফলভাবে আনলক হয়েছে!");
    } else {
        secretDocs.style.display = "none";
        alert("ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।");
    }
}

// ২. ছবি বা ভিডিও আপলোড করে প্রিভিউ দেখানোর ফাংশন
function showPreview() {
    var fileInput = document.getElementById("mediaUpload");
    var previewArea = document.getElementById("previewArea");
    
    // আগের প্রিভিউ মুছে ফেলা
    previewArea.innerHTML = "";

    var file = fileInput.files[0];
    
    if (file) {
        var fileReader = new FileReader();

        fileReader.onload = function(event) {
            var fileUrl = event.target.result;
            
            // চেক করা ফাইলটি ছবি নাকি ভিডিও
            if (file.type.startsWith("image/")) {
                var img = document.createElement("img");
                img.src = fileUrl;
                previewArea.appendChild(img);
            } else if (file.type.startsWith("video/")) {
                var video = document.createElement("video");
                video.src = fileUrl;
                video.controls = true; // ভিডিও প্লে করার কন্ট্রোল দিবে
                previewArea.appendChild(video);
            }
        };

        fileReader.readAsDataURL(file);
    }
}