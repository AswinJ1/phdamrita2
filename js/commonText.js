function mainpageNotification(){
	//var text = "Apply on or before - 5<sup>th</sup> January 2025";
	var text = "<strong>Programs Still Open</strong><br>Ph. D. in Agronomy, Coimbatore<br>Ph. D. in Artificial Intelligence and Data Science, Faridabad <br>Ph. D. in Social & Behavioural Science, Faridabad<br>Last Date to Apply : January 05, 2025";

    //document.getElementById("notificationtitle").innerHTML = text;
    document.write(text)
}

function subpageNotificaton(){
    //var textsub = "Apply on or before - 5<sup>th</sup> January 2025";
	var textsub = "<strong>Programs Still Open</strong><br>Ph. D. in Agronomy, Coimbatore<br>Ph. D. in Artificial Intelligence and Data Science, Faridabad <br>Ph. D. in Social & Behavioural Science, Faridabad<br>Last Date to Apply : January 05, 2025";
    document.write(textsub)
}

function thematicareaNotificaton(){
    var textsub ="<strong>Admission opening soon</strong>";
	//var textsub = "Apply on or before - 5<sup>th</sup> January 2025";
	// var textsub = "<strong>Programs Still Open</strong><br>Ph. D. in Agronomy, Coimbatore<br>Ph. D. in Artificial Intelligence and Data Science, Faridabad <br>Ph. D. in Social & Behavioural Science, Faridabad<br>Last Date to Apply : January 05, 2025";
    //var textsub = "Admissions open for <a href='PhD/phd_doc/PhD_Admissions_open_July_10.pdf' target='_blank' style='color:yellow;'>selected PhD Programs</a> till 5<sup>th</sup> January 2025";
    document.write(textsub)
}

function enqueryForm() {
    // Load the form script
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://aoap.amrita.edu/lead-manager-24/js/2024/organic/phd/lm2024-phd.js";
    document.head.appendChild(script);

    // Load custom CSS
    var style = document.createElement("style");
    style.innerHTML = `
        /* Custom Form Styles */
        #enquire_now {
            background: #ffffff;
            border-radius: 12px;
            padding: 20px;
            max-width: 400px;
            margin: auto;
            box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
            text-align: center;
        }

        /* Add a hover effect for a subtle lift */
        #enquire_now:hover {
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
        }

        #enquire_now h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
            font-weight: 600;
        }

        #enquire_now input, 
        #enquire_now textarea {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 14px;
            outline: none;
            transition: border 0.2s;
        }

        /* Add a focus effect */
        #enquire_now input:focus, 
        #enquire_now textarea:focus {
            border-color: #0056b3;
        }

        #enquire_now button {
            width: 100%;
            background: #007bff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        }

        #enquire_now button:hover {
            background: #0056b3;
        }

        /* Reduce the form height */
        #pop_frame1 {
            height: 450px !important;
            width: 100%;
            border-radius: 12px;
        }
    `;
    document.head.appendChild(style);
}


function applyButton(){
    // var ab = "<a href='https://aoap.amrita.edu/phd-23/index/' class='btn-get-started' target='_blank'>Click Here to Apply Now!</a><br>";
    var ab = "<a href='https://aoap.amrita.edu/phd-24/index/' class='btn-get-started' target='_blank'><button class=\"apply\" id=\"apply\">Click Here to Apply Now!</button></a><br>";
    // var ab = " ";
    document.write(ab)
}

function applyNow(){
    
    var an ="<a class='cta-btn align-middle' href='https://aoap.amrita.edu/phd-24/index/' target='_blank'>Apply Now</a>";
    // var ab = " ";
    document.write(an)
}


